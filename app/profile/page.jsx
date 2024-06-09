"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchMemberbyEmail } from "@/utils/requests";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);
  const [memberLogueado, setMemberLogueado] = useState(null);
  const [loading, setLoading] = useState(true);
  const profileImage = session?.user?.image;
  const profileName = session?.user?.name;
  const profileEmail = session?.user?.email;

  useEffect(() => {
    setMounted(true);
    //toast.success("perfil", profileEmail);

    const fetchMemberData = async () => {
      if (!profileEmail) return <h1>Registro NO encontrado {profileEmail}</h1>;
      try {
        console.log("Mail desde el profile", profileEmail);
        const member = await fetchMemberbyEmail(profileEmail);
        setMemberLogueado(member);
        console.log("desde request, el member es:", member);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (memberLogueado === null) {
      fetchMemberData();
    }
  }, [profileEmail, memberLogueado]);

  if (!memberLogueado && !loading) {
    return <h1>Registro no encontrado</h1>;
  }

  return (
    <>
      {mounted && !loading && (
        <div className="w-full max-w-lg px-8 self- py-4 mt-16 bg-gray-300 rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex justify-center -mt-16 md:justify-end">
            <Image
              className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
              alt="Testimonial avatar"
              src={profileImage}
              width={0}
              height={0}
            />
          </div>

          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            {memberLogueado[0].nombre + " " + memberLogueado[0].apellido}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Mail: {profileEmail}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Empresa: {memberLogueado[0].empresa}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Rol: {memberLogueado[0].rol}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Teléfono: {memberLogueado[0].telefono}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Provincia: {memberLogueado[0].provincia}
          </p>
          <div className="flex justify-end mt-4">
            <Link
              href={`/members/${memberLogueado[0].id}/edit`}
              className="text-md font-medium text-blue-600 dark:text-blue-300"
              tabindex="0"
              role="link"
            >
              Ver más detalles / editar
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
