"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BannerProps {
  altText: string;
}

const frases = [
  "Transformando el liderazgo de la región.",
  "El trabajo en equipo es la clave del éxito.",
  "El único límite para tus logros es tu propia imaginación. ",
  "Sueña en grande, trabaja duro y nunca dejes de creer en ti mismo.",
];

const Banner: React.FC<BannerProps> = ({ altText }) => {
  const [indiceFrase, setIndiceFrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndiceFrase((prevIndice) => (prevIndice + 1) % frases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mx-auto max-w-5xl px-6 pt-6 flex flex-col justify-center items-center">
        <h1 className="text-sm font-bold text-blue-500 sm:text-5xl md:text-6xl"></h1>
      </div>
      <div
        className="rounded-md bg-cover h-[15rem] rounded-30"
        style={{
          backgroundImage: "url('./fondo.jpg')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-gray-900/40 bg-opacity-40">
          <div className="text-center max-w-md px-4 py-16 lg:py-24">
            {/*<h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Club del Manager
          </h1>*/}
            <AnimatePresence>
              <motion.h2
                className="mt-4 text-2xl text-gray-300  sm:text-2xl md:text-2xl"
                key={indiceFrase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.01 } }}
              >
                {frases[indiceFrase]}
              </motion.h2>
            </AnimatePresence>
            <div className="pt-32 align-bottom">
              <button
                className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-600 rounded-lg hover:bg-teal-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                onClick={() => {
                  window.open("https://forms.gle/2sHNbcHMedhV4kDs9", "_blank"); // Reemplaza por la URL deseada
                }}
              >
                ¡Unite!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
