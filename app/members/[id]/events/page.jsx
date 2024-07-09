"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { fetchEvents, puntajeTotal } from "@/utils/requests";
import axios from "axios";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const MemberEventPage = () => {
  const { id } = useParams();
  const { data: session } = useSession();
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const [events, setEvents] = useState([]);
  const [ScoreTotal, setScoreTotal] = useState(0);

  useEffect(() => {
    fetchEvents(`${apiDomain}/members/members/${id}/events`);
  }, [id]);

  const fetchEvents = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setEvents(response.data.results);
      setNextPageUrl(response.data.next);
      setPrevPageUrl(response.data.previous);
      const score = await puntajeTotal(id);
      console.log("Puntaje total: ", score);
      setScoreTotal(score.total_score);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  /* useEffect(() => {
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
  }, []); */

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
      <div>
        {prevPageUrl && (
          <button onClick={() => fetchEvents(prevPageUrl)}>Previous</button>
        )}
        {nextPageUrl && (
          <button onClick={() => fetchEvents(nextPageUrl)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default MemberEventPage;
