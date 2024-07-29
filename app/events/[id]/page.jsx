"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { fetchMemberbyDoc } from "@/utils/requests";

import axios from "axios";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const Event_Member_Page = () => {
  const { id } = useParams();
  const [unEvento, setUnEvento] = useState({
    id: "",
    event_type: {
      id: "",
      event_title: "",
      event_description: "",
      score: "",
      event_type_active: true,
    },
    event_date: "1900-01-01",
    event_name: "",
    location: "TBD",
    description: "",
    score_event: 0,
    event_active: true,
    show_calendar: true,
    participants: [],
  });

  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const [event, setEvent] = useState();
  const [document, setDocument] = useState();
  const [miembro, setMiembro] = useState({
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
    accepted_terms: false,
    accepted_terms_date: "1900-01-01",
  });

  useEffect(() => {
    fetchEvents(`${apiDomain}/members/events/${id}`);
  }, [id]);

  const fetchEvents = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setEvent(response.data);
      setUnEvento(response.data);

      console.log("Participants total: ", response.data.participants.length);
      console.log("Evento", response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocument(value);
  };
  const buscarDoc = async (document_id) => {
    const member = await fetchMemberbyDoc(document_id);

    if (member.length == 1) {
      setMiembro(member[0]);
      console.log("Miembro en buscar: ", miembro);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Datos: ", document);

      buscarDoc(document);

      if (miembro) {
        console.log("Miembro: ", miembro);
        const formData = {
          member_id: miembro.id,
          event_id: event.id,
        };

        const res = await fetch(
          `${apiDomain}/members/assign_member_to_event//`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (res.status === 200) {
          notify("Registro actualizado", false);
          window.location.replace("events/{id}");
        } else if (res.status === 401 || res.status === 403) {
          notify("Permission denied", true);
        } else {
          console.log(res.status);
          notify("Something went wrong", true);
        }
      } else {
        notify("El miembro no existe", true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="items-center justify-center  ">
      <h2>Evento: {unEvento.event_name} </h2>
      <h1>Participantes Registrados: {unEvento.participants.length}</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Ingresá tu DNI:
          </label>
          <input
            type="text"
            id="document_id"
            name="document_id"
            className="border rounded  py-2 px-3 mb-2 bg-gray-100"
            placeholder="Ingresá tu DNI"
            onChange={handleChange}
            required
          />
          <button
            className="bg-sky-600 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline disabled:bg-slate-300"
            type="submit"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Event_Member_Page;
