"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import axios from "axios";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const EventsPage = () => {
  const { data: session } = useSession();

  // Estado para manejar la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Número de tarjetas por página
  const [totalMembers, setTotalMembers] = useState(0);

  const [events, setEvents] = useState([
    {
      id: "",
      event_name: "",
      event_date: "1900-01-01",
      location: "",
      description: "",
    },
  ]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(`${apiDomain}/members/events/show_calendar_events/`);
  }, []);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setEvents(response.data);
      setNextPageUrl(response.data.next);
      setPrevPageUrl(response.data.previous);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
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

  return (
    <section className="container px-4 mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center gap-x-3 ">
          <h2 className="text-lg font-medium text-sky-600 ">Eventos</h2>
          &nbsp;&nbsp;
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
                      Evento
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm hidden md:table-cell font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Fecha
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm hidden md:table-cell font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Ubicación
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm hidden md:table-cell font-normal text-left rtl:text-right text-gray-500 "
                    >
                      + Info
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
                  {events.map((uno) => (
                    <tr key={uno.id}>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-black-800 ">
                            {uno.event_name}
                          </h2>
                        </div>
                      </td>

                      <td className="px-12 hidden md:table-cell py-4 text-sm whitespace-nowrap">
                        <div>
                          <h4 className="text-gray-700 ">{uno.event_date}</h4>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm hidden md:table-cell whitespace-nowrap">
                        <div>
                          <h2 className="text-gray-700 ">{uno.location}</h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm hidden md:table-cell whitespace-nowrap">
                        <div>
                          <h2 className="text-gray-700 ">{uno.description}</h2>
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

export default EventsPage;
