"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Carrusel from "./Carrusel";
import { useSession } from "next-auth/react";

const ResumeHistory = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between overflow-hidden mx-8 max-w-6xl w-full">
      {!session && (
        <div className="max-w-xl px-6 py-12 md:w-1/2">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            ¿Querés saber quienes <span className="text-sky-400">somos</span>?
          </h2>
          <p className="mt-4 text-white">
            Somos Lideres de empresas de la región comprometidos con el
            desarrollo de un nuevo estilo de liderazgo. Buscamos potenciarnos a
            través de acciones formales y momentos de desarrollo grupal, con
            impacto en la sociedad.✨
          </p>
          <div className="flex w-full p-4 mt-6 sm:w-auto space-x-4">
            <Link href="/history">
              <button className="inline-flex items-center justify-center px-10 py-2 font-medium text-white duration-300 bg-sky-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Leer más
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-2 text-white dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </Link>

            <Link href="/team">
              <button className="inline-flex items-center justify-center px-6 py-2 font-medium text-white duration-300 bg-sky-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Comisión Directiva
              </button>
            </Link>
          </div>
        </div>
      )}
      {!session && (
        <div className="block w-full md:w-1/2 mx-auto items-center p-4 md:p-10">
          <Carrusel />
        </div>
      )}
    </div>
  );
};

export default ResumeHistory;
