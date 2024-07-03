"use client";
import { buscarMiembros, fetchMemberbyEmail } from "@/utils/requests";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { QRCode } from "qrcode.react";
import { QRCodeSVG } from "qrcode.react";
const apiDomain = process.env.NEXT_PUBLIC_DOMAIN || null;

const MemberSummary = () => {
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
  });

  const [miembros, setMiembros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await buscarMiembros();
      setMiembros(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (session) {
      const buscarEmail = async () => {
        const logueado = await fetchMemberbyEmail(session.user?.email);

        console.log("Miembro logueado:", logueado);
        if (logueado.length == 1) setMiembro(logueado[0]);
      };
      buscarEmail();
    }
  }, [session]);

  const memberEditUrl = `${apiDomain}/members/${miembro.id}/benefit`;

  // Obtener fecha y hora actual
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {session && (
          <div className="w-full max-w-sm px-4 py-3 m-10 bg-white rounded-md shadow-md ">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
                  Hoy Somos
                </h1>
                <span className="px-3 py-1 text-xs text-green-800 uppercase bg-teal-200 rounded-full">
                  {miembros.length} Miembros
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-600">
                Si querés conocer a cada uno de los miembros, hacé click &nbsp;
                <Link
                  href="/members"
                  className="underline font-semibold text-sky-600"
                >
                  Acá
                </Link>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <Link
                href={`/members/${miembro.id}/edit/`}
                className="underline font-semibold text-sky-600 "
              >
                <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
                  Tus datos
                </h1>
              </Link>
              <span className="px-3 py-1 text-xs text-blue-800 bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                {session.user?.email}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600 ">
              Nombre: {session.user?.name} &nbsp;&nbsp; <br />
              Última actividad con el CDM: 18 de Mayo 2024{" "}
              {/* {miembro.document_id} */} <br />
              Puntos Acumulados: <span className="font-semibold">1500</span>
              <br />
              <br />
            </p>
          </div>
        )}

        {session && (
          <div className="w-full max-w-sm px-4 py-3 m-10 bg-white rounded-md shadow-md ">
            <div>
              <div className=" mt-4">
                <p className="font-bold">
                  Credencial para beneficios
                  <br />
                  <br />
                </p>
                <div className="flex flex-col sm:flex-row mt-4">
                  <div className="flex justify-center sm:w-1/2">
                    <Link href={memberEditUrl}>
                      <QRCodeSVG value={memberEditUrl} />
                    </Link>
                  </div>
                  {miembro.photo && (
                    <div className="flex justify-center sm:w-1/2 mt-4 sm:mt-0">
                      <img
                        src={miembro.photo}
                        alt="Miembro Foto"
                        className="object-cover rounded-md w-36 h-36"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MemberSummary;
