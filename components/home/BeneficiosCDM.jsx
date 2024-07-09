"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { fetchBeneficios } from "@/utils/requests";
import axios from "axios";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const BeneficiosCDM = () => {
  const { data: session } = useSession();
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const [beneficiosData, setBeneficiosData] = useState([
    {
      id: 0,
      tipo_beneficio: "",
      titulo_beneficio: "",
      descripcion_beneficio: "",
      descripcion_beneficio_largo: "",
      logo: "",
      valor_descuento: 0,
      unidad_descuento: "%",
      beneficio_active: true,
    },
  ]);
  const [tipos, setTipos] = useState([]);
  const [selectedTipo, setSelectedTipo] = useState();

  // Estado para manejar la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Número de tarjetas por página

  useEffect(() => {
    fetchData(`${apiDomain}/members/beneficios/`);
  }, []);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const data = response.data.results;
      setBeneficiosData(data.filter((uno) => uno.beneficio_active));
      const tipos_beneficio = Array.from(
        new Set(data.map((bene) => bene.tipo_beneficio))
      );
      setTipos(tipos_beneficio);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Paginación
  const handleNextPage = () => {
    if (nextPageUrl) {
      fetchData(nextPageUrl);
    }
  };

  const handlePrevPage = () => {
    if (prevPageUrl) {
      fetchData(prevPageUrl);
    }
  };
  /* const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentBeneficios = beneficiosData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(beneficiosData.length / itemsPerPage); */

  /* const handleChangeTipo(e)=>{
    e.preventDefault();

  } */

  return (
    <div className="transparent">
      {!session && (
        <div className="container px-6 py-2 mx-auto justify-items-center flex-col">
          <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-gray-800">
            Beneficios <br /> de los miembros&nbsp;
            <span class="underline decoration-blue-500">Del Club</span>
          </h1>

          <div className="grid grid-cols-1 gap-4 mt-6 xl:mt-12 xl:gap-2 md:grid-cols-2 lg:grid-cols-4 justify-start">
            {beneficiosData.map((bene) => (
              <div
                key={bene.id}
                className="w-full p-8 text-center rounded-lg flex flex-col relative group"
              >
                <div className="flex flex-col items-center justify-between flex-grow">
                  <div className="mb-4">
                    <p className="text-gray-500 font-bold uppercase">
                      {bene.titulo_beneficio}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {bene.descripcion_beneficio}
                    </p>
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold text-gray-700 uppercase">
                      {bene.valor_descuento} {bene.unidad_descuento}
                    </h2>
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <img
                      src={bene.logo}
                      className="h-20 w-20 object-contain"
                      alt="Logo"
                    />
                  </div>
                </div>
                <br />
                {bene.descripcion_beneficio_largo && (
                  <div className="hidden group-hover:block absolute w-48 px-5 py-3 text-xs text-center text-gray-100 -translate-x-1/2 bg-slate-500 rounded-lg bottom-8 left-1/2 shadow-lg">
                    {bene.descripcion_beneficio_largo}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            {prevPageUrl && (
              <button
                onClick={handlePrevPage}
                className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50"
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
            )}

            {/*  <span className="text-gray-600">
              Página {currentPage} de {totalPages}
              
            </span> */}

            {nextPageUrl && (
              <button
                onClick={handleNextPage}
                className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50"
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
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BeneficiosCDM;
