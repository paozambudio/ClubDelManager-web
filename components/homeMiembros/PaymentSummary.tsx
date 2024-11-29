"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Copy, SquareCheckBig } from "lucide-react";

import { fetchMemberbyEmail } from "@/utils/requests";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
interface Payment {
  payment_period: string;
  amount: string;
  payment_date: string;
  payment_method: number;
}

interface Member {
  id: number;
  first_name: string;
  last_name: string;
}

interface Summary {
  year: number;
  total_amount: string;
  total_payments: number;
}

interface PaymentData {
  member: Member;
  payments: Payment[];
  total_paid_this_year: number;
  status: string;
  summary: Summary;
}

export default function PaymentSummary() {
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [latestPayment, setLatestPayment] = useState<Payment | null>(null);
  const [copied, setCopied] = useState(false);

  const { data: session } = useSession();
  const [miembro, setMiembro] = useState({
    id: "",
    document_id: "",
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    photo: "",
    address_street: "",
    address_number: "",
    address_region: "",
    address_state: "Mendoza",
    address_country: "Argentina",
    linkedin_url: "",
    instagram_url: "",
    profession: "",
    company: "",
    position: "",
    lead_persons: false,
    manager_position: false,
    added_value: "",
    teaching_skilss: false,
    membership_reason: "",
    board_member: false,
    board_position: "",
    birthdate: "1900-01-01",
    startdate: "1900-01-01",
    status_active: true,
    accepted_terms: false,
    accepted_terms_date: "1900-01-01",
  });

  useEffect(() => {
    if (session) {
      const fetchData = async () => {
        const logueado = await fetchMemberbyEmail(session.user?.email);

        if (logueado.length == 1) {
          setMiembro(logueado[0]);
        }
      };
      fetchData();
    }
  }, []);

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await fetch(
          `${apiDomain}/members/members/${miembro.id}/payments`
        );
        if (!response.ok) {
          throw new Error("Debe iniciar sesión");
        }

        const data: PaymentData = await response.json();
        setPaymentData(data);
        console.log("Pagos:", data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPaymentData();
  }, [miembro]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">Cargando...</div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!paymentData) {
    return <div>No se encontraron datos de pago.</div>;
  }

  const handleCopy = () => {
    navigator.clipboard
      .writeText("elclubdelmanager")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Muestra el mensaje de copiado por 2 segundos
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="w-full max-w-sm px-4 py-3 m-10 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md shadow-md ">
        <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
          Resumen de Pagos
        </h1>

        <div className="space-y-6">
          <div>
            <p className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-600">
              Total Pagado ({new Date().getFullYear()})
            </p>
            <div className="text-xl font-bold text-gray-900">
              ${paymentData.total_paid_this_year}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Últimos Períodos Pagados
            </h3>
            <div className="flex flex-wrap gap-2">
              {paymentData.payments
                .sort((a, b) => {
                  // Convertimos el formato "MM-YYYY" a un objeto Date para ordenarlo correctamente
                  const [monthA, yearA] = a.payment_period
                    .split("-")
                    .map(Number);
                  const [monthB, yearB] = b.payment_period
                    .split("-")
                    .map(Number);

                  const dateA = new Date(yearA, monthA - 1); // Meses en JavaScript son 0-indexados
                  const dateB = new Date(yearB, monthB - 1);

                  return dateA - dateB; // Orden ascendente
                })
                .slice(-4)
                .map((payment) => (
                  <span
                    key={payment.payment_period}
                    className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-sky-200 text-gray-700"
                  >
                    {payment.payment_period}
                  </span>
                ))}
            </div>
          </div>

          <div className="text-sm font-medium text-gray-900 mb-2 w-full">
            <span className="flex items-center font-semibold gap-2">
              <SquareCheckBig className="h-5 w-5 text-red-500" />
              Importante
            </span>

            <p className="flex items-center gap-3 m-2">
              Transferiar al Alias:{" "}
              <span className="font-semibold text-gray-600">
                elclubdelmanager
              </span>
              <Copy
                className="h-4 w-4 cursor-pointer text-gray-400"
                onClick={handleCopy}
              />
            </p>

            {copied && <span className="text-xs text-red-500">¡Copiado!</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
