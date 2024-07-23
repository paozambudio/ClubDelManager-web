"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Link from "next/link";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const EventsSummary = () => {
  const { data: session } = useSession();

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${apiDomain}/members/events/show_calendar_events/`
      );

      console.log("Response data: ", response.data);

      if (Array.isArray(response.data)) {
        const today = new Date();

        const filteredAndSortedEvents = response.data
          .filter((event) => new Date(event.event_date) > today)
          .sort(
            (a, b) =>
              new Date(a.event_date).getTime() -
              new Date(b.event_date).getTime()
          );

        setEventos(filteredAndSortedEvents);
      } else {
        console.error("Unexpected response format");
      }
    } catch (error) {
      console.error("There was an error fetching the events!", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {session && (
        <div className="w-full max-w-sm px-4 py-3 m-10 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md shadow-md ">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
                Enterate de los próximos eventos del club
              </h1>
            </div>
            <div>
              {eventos.slice(0, 2).map((uno, index) => (
                <div key={index} className="mt-2 text-sm text-gray-600">
                  <strong>{uno.event_name}</strong> - {uno.event_date} -{" "}
                  {uno.location}
                  <p>{uno.description}</p>
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
          <span className="underline font-semibold text-sky-600">
            <Link href="/calendarCDM">Ver todos</Link>
          </span>
        </div>
      )}
    </div>
  );
};

export default EventsSummary;
