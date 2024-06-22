"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const buscarMiembros = async () => {
  try {
    //const res = await fetch(`http://127.0.0.1:8000/api/members/${filtro}/`);
    //const res = await fetch("http://127.0.0.1:8000/api/members/members/");
    const res = await fetch(`${apiDomain}/members/members/`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    console.log("Resultado", res);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
};

const MembersPage = () => {
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
  const [filtro, setFiltro] = useState("");
  const [miembrosFiltrados, setMiembrosFiltrados] = useState([
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
      setMiembrosFiltrados(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Filtro: ", filtro);
    if (filtro === "Directivos") {
      const miembrosConFiltro = miembros.filter(
        (miembro) => miembro.board_member === true
      );
      setMiembrosFiltrados(miembrosConFiltro);
    } else {
      setMiembrosFiltrados(miembros);
    }
    console.log("Miembros filtrados", miembrosFiltrados);
  }, [filtro, miembros]);

  const handleBuscar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const miembrosConFiltro = miembros.filter((uno) =>
      uno.last_name.toLowerCase().includes(value)
    );
    setMiembrosFiltrados(miembrosConFiltro);
  };

  return (
    <section className="container px-4 mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-sky-600 dark:text-white">
              Hoy somos
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {miembrosFiltrados.length} miembros
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 md:flex md:items-center md:justify-between">
        <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
          <button
            className={`px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 hover:bg-gray-100 ${
              filtro === ""
                ? "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                : "text-gray-600 dark:text-gray-300"
            }`}
            onClick={() => setFiltro("")}
          >
            Ver Todos
          </button>

          <button
            className={`px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 hover:bg-gray-100 ${
              filtro === "Directivos"
                ? "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                : "text-gray-600 dark:text-gray-300"
            }`}
            onClick={() => setFiltro("Directivos")}
          >
            Directivos
          </button>
        </div>

        <div className="relative flex items-center mt-4 md:mt-0">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>

          <input
            type="text"
            placeholder="Buscar por apellido"
            className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={handleBuscar}
          />
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Nombre
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Apellido
                    </th>
                    {filtro === "Directivos" && (
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Cargo Directivo
                      </th>
                    )}
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Estado
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      E-Mail
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Editar
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {miembrosFiltrados.map((uno) => (
                    <tr key={uno.document_id}>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-black-800 dark:text-black ">
                            {uno.first_name}
                          </h2>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        {uno.last_name}
                      </td>
                      {filtro === "Directivos" && (
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div>
                            <h4 className="text-gray-700 dark:text-gray-200">
                              {uno.board_position}
                            </h4>
                          </div>
                        </td>
                      )}
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        {uno.status_active && (
                          <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            Activo
                          </div>
                        )}
                        {!uno.status_active && (
                          <div className="inline px-3 py-1 text-sm font-normal rounded-full text-red-500 gap-x-2 bg-red-100/60 dark:bg-gray-800">
                            Inactivo
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 className="text-gray-700 dark:text-gray-200">
                            {uno.email}
                          </h4>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <Link
                            href={`/members/${uno.id}/edit/`}
                            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Página{" "}
          <span className="font-medium text-gray-700 dark:text-gray-100">
            1 de 10
          </span>
        </div>

        <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
          <a
            href="#"
            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>anterior</span>
          </a>

          <a
            href="#"
            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <span>Siguiente</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MembersPage;
