"use client";
import React from "react";
import { buscarMiembros, fetchMemberbyEmail } from "@/utils/requests";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const MemberEditPage = () => {
  const { data: session } = useSession();

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
        if (logueado.length == 1) setMiembros(logueado[0]);
      };
      buscarEmail();
    }
  }, [session]);
  return (
    <div className="flex flex-wrap justify-center p-20 ">
      {miembros && (
        <spam className="font-bold text-green-700">Miembro: ACTIVO</spam>
      )}
      {!miembros && (
        <spam className=" font-bold text-red-700">Miembro: INACTIVO</spam>
      )}
    </div>
  );
};

export default MemberEditPage;
