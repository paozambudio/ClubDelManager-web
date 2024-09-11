"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const Organizaciones = () => {
  const { data: session } = useSession();

  return (
    <div className="transparent">
      {!session && (
        <div className="container  pt-10 align-top mx-auto mt-6 md:flex md:items-center md:justify-between ">
          <span className="cols cols-2">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-gray-800">
              Organizaciones que confían en <br />
              <span class="underline decoration-blue-500">
                El Club Del Manager
              </span>
            </h1>
          </span>
        </div>
      )}
      {!session && (
        <div className="grid grid-cols-1 gap-4 mt-6 xl:mt-12 xl:gap-2 md:grid-cols-2 lg:grid-cols-4 justify-start">
          <div className="w-full text-center rounded-lg flex flex-col relative group">
            <div className="flex flex-col items-center justify-between flex-grow">
              <div className="flex items-center justify-center mt-4">
                <img
                  src="/img-logo-organizaciones/logo-iuce.png"
                  className="h-40 w-40 object-contain"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
          <div className="w-full  text-center rounded-lg flex flex-col relative group">
            <div className="flex flex-col items-center justify-between flex-grow">
              <div className="flex items-center justify-center mt-4">
                <img
                  src="/img-logo-organizaciones/uca-logo.webp"
                  className="h-40 w-40 object-contain"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
          <div className="w-full text-center rounded-lg flex flex-col relative group">
            <div className="flex flex-col items-center justify-between flex-grow">
              <div className="flex items-center justify-center mt-4">
                <img
                  src="/img-logo-organizaciones/unlar_logo.png"
                  className="h-40 w-40 object-contain"
                  alt="UNLaR"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Organizaciones;
