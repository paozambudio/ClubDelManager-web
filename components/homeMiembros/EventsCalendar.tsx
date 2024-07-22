"Use Client";

import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es"; // Importa la localización en español
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
const localizer = momentLocalizer(moment);

// Configura moment para usar español
moment.locale("es");

const messages = {
  today: "Hoy",
  previous: "Atrás",
  next: "Siguiente",
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  allDay: "Todo el día",
  noEventsInRange: "No hay eventos en este rango",
};

interface EventData {
  event_name: string;
  event_date: string;
  location: string;
  description: string;
}

type View = "month" | "week" | "day" | "agenda";

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  desc: string;
}

const EventsCalendar = () => {
  const [events, setEvents] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${apiDomain}/members/events/show_calendar_events/`
        );
        console.log("Eventos devueltos: ", response.data);
        const fetchedEvents = response.data.map((uno: EventData) => {
          const eventDate = moment
            .utc(`${uno.event_date}T23:00:00Z`) // Asegúrate de que el tiempo se interprete correctamente en UTC
            .local()
            .toDate();
          return {
            ...uno,
            title:
              uno.event_name + " - " + uno.location + " | " + uno.description,
            start: eventDate,
            end: eventDate,
            desc: uno.description, // Incluye la descripción en el evento
          };
        });

        setEvents(fetchedEvents);
      } catch (error) {
        console.error("There was an error fetching the events!", error);
      }
    };

    fetchEvents();
  }, []);

  const handleNavigate = (date: Date) => {
    console.log("Navigated to:", date);
    setCurrentDate(date);
  };

  const handleView = (view: View) => {
    console.log("View changed to:", view);
    setCurrentView(view);
  };

  // Custom event component to show tooltips
  const EventTooltip = ({ event }: { event: CalendarEvent }) => (
    <div className="custom-tooltip">
      {event.title}
      <div className="tooltip-content">{event.desc}</div>
    </div>
  );

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={["month"]}
        onNavigate={handleNavigate}
        date={currentDate}
        messages={messages} // Agrega los mensajes personalizados
        components={{
          event: EventTooltip, // Usa el componente personalizado para mostrar tooltips
        }}
      />
      <style jsx>{`
        .custom-tooltip {
          position: relative;
          display: inline-block;
        }
        .tooltip-content {
          visibility: hidden;
          width: 220px;
          background-color: green;
          color: #fff;
          text-align: center;
          border-radius: 6px;
          padding: 10px; /* Ajusta el padding si es necesario */
          font-size: 16px; /* Cambia el tamaño de la fuente aquí */
          position: absolute;
          z-index: 1;
          bottom: 125%; /* Ajusta si es necesario */
          left: 50%;
          margin-left: -110px; /* Ajusta si es necesario */
          opacity: 0;
          transition: opacity 0.3s;
        }
        .custom-tooltip:hover .tooltip-content {
          visibility: visible;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default EventsCalendar;
