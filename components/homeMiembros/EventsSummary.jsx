"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const EventsSummary = () => {
  const { data: session } = useSession();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${apiDomain}/members/events/show_calendar_events/`
        );

        console.log("eventos: ", response.data);

        setEvents(response.data);

        console.log("Eventos: ", events);
      } catch (error) {
        console.error("There was an error fetching the events!", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {!session && (
        <div className="w-full max-w-sm px-4 py-3 m-10 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md shadow-md ">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
                Enterate de los próximos eventos del club
              </h1>
              {events.map((uno) => {
                uno.title;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsSummary;
