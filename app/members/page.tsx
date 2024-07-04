"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { buscarMiembros } from "@/utils/requests";
import { useSession } from "next-auth/react";
import LinkedinIcon from "@mui/icons-material/LinkedIn";

const MembersPage = () => {
  const { data: session } = useSession();

  // Estado para manejar la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Número de tarjetas por página

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
      added_value: "",
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
      added_value: "",
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

  // Paginación
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentMiembros = miembrosFiltrados.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(miembrosFiltrados.length / itemsPerPage);

  return (
    <section className="container px-4 mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-sky-600 ">Hoy somos</h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
              {miembrosFiltrados.length} miembros
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 md:flex md:items-center md:justify-between">
        <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg  rtl:flex-row-reverse ">
          <button
            className={`px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm  hover:bg-gray-100 ${
              filtro === "" ? "bg-gray-100  text-gray-600 " : "text-gray-600 "
            }`}
            onClick={() => setFiltro("")}
          >
            Ver Todos
          </button>

          <button
            className={`px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 hover:bg-gray-100 ${
              filtro === "Directivos"
                ? "bg-gray-100  text-gray-600 "
                : "text-gray-600 "
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
              className="w-5 h-5 mx-3 text-gray-400 "
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
            className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            onChange={handleBuscar}
          />
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      &nbsp;
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Nombre
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Apellido
                    </th>
                    {filtro === "Directivos" && (
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                      >
                        Cargo Directivo
                      </th>
                    )}
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Estado
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Linkedin
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      E-Mail
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Editar
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {currentMiembros.map((uno) => (
                    <tr key={uno.document_id}>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        {uno.photo && (
                          <img
                            src={uno.photo}
                            alt="Miembro Foto"
                            className="object-cover rounded-full w-12 h-12 sm:w-8 sm:h-8"
                          />
                        )}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-black-800 ">
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
                            <h4 className="text-gray-700 ">
                              {uno.board_position}
                            </h4>
                          </div>
                        </td>
                      )}
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        {uno.status_active && (
                          <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 ">
                            Activo
                          </div>
                        )}
                        {!uno.status_active && (
                          <div className="inline px-3 py-1 text-sm font-normal rounded-full text-red-500 gap-x-2 bg-red-100/60 ">
                            Inactivo
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 className="text-gray-700 ">
                            <a
                              href={uno.linkedin_url}
                              target="_blank"
                              className="text-gray-700"
                              aria-label="LinkedIn"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                viewBox="0 0 6 6"
                                fill="currentColor"
                              >
                                <LinkedinIcon />
                              </svg>
                            </a>
                          </h4>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 className="text-gray-700 ">{uno.email}</h4>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          {session &&
                            session.user &&
                            session.user.email === uno.email && (
                              <Link
                                href={`/members/${uno.id}/edit/`}
                                className="text-gray-500 transition-colors duration-200  hover:text-yellow-500 focus:outline-none"
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
                            )}
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
          Página
          <span className="font-medium text-gray-700 dark:text-gray-100">
            {currentPage} de {totalPages}
          </span>
        </div>

        <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
          <button
            className="inline-flex items-center justify-center px-10 py-2 font-medium text-white duration-300 bg-sky-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
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

            <span>&nbsp;Anterior</span>
          </button>

          <button
            className="inline-flex items-center justify-center px-10 py-2 font-medium text-white duration-300 bg-sky-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <span>&nbsp;Siguiente</span>

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
          </button>
        </div>
      </div>
    </section>
  );
};

export default MembersPage;
