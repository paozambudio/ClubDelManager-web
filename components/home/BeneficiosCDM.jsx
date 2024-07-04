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
  },
  {
    id: 2,
    src: "/img-logo-Beneficio/Bianco&Nero.png",
    title: "Bianco & Nero",
    description: "Pago en Efectivo",
    descount: "15%",
  },
  {
    id: 3,
    src: "/img-logo-Beneficio/CorazonDelSol.png",
    title: "Corazón del Sol",
    description: "Magia Mental & Boutique",
    descount: "20%",
  },
  {
    id: 1,
    src: "/img-logo-Beneficio/AgustinSaitta.png",
    title: "Agustín Saitta",
    description: "Magia Mental & Boutique",
    descount: "15%",
  },
  {
    id: 2,
    src: "/img-logo-Beneficio/Bianco&Nero.png",
    title: "Bianco & Nero",
    description: "Pago en Efectivo",
    descount: "15%",
  },
  {
    id: 3,
    src: "/img-logo-Beneficio/CorazonDelSol.png",
    title: "Corazón del Sol",
    description: "Magia Mental & Boutique",
    descount: "20%",
  },
  {
    id: 1,
    src: "/img-logo-Beneficio/AgustinSaitta.png",
    title: "Agustín Saitta",
    description: "Magia Mental & Boutique",
    descount: "15%",
  },
  {
    id: 2,
    src: "/img-logo-Beneficio/Bianco&Nero.png",
    title: "Bianco & Nero",
    description: "Pago en Efectivo",
    descount: "15%",
  },
  {
    id: 3,
    src: "/img-logo-Beneficio/CorazonDelSol.png",
    title: "Corazón del Sol",
    description: "Magia Mental & Boutique",
    descount: "20%",
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
    <div className="transparent dark:bg-gray-900">
      {session && (
        <div className="container px-6 py-8 mx-auto justify-items-center">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
            Beneficios de los miembros del Club
          </h1>

          <div className="grid grid-cols-1 gap-2 mt-6 xl:mt-12 xl:gap-2 md:grid-cols-2 lg:grid-cols-4">
            {currentBeneficios.map((bene) => (
              <div
                id={bene.id}
                className="w-full p-8 space-y-2 text-center rounded-lg dark:border-gray-700 flex flex-col justify-center"
                style={{ height: "200px" }} // Ajusta la altura según tus necesidades
              >
                <p className="text-gray-500 font-bold uppercase dark:text-gray-300">
                  {bene.title}
                </p>
                <p className="text-gray-500 dark:text-gray-300">
                  {bene.description}
                </p>

                <h2 className="text-4xl font-semibold text-gray-700 uppercase dark:text-gray-700">
                  {bene.descount}
                </h2>

                <img
                  src={bene.src}
                  className="mx-auto"
                  height="8096"
                  width="80"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
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
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
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
