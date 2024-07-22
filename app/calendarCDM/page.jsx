"use client";
import EventsCalendar from "@/components/homeMiembros/EventsCalendar";

const calendarCDM = () => {
  return (
    <>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-xl font-semibold text-sky-800 lg:text-3xl dark:text-white">
          Te mostramos los eventos del Club.
        </h1>
      </div>

      <EventsCalendar />
    </>
  );
};

export default calendarCDM;
