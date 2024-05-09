"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  miembrosCount: number;
  proyectosCount: number;
  participacionCount: number;
}

const NumbersHome: React.FC<CounterProps> = ({
  miembrosCount,
  proyectosCount,
  participacionCount,
}) => {
  const [miembros, setMiembros] = useState(0); // Set initial miembros to 0
  const [proyectos, setProyectos] = useState(0); // Set initial proyectos to 0
  const [participacion, setParticipacion] = useState(0); // Set initial participacion to 0
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (miembros < miembrosCount) {
      const timer = setInterval(() => {
        setMiembros((prevMiembros) => prevMiembros + 1);
      }, 50);
      return () => clearInterval(timer);
    } else {
      setAnimationComplete(true);
    }
  }, [miembros, miembrosCount]);

  useEffect(() => {
    if (proyectos < proyectosCount) {
      const timer = setInterval(() => {
        setProyectos((prevProyectos) => prevProyectos + 1);
      }, 50);
      return () => clearInterval(timer);
    } else {
      setAnimationComplete(true);
    }
  }, [proyectos, proyectosCount]);

  useEffect(() => {
    if (participacion < participacionCount) {
      const timer = setInterval(() => {
        setParticipacion((prevParticipacion) => prevParticipacion + 1);
      }, 50);
      return () => clearInterval(timer);
    } else {
      setAnimationComplete(true);
    }
  }, [participacion, participacionCount]);

  return (
    <div className="flex items-center space-x-2">
      <motion.div
        className="text-blue-400 text-lg sm:text-md md:text-lg lg:text-xl font-bold"
        animate={{
          y: animationComplete ? 0 : 0,
        }}
        transition={{ duration: 0.1 }}
      >
        <p className="text-sky-500 text-center text-2xl">+ {miembros}</p>
        <p className="text-white text-center ">Miembros actuales</p>
      </motion.div>

      <motion.div
        className="text-white text-lg p-8 sm:text-md md:text-lg lg:text-xl font-bold"
        animate={{
          y: animationComplete ? 0 : 0,
        }}
        transition={{ duration: 0.1 }}
      >
        <p className="text-sky-500 text-center text-2xl">+ {proyectos}</p>
        <p className="text-white text-center ">Proyectos realizados</p>
      </motion.div>

      <motion.div
        className="text-white text-lg sm:text-md md:text-lg lg:text-xl font-bold"
        animate={{
          y: animationComplete ? 0 : 0,
        }}
        transition={{ duration: 0.1 }}
      >
        <p className="text-sky-500 text-center text-2xl">+ {participacion}</p>
        <p className="text-white text-center ">Participación en eventos</p>
      </motion.div>
    </div>
  );
};

export default NumbersHome;
