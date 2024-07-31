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

  const [loading, setLoading] = useState(false);
  const [document, setDocument] = useState("");
  const [rtdoAsignar, setRtdoAsignar] = useState("");
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
    setRtdoAsignar("");
  }, [id]);

  const fetchEvents = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setUnEvento(response.data);
      console.log("Evento: ", response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setDocument(e.target.value);
    setRtdoAsignar("");
  };

  const buscarDoc = async (document_id) => {
    const member = await fetchMemberbyDoc(document_id);
    if (member.length === 1) {
      return member[0];
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const foundMember = await buscarDoc(document);
      if (foundMember) {
        const formData = {
          member_id: foundMember.id,
          event_id: unEvento.id,
        };

        const res = await fetch(
          `${apiDomain}/members/assign_member_to_event/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (res.status === 200) {
          window.location.replace(`/events/${id}/`);
          setRtdoAsignar("Miembro agregado");
        } else {
          setRtdoAsignar("Error al agregar miembro");
        }
      } else {
        setRtdoAsignar("El miembro no existe");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="w-full max-w-sm px-4 py-3 m-2 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md shadow-md">
        <h2 className="mt-2 text-md text-teal-600 capitalize dark:text-gray-600 font-bold">
          {unEvento.event_name}{" "}
        </h2>
        <h2 className="mt-2 text-md text-gray-600 dark:text-gray-600">
          <b>Lugar:</b> {unEvento.location}
        </h2>
        <h2 className="mt-2 text-md text-gray-600 dark:text-gray-600">
          <b>+ Info:</b> {unEvento.description}
        </h2>
        <br />

        <div className="flex items-center justify-start">
          <h1 className="mt-2 text-md text-sky-600 dark:text-sky-600 font-bold">
            Participantes Registrados &nbsp;
          </h1>
          <div className="bg-sky-600 text-white rounded-full h-10 w-10 flex items-center justify-center text-xl">
            {unEvento.participants.length}
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm px-4 py-3 m-2 bg-gradient-to-r from-slate-200 to-slate-300 rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="mt-2 text-sm text-gray-600 dark:text-gray-600">
              Registrá tu ingreso al evento:
            </label>
            <input
              type="text"
              id="document_id"
              name="document_id"
              className="border rounded py-2 px-3 mb-2 bg-gray-100"
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
            <h2 className="mt-2 text-sm text-red-600 dark:text-red-600">
              {rtdoAsignar}
            </h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Event_Member_Page;
