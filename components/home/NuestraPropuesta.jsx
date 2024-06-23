"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const NuestraPropuesta = () => {
  const { data: session } = useSession();
  return (
    <section>
      {!session && (
        <div class="container px-6 py-2 mx-auto">
          <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-gray-800">
            Sumate <br /> a nuestra increíble{" "}
            <span class="underline decoration-blue-500">Propuesta</span>
          </h1>

          <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-500 font-sans font-semibold">
            Si querés ir sólo vas a llegar rápido, pero en equipo llegamos más
            lejos!
          </p>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-teal-600 dark:border-blue-300 rounded-xl hover:bg-teal-500 hover:border-transparent group  ">
              <span class="inline-block text-teal-600 group-hover:text-white dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6l-2-2m0 0l-2 2m2-2v12m-2-10h8a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2v-8a2 2 0 012-2h8m-8 10v2a2 2 0 002 2h8a2 2 0 002-2v-2m-10-10h10"
                  />
                </svg>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize group-hover:text-white dark:text-gray-700 ">
                Espacios formativos
              </h1>

              <p class="text-gray-500 group-hover:text-white dark:text-gray-500">
                Espacios colaborativos, iterativos y dinámicos que nos permitan
                perfeccionar habilidades que nos ayuden a llevar a otro nivel
                nuestro liderazgo.
              </p>
            </div>

            <div className="p-8 space-y-3 border-2 border-teal-600 dark:border-blue-300 rounded-xl hover:bg-teal-500 hover:border-transparent group  ">
              <span class="inline-block text-teal-600 dark:text-blue-400 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4zm6-4a2 2 0 100-4 2 2 0 000 4zm-2 1a2 2 0 00-2 2v1h4v-1a2 2 0 00-2-2zm-10 0a2 2 0 100-4 2 2 0 000 4zm-2 1a2 2 0 00-2 2v1h4v-1a2 2 0 00-2-2z"
                  />
                </svg>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-gray-700 group-hover:text-white">
                Networking
              </h1>

              <p class="text-gray-500 dark:text-gray-500 group-hover:text-white">
                Los vínculos honestos y sinceros nutren nuestra vida profesional
                y nos hacen mejores profesionales generando puentes y abriendos
                puertas que seguramente nos dejen en un mejor estadio.
              </p>
            </div>

            <div className="p-8 space-y-3 border-2 border-teal-600 dark:border-blue-300 rounded-xl hover:bg-teal-500 hover:border-transparent group  ">
              <span class="inline-block text-teal-600 dark:text-blue-400 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4a2 2 0 100 4 2 2 0 000-4zm-6 8v2a4 4 0 004 4h4a4 4 0 004-4v-2m-5-2l-1 1m1-1l1 1m-1-1v3"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h8m-4 0v3m0-3a4 4 0 014 4v1h-8v-1a4 4 0 014-4z"
                  />
                </svg>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-gray-700 group-hover:text-white">
                Dictado de Conferencias
              </h1>

              <p class="text-gray-500 dark:text-gray-500 group-hover:text-white">
                Si pensamos en impacto que mejor poder hacerlo en aquellos que
                seran los lideres del mañana, y cuanto terreno ganaran con el
                testimonio de tantos lideres, con aciertos y errores, pero sobre
                todo con la experiencia vivida, el camino transitado.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NuestraPropuesta;
