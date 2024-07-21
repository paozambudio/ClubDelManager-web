"use client";
import {
  buscarMiembros,
  fetchMemberbyEmail,
  puntajeTotal,
  ultimaParticipacion,
} from "@/utils/requests";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
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
    accepted_terms: false,
    accepted_terms_date: "1900-01-01",
  });

  const [members, setMembers] = useState([
    {
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
    },
  ]);
  const [scoreTotal, setScoreTotal] = useState(0);
  const [participationLastDate, setParticipationLastDate] =
    useState("01/01/2024");
  const [totalMembers, setTotalMembers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      /*const data = await buscarMiembros();
      setMembers(data);
      setTotalMembers(data.length);
      console.log("Miembros: ", members);*/
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (session) {
      const buscarEmail = async () => {
        const logueado = await fetchMemberbyEmail(session.user?.email);

        if (logueado.length == 1) {
          setMiembro(logueado[0]);

          const score = await puntajeTotal(logueado[0].id);
          setScoreTotal(score.total_score);

          const lastDate = await ultimaParticipacion(logueado[0].id);
          setParticipationLastDate(lastDate.ultima_participacion);
        }
      };
      buscarEmail();
    }
  }, [session]);

  const memberEditUrl = `${apiDomain}/members/${miembro.id}/benefit`;

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {session && (
          <div className="w-full max-w-sm px-4 py-3 m-10 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md shadow-md ">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
                  Conocenos!
                </h1>
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

            <br />
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
              Última partipación: {participationLastDate}
              <br />
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-5 h-5 text-teal-600 font-bold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Reglamento Interno ({miembro.accepted_terms_date})
              </span>
              Puntos Acumulados:{" "}
              <span className="font-semibold"> {scoreTotal} </span>
              <Link
                href={`/members/${miembro.id}/events/`}
                className="underline  text-sky-600 "
              >
                Ver actividad
              </Link>
              <br />
            </p>
          </div>
        )}

        {session && (
          <div className="w-full max-w-sm px-4 py-3 m-10 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md shadow-md ">
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
