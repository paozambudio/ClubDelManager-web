"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function SpotifyDriveAccess() {
  const { data: session } = useSession();
  return (
    <div className="flex col-2">
      <div className="max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-10">
        {session && (
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
              NUESTRA BIBLIOTECA
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Accedé a todos los libros y contenidos disponibles para los
              miembros del Club del Manager! Sentite libre de hacer todos los
              aportes que quieras!
            </p>
          </div>
        )}

        {session && (
          <Image
            className="object-cover w-50 h-48 mt-2"
            src="/Varias/googleDrive-img.png"
            width={800}
            height={300}
            alt="Nuestro Google Drive"
          />
        )}

        {session && (
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white"></h1>
            <Link
              className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              href="https://drive.google.com/drive/folders/1TSKJmcmmPRwD8AJKmkbSgh9gc4cFsfaJ"
              target="_blank"
            >
              Ingresa
            </Link>
          </div>
        )}
      </div>
      <div className="max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-10">
        {session && (
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
              NUESTROS PODCASTS
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Accedé a todos los PODCASTS desde Spotify. Encontrarás material
              audivisual de muchísimo valor para nuestro día a día.
            </p>
          </div>
        )}

        {session && (
          <Image
            className="flex  w-50 h-48 mt-2"
            src="/Varias/spotify.png"
            width={500}
            height={200}
            alt="Nuestro Google Drive"
          />
        )}

        {session && (
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white"></h1>
            <Link
              className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              href="https://drive.google.com/drive/folders/1TSKJmcmmPRwD8AJKmkbSgh9gc4cFsfaJ"
              target="_blank"
            >
              Ingresa
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
