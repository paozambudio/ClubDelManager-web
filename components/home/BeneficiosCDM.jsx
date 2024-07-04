"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";

const beneficios = [
  {
    id: 1,
    src: "/img-logo-Beneficio/AgustinSaitta.png",
    title: "Agustín Saitta",
    description: "Magia Mental & Boutique",
    descount: "15%",
    type: "Recreación",
  },
  {
    id: 2,
    src: "/img-logo-Beneficio/Bianco&Nero.png",
    title: "Bianco & Nero",
    description: "Pago en Efectivo",
    descount: "15%",
    type: "Gastronomía",
  },
  {
    id: 3,
    src: "/img-logo-Beneficio/CorazonDelSol.png",
    title: "Corazón del Sol",
    description: "Wine testing",
    descount: "20%",
    type: "Gastronomía",
  },
  {
    id: 4,
    src: "/img-logo-Beneficio/UNC.png",
    title: "MBA UNC",
    description: "Dto mensual/inscripción",
    descount: "20% - 25%",
    type: "Foramación y Capacitación",
  },
  {
    id: 5,
    src: "/img-logo-Beneficio/HDIM.png",
    title: "Consultora HDIM",
    description: "Para cursos abiertos",
    descount: "20%",
    type: "Foramación y Capacitación",
  },
  {
    id: 6,
    src: "/img-logo-Beneficio/SportClub.png",
    title: "Gimnasio Sport Club",
    description: "Dcto en abono mensual",
    descount: "XX%",
    type: "Recreación",
  },
  {
    id: 7,
    src: "/img-logo-Beneficio/SumaQ.png",
    title: "SPA SUMAQ",
    description: "  ",
    descount: "XX%",
    type: "Bienestar",
  },
  {
    id: 8,
    src: "/img-logo-Beneficio/FarmaciaDelPlata.png",
    title: "Farmacias Del Plata",
    description: "  ",
    descount: "XX%",
    type: "Bienestar",
  },
  {
    id: 9,
    src: "/img-logo-Beneficio/DonQuijote.png",
    title: "Don Quijote",
    description: "Cocina Española",
    descount: "20%",
    type: "Gastronomía",
  },
  {
    id: 10,
    src: "/img-logo-Beneficio/ElGallego.png",
    title: "EL GALLEGO",
    description: "La Barraca",
    descount: "15%",
    type: "Gastronomía",
  },
];

const BeneficiosCDM = () => {
  const { data: session } = useSession();

  // Estado para manejar la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Número de tarjetas por página

  // Paginación
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentBeneficios = beneficios.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(beneficios.length / itemsPerPage);

  return (
    <div className="transparent">
      {session && (
        <div className="container px-6 py-8 mx-auto justify-items-center flex-col">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl ">
            Beneficios de los miembros del Club
          </h1>

          <div className="grid grid-cols-1 gap-4 mt-6 xl:mt-12 xl:gap-2 md:grid-cols-2 lg:grid-cols-4 justify-start">
            {currentBeneficios.map((bene) => (
              <div
                id={bene.id}
                className="w-full p-8 space-y-2 text-center rounded-lg  flex flex-col justify-center"
                style={{ height: "200px" }} // Ajusta la altura según tus necesidades
              >
                <div className="flex flex-col items-center justify-start h-full">
                  <p className="text-gray-500 font-bold uppercase justify-start">
                    {bene.title}
                  </p>
                  <p className="text-gray-500 text-sm justify-start">
                    {bene.description}
                  </p>
                  <br />

                  <h2 className="text-4xl font-semibold text-gray-700 uppercase">
                    {bene.descount}
                  </h2>
                  <div className="flex flex-grow items-center justify-center">
                    <img
                      src={bene.src}
                      className="mx-auto "
                      height="80"
                      width="80"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50"
              disabled={currentPage === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <span className="text-gray-600">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeneficiosCDM;
