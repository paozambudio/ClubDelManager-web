"use client";
import React, { useState, useEffect } from "react";
import { QRCode } from "qrcode.react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { buscarMiembros, fetchMemberbyEmail } from "@/utils/requests";

const QrMember = () => {
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

  const [miembros, setMiembros] = useState([
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
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await buscarMiembros();
      setMiembros(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const buscarEmail = async () => {
      const logueado = await fetchMemberbyEmail(session.user?.email);
      console.log("Miembro logueado:", logueado);
      setMiembro(logueado);
    };
    buscarEmail();
  }, [session]);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {session && (
          <div className="w-full max-w-sm px-4 py-3 m-10 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                  Hoy Somos
                </h1>
                <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                  {miembros.length} Miembros
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Si querés conocer a cada uno de los miembros, hacé click &nbsp;
                <Link
                  href="/members"
                  className="underline font-semibold text-sky-600"
                >
                  Acá
                </Link>
              </p>
            </div>
          </div>
        )}

        {session && (
          <div className="w-full max-w-sm px-4 py-3 m-10 bg-white rounded-md shadow-md dark:bg-gray-800">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                  Tus datos
                </h1>
                <span className="px-3 py-1 text-xs text-blue-800  bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                  {session.user?.email}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Nombre: {session.user?.name} &nbsp;&nbsp; <br />
                Documento: {miembro.document_id} <br />
                Puntos Acumulados: <span className="font-semibold">1500</span>
                <br />
                <br />
                <Link
                  href={`/members/${miembro.id}/edit/`}
                  className="underline font-semibold text-sky-600 "
                >
                  Ver más datos
                </Link>
              </p>
              <div className="mt-4">
                <QRCode value={miembro.document_id} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default QrMember;
