"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { fetchMemberbyEmail } from "@/utils/requests";
import { useSession } from "next-auth/react";
import axios from "axios";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const MembersPage = () => {
  const { data: session } = useSession();

  // Estado para manejar la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Número de tarjetas por página
  const [totalMembers, setTotalMembers] = useState(0);

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
  const [filtroContains, setFiltroContains] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
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

  const [miembroLogueado, setMiembroLogueado] = useState({
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
    isAdmin: false,
  });

  const buscarMail = async () => {
    if (session) {
      const memberExist = await fetchMemberbyEmail(session.user?.email);
      console.log("Miembro logueado", memberExist);
      setMiembroLogueado(memberExist);
    }
  };

  useEffect(() => {
    fetchData(`${apiDomain}/members/members/`);
    setMiembros(miembrosFiltrados);
    buscarMail();
  }, []);

  useEffect(() => {
    console.log("Filtro: ", filtro);
    if (filtro === "Directivos") {
      fetchData(`${apiDomain}/members/members/board-members/`);
    } else {
      fetchData(`${apiDomain}/members/members/`);
    }
    console.log("Miembros filtrados", miembrosFiltrados);
  }, [filtro]);

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setTotalMembers(response.data.count);
      setMiembrosFiltrados(response.data.results);
      setNextPageUrl(response.data.next);
      setPrevPageUrl(response.data.previous);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBuscar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    fetchData(
      `${apiDomain}/members/members/filter-by-last-name/?last_name=${value}`
    );
    /* console.log("Filtro: ", filtroContains);
    fetchData(
      `${apiDomain}/members/members/filter-by-${filtroContains}/?${filtroContains}=${value}`
    ); */
  };

  const handleExportar = async () => {
    try {
      // Solicitud GET para descargar el archivo
      const response = await axios.get(
        `${apiDomain}/members/exportar-miembros/`,
        {
          responseType: "blob", // Necesario para manejar archivos binarios
        }
      );

      // Crear un URL de objeto para el archivo descargado
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Crear un enlace y simular un clic para descargar el archivo
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "members.xlsx"); // Nombre del archivo a descargar
      document.body.appendChild(link);
      link.click();

      // Limpiar URL de objeto
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error exporting members:", error);
    }
  };

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

  /* const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const txtBuscarRef = useRef(null);

  const cambioFiltro = (filtro: string) => {
    setFiltroContains(filtro);
    // Asigna el foco al campo txtBuscar
    setIsOpen(!isOpen);
    if (txtBuscarRef.current) {
      txtBuscarRef.current.focus();
    }
  }; */

  return (
    <section className="container px-4 mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-x-3 gap-y-2">
          <h2 className="text-lg font-medium text-sky-600">Hoy somos</h2>
          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
            {totalMembers} miembros
          </span>
          {miembroLogueado.isAdmin && (
            <button
              className="flex items-center justify-center  sm:w-auto px-5 py-2 font-semibold text-sm tracking-wide text-white transition-colors duration-200 bg-sky-500 rounded-lg shrink-0 gap-x-2 hover:bg-sky-600 dark:hover:bg-blue-500 dark:bg-blue-600"
              onClick={handleExportar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M384 121.941V456c0 30.928-25.072 56-56 56H56c-30.928 0-56-25.072-56-56V56c0-30.928 25.072-56 56-56h201.941c14.891 0 29.129 5.891 39.6 16.371l70.059 70.059c10.48 10.472 16.4 24.709 16.4 39.6zM224 136V48H56c-4.411 0-8 3.589-8 8v400c0 4.411 3.589 8 8 8h272c4.411 0 8-3.589 8-8V144H248c-13.255 0-24-10.745-24-24zm-98.907 98.209l29.05 43.572 29.785-43.578c3.037-4.437 7.975-7.203 13.372-7.203h28.084c5.262 0 8.316 5.947 5.393 10.206l-41.301 61.87 42.503 62.94c2.861 4.235-.153 10.045-5.398 10.045H197.3c-5.401 0-10.342-2.772-13.376-7.229L154.162 328.9l-29.69 43.491c-3.037 4.437-7.975 7.229-13.372 7.229H82.806c-5.262 0-8.316-5.811-5.393-10.045l42.506-62.94-41.302-61.87c-2.922-4.259.131-10.206 5.393-10.206h28.084c5.401 0 10.339 2.766 13.378 7.203z" />
              </svg>
              <span>Exportar</span>
            </button>
          )}
          {/* <button
            className="flex items-center justify-center  sm:w-auto px-5 py-2 font-semibold text-sm tracking-wide text-white transition-colors duration-200 bg-sky-500 rounded-lg shrink-0 gap-x-2 hover:bg-sky-600 dark:hover:bg-blue-500 dark:bg-blue-600"
            onClick={handleExportar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M384 121.941V456c0 30.928-25.072 56-56 56H56c-30.928 0-56-25.072-56-56V56c0-30.928 25.072-56 56-56h201.941c14.891 0 29.129 5.891 39.6 16.371l70.059 70.059c10.48 10.472 16.4 24.709 16.4 39.6zM224 136V48H56c-4.411 0-8 3.589-8 8v400c0 4.411 3.589 8 8 8h272c4.411 0 8-3.589 8-8V144H248c-13.255 0-24-10.745-24-24zm-98.907 98.209l29.05 43.572 29.785-43.578c3.037-4.437 7.975-7.203 13.372-7.203h28.084c5.262 0 8.316 5.947 5.393 10.206l-41.301 61.87 42.503 62.94c2.861 4.235-.153 10.045-5.398 10.045H197.3c-5.401 0-10.342-2.772-13.376-7.229L154.162 328.9l-29.69 43.491c-3.037 4.437-7.975 7.229-13.372 7.229H82.806c-5.262 0-8.316-5.811-5.393-10.045l42.506-62.94-41.302-61.87c-2.922-4.259.131-10.206 5.393-10.206h28.084c5.401 0 10.339 2.766 13.378 7.203z" />
            </svg>
            <span>Exportar</span>
          </button> */}
          <Link href="/members/add">
            <button className="flex items-center justify-center w-full sm:w-auto px-5 py-2 font-semibold text-sm tracking-wide text-white transition-colors duration-200 bg-sky-500 rounded-lg shrink-0 gap-x-2 hover:bg-sky-600 dark:hover:bg-blue-500 dark:bg-blue-600">
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
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Nuevo</span>
            </button>
          </Link>
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
            className={`px-5 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm  hover:bg-gray-100 ${
              filtro === "Directivos"
                ? "bg-gray-100  text-gray-600 "
                : "text-gray-600 "
            }`}
            onClick={() => setFiltro("Directivos")}
          >
            Directivos
          </button>
        </div>
        <div className="flex cols col-2 ">
          {/* <select
            type="text"
            id=""
            name=""
            className="border rounded w-full py-2 px-3 mb-2 bg-gray-200 text-gray-400 font-sans text-md"
            value={filtroContains}
            onChange={cambioFiltro}
          >
            <option key="Todos" value="Todos">
              (Seleccionar filtro)
            </option>

            <option key="last_name" value="last_name">
              Apellido
            </option>

            <option key="position" value="position">
              Posición / Cargo
            </option>

            <option key="company" value="company">
              Empresa
            </option>
          </select> */}

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
              // ref={txtBuscarRef}
              placeholder="Ingresar apellido"
              className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleBuscar}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th scope="col" className="">
                      &nbsp;
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Nombre
                    </th>

                    {filtro === "Directivos" && (
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal  text-left rtl:text-right text-gray-500 "
                      >
                        Cargo Directivo
                      </th>
                    )}
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm hidden md:table-cell font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Empresa
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm hidden md:table-cell font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Posición
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
                  {miembrosFiltrados.map((uno) => (
                    <tr key={uno.document_id}>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            fill={` ${uno.status_active ? "green" : "#ff0000"}`}
                          />
                        </svg>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-black-800 ">
                            {uno.first_name} &nbsp; {uno.last_name}
                          </h2>
                          <h3 className="text-gray-500 ">{uno.email}</h3>
                        </div>
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
                      <td className="px-12 hidden md:table-cell py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 className="text-gray-700 ">{uno.company}</h4>
                        </div>
                        {/* {uno.status_active && (
                          <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 ">
                            Activo
                          </div>
                        )}
                        {!uno.status_active && (
                          <div className="inline px-3 py-1 text-sm font-normal rounded-full text-red-500 gap-x-2 bg-red-100/60 ">
                            Inactivo
                          </div>
                        )} */}
                      </td>
                      <td className="px-4 py-4 text-sm hidden md:table-cell whitespace-nowrap">
                        <div>
                          <h2 className="text-gray-700 ">{uno.position}</h2>
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
        {/*<div className="text-sm text-gray-500 dark:text-gray-400">
          Página
          <span className="font-medium text-gray-700 dark:text-gray-100">
            {currentPage} de {totalPages}
          </span>
        </div> */}

        <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
          {prevPageUrl && (
            <button
              className="inline-flex items-center justify-center px-10 py-2 font-medium text-white duration-300 bg-sky-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              onClick={handlePrevPage}
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
          )}

          {nextPageUrl && (
            <button
              className="inline-flex items-center justify-center px-10 py-2 font-medium text-white duration-300 bg-sky-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              onClick={handleNextPage}
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
          )}
        </div>
      </div>
    </section>
  );
};

export default MembersPage;
