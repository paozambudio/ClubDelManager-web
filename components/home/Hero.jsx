"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const Hero = () => {
  const { data: session } = useSession();
  return (
    <>
      {!session && (
        <div class="container px-6 mx-auto">
          <div class="items-center lg:flex ">
            <div
              className="w-full md:w-2/3 bg-cover bg-center rounded-sm bg-no-repeat min-h-64 h-auto md:h-auto"
              style={{ backgroundImage: "url('/imgHome/img1.webp')" }}
            ></div>
            <div class="w-full lg:w-1/2 px-6 py-16 mx-auto">
              <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                  Bienvenido a{" "}
                  <span class="text-sky-600 font-semibold tracking-wide">
                    El Club del Manager
                  </span>
                </h1>

                <p class="mt-3 text-lg text-gray-600 dark:text-gray-600 font-sans">
                  El mundo no va a cambiar sólo, necesitamos contar con vos para
                  <span class="text-teal-600 font-semibold tracking-wide dark:text-sky-600">
                    TRANSFORMAR EL LIDERAZGO!!
                  </span>
                </p>

                <div class="flex flex-col mt-6 text-gray-600 space-y-3 lg:space-y-0 lg:flex-row">
                  <span className="font-sans">
                    Si querés ser parte, hacé click en Unite y completá el
                    formulario
                  </span>

                  <button
                    class="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-sky-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                    onClick={() => {
                      window.open(
                        "https://forms.gle/2sHNbcHMedhV4kDs9",
                        "_blank"
                      );
                    }}
                  >
                    Unite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
