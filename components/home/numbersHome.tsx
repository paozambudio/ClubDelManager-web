"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

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
  const { data: session } = useSession();
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
      {!session && (
        <div className="max-w-2xl px-8 py-4 bg-gray-300 rounded-lg shadow-md dark:bg-gray-800">
          <motion.div
            className="text-blue-400 text-lg sm:text-md md:text-lg lg:text-xl font-bold"
            animate={{
              y: animationComplete ? 0 : 0,
            }}
            transition={{ duration: 0.1 }}
          >
            <p className="text-sky-500 text-center text-2xl">+ {miembros}</p>
            <p className="text-teal-500 text-center ">Miembros</p>
          </motion.div>
        </div>
      )}
      {!session && (
        <div className="max-w-2xl px-8 py-4 bg-gray-300 rounded-lg shadow-md dark:bg-gray-800">
          <motion.div
            className="text-white text-lg sm:text-md md:text-lg lg:text-xl font-bold"
            animate={{
              y: animationComplete ? 0 : 0,
            }}
            transition={{ duration: 0.1 }}
          >
            <p className="text-sky-500 text-center text-2xl"> {proyectos}</p>
            <p className="text-teal-500 text-center ">Summit</p>
          </motion.div>
        </div>
      )}

      {!session && (
        <div className="max-w-2xl px-8 py-4 bg-gray-300 rounded-lg shadow-md dark:bg-gray-800">
          <motion.div
            className="text-white text-lg sm:text-md md:text-lg lg:text-xl font-bold"
            animate={{
              y: animationComplete ? 0 : 0,
            }}
            transition={{ duration: 0.1 }}
          >
            <p className="text-sky-500 text-center text-2xl">{participacion}</p>
            <p className="text-teal-500 text-center ">
              Encuentros mensuales (2024)
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default NumbersHome;
