"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { fetchEvents, puntajeTotal } from "@/utils/requests";

const MemberEventPage = () => {
  const { id } = useParams();
  const { data: session } = useSession();

  const [events, setEvents] = useState([]);
  const [ScoreTotal, setScoreTotal] = useState(0);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        if (!id) return <h1>No se encontro información</h1>;
        const eventsData = await fetchEvents(id);
        setEvents(eventsData);

        const score = await puntajeTotal(id);
        console.log("Puntaje total: ", score);
        setScoreTotal(score.total_score);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEventsData();
  }, []);

  return (
    <div className="items-center justify-center border-2 border-sky-600 ">
      <span className=" ">
        <p className="mt-2 font-bold text-sky-600 ">
          Puntaje Acumulado: {ScoreTotal}
        </p>
      </span>
      <table className="w-full">
        {events.map((uno) => (
          <tr className="">
            <td className="mt-2 text-md text-gray-600 dark:text-gray-600">
              {uno.event_name}
            </td>
            <td className="mt-2 text-md text-gray-600 dark:text-gray-600">
              {uno.location}
            </td>
            <td className="mt-2 text-md text-gray-600 dark:text-gray-600">
              {uno.event_date}
            </td>
            <td className="mt-2 text-md text-gray-600 dark:text-gray-600">
              {uno.score_event}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default MemberEventPage;
