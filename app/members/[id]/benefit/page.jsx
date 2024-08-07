"use client";
import React from "react";
import { useParams } from "next/navigation";
import { buscarMiembros, fetchMemberbyEmail } from "@/utils/requests";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { fetchMember } from "@/utils/requests";

const MemberEditPage = () => {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        if (!id) return <h1>No se encontro información</h1>;
        const memberData = await fetchMember(id);

        setMiembro(memberData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMemberData();
  }, []);

  // Obtener fecha y hora actual
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();
  return (
    <div className="flex items-center justify-center border-4 w- border-sky-600 ">
      {miembro && (
        <span className="px-3 py-1 text-sm text-green-800 uppercase bg-teal-200 rounded-full">
          Miembro: <span className="font-bold">ACTIVO</span>
        </span>
      )}
      {!miembro && (
        <span className="px-3 py-1 text-xs text-red-800 uppercase bg-pink-500-200 rounded-full">
          Miembro: <span className="font-bold">INACTIVO</span>
        </span>
      )}
      <br />
      <div className="p-6">
        <p className="mt-2 text-md text-gray-600 dark:text-gray-600">
          Fecha: {formattedDate} <br />
        </p>
        <p className="mt-2 text-md text-gray-600 dark:text-gray-600">
          Documento: {miembro.document_id}
        </p>
        <p className="mt-2 text-md text-gray-600 dark:text-gray-600">
          Nombre: {miembro.first_name} &nbsp; {miembro.last_name}
        </p>
      </div>
    </div>
  );
};

export default MemberEditPage;
