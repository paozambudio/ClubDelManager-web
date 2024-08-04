"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import axios from "axios";
import EventsCalendar from "@/components/homeMiembros/EventsCalendar";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const EventsPage = () => {
  const { data: session } = useSession();

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

  const [showTable, setShowTable] = useState(false);

  const toggleView = () => {
    setShowTable(!showTable);
  };

  return (
    <section className="container px-4 mx-auto w-full">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center gap-x-3 ">
          <h2 className="text-lg font-medium text-sky-600 ">
            Eventos de El Club del Manager
          </h2>
          &nbsp;&nbsp;
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-start justify-center">
          {/* Calendario con espacio completo o reducido según el estado */}
          <div
            className={`flex flex-col mt-6 ${
              showTable ? "w-full md:w-1/2" : "w-full"
            } p-4`}
          >
            <EventsCalendar />
          </div>

          {/* Botón de toggle (signo más) a la derecha */}
          <div className="flex justify-end min-w-0.5 md:w-0.5 p-4">
            <button
              onClick={toggleView}
              className="flex items-center justify-center px-3 py-2 border-teal-700 border-2 rounded-md text-teal-700 font-bold hover:text-teal-800 focus:outline-none"
            >
              <span className="ml-2">
                {showTable ? "Ocultar " : "+Detalle"}
              </span>
            </button>
          </div>

          {/* Tabla que se muestra solo si se hace clic en el botón */}
          {showTable && (
            <div className="flex flex-col mt-6 w-full md:w-1/2 p-4">
              <div className="overflow-hidden border border-gray-200 rounded-md md:rounded-lg">
                <table className="min-w-full divide-y divide-white">
                  <thead className="bg-slate-300">
                    <tr>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm md:table-cell font-bold text-left rtl:text-right text-gray-500"
                      >
                        Fecha
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm md:table-cell font-bold text-left rtl:text-right text-gray-500"
                      >
                        Evento
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-slate-200 divide-y divide-gray-200">
                    {events.map((uno) => (
                      <tr key={uno.id}>
                        <td className="px-2 md:table-cell py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <Link
                              href={`/events/${uno.id}/`}
                              className="text-sky-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </Link>
                            <h4 className="text-gray-700 ">{uno.event_date}</h4>
                          </div>
                        </td>
                        <td className="px-2 md:table-cell py-4 text-sm whitespace-nowrap">
                          <div>
                            <h2 className=" text-gray-700 ">
                              {uno.event_name}
                            </h2>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

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
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 rtl:-scale-x-100"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 rtl:-scale-x-100"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
