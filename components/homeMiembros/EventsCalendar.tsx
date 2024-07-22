"use client";

import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es"; // Importa la localización en español
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
  location: string;
  desc: string;
}

const EventsCalendar = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );

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
            title: uno.event_name,
            start: eventDate,
            end: eventDate,
            location: "Lugar: " + uno.location,
            desc: "Detalle: " + uno.description,
          } as CalendarEvent;
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

  // const handleView = (view: View) => {
  //   console.log("View changed to:", view);
  //   setCurrentView(view);
  // };

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

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
          event: ({ event }) => (
            <span onClick={() => handleEventClick(event)}>{event.title}</span>
          ),
        }}
      />

      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        aria-labelledby="event-modal-title"
        aria-describedby="event-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            border: "1px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedEvent && (
            <div>
              <Box display="flex" justifyContent="flex-end">
                <IconButton onClick={closeModal}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Typography
                id="event-modal-title"
                fontWeight="bold"
                variant="h6"
                component="h2"
              >
                {selectedEvent.title}
              </Typography>
              <Typography id="event-modal-description" sx={{ mt: 2 }}>
                {selectedEvent.location}
              </Typography>
              <Typography id="event-modal-description" sx={{ mt: 2 }}>
                {selectedEvent.desc}
              </Typography>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default EventsCalendar;
