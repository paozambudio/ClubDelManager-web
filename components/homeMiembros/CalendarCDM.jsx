"use client";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import moment from "moment";
import { format, parse, startOfWeek, getDay } from "date-fns";
import esES from "date-fns/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  es: esES,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: esES }),
  getDay,
  locales,
});

const events = [
  {
    title: "Reunión CD",
    start: new Date(2024, 6, 11, 19, 0),
    end: new Date(2024, 6, 11, 20, 0),
    allDay: false,
  },
  {
    title: "Comunicación Linkedin",
    start: new Date(2024, 6, 15, 10, 0),
    end: new Date(2024, 6, 15, 11, 0),
    allDay: false,
  },
  {
    title: "Encuentro Mensual",
    start: new Date(2024, 6, 22, 19, 0),
    end: new Date(2024, 6, 22, 23, 0),
    allDay: true,
  },
  // Agrega más eventos aquí
];

const CalendarCDM = () => {
  const [myEvents, setMyEvents] = useState(events);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  const handleAddEvent = () => {
    setMyEvents([...myEvents, newEvent]);
    setNewEvent({ title: "", start: "", end: "" });
  };

  return (
    <div>
      <h1 className="text-center">Nuestro Calendario</h1>
      <div className="calendar-container" style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          messages={{
            next: "Sig",
            previous: "Ant",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
            agenda: "Agenda",
            date: "Fecha",
            time: "Hora",
            event: "Evento",
            noEventsInRange: "No hay eventos en este rango.",
            showMore: (total) => `+ Ver más (${total})`,
            allDay: "Todo el día",
            yesterday: "Ayer",
            tomorrow: "Mañana",
            week: "Semana",
            work_week: "Semana laboral",
            weekend: "Fin de semana",
            start: "Inicio",
            end: "Fin",
            in_the_week_of: "en la semana de",
            day: "Día",
            week: "Semana",
            work_week: "Semana laboral",
            four_day: "Cuatro días",
            year: "Año",
            back: "Atrás",
            next: "Adelante",
            work_week: "Semana laboral",
            allDay: "Todo el día",
            date: "Fecha",
            time: "Hora",
            event: "Evento",
            noEventsInRange: "No hay eventos en este rango.",
            showMore: (total) => `+ Ver más (${total})`,
          }}
          components={{
            dayColumnHeader: (props) => (
              <span>
                {props.label.charAt(0).toUpperCase() + props.label.slice(1)}
              </span>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default CalendarCDM;
