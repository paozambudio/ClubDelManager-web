import Image from "next/image";
import React from "react";
import Link from "next/link";

const ResumeHistory = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between overflow-hidden mx-8 max-w-6xl w-full">
      <div className="max-w-xl px-6 py-12 md:w-1/2">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          ¿Querés saber quienes <span className="text-sky-400">somos</span>?
        </h2>
        <p className="mt-4 text-white">
          Somos Lideres de empresas de la región comprometidos con el desarrollo
          de un nuevo estilo de liderazgo. Buscamos potenciarnos a través de
          acciones formales y momentos de desarrollo grupal, con impacto en la
          sociedad.✨
        </p>
        <div className="inline-flex w-full mt-6 sm:w-auto">
          <Link href="/history">
            <button className="inline-flex items-center justify-center w-full px-6 py-2 font-medium text-white duration-300 bg-blue-400  rounded-lg hover:bg-blue-500  focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              ¡Lee más aquí!
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-auto md:w-1/2 flex items-center">
        <Image
          alt="History Image"
          src="/images/fundacionCDM/fundacionCDM-img1.jpg"
          width={400}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ResumeHistory;
