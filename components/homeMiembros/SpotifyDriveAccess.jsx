"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function SpotifyDriveAccess() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-wrap justify-center">
      <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-10">
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
          <div className="px-4 py-2">
            <div class="flex items-center">
              <div className="flex items-center w-full px-4 py-2 rounded-lg bg-sky-600">
                <Link
                  className="flex items-center px-2 py-1 text-xs w-full font-semibold text-sky-700 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                  href="https://drive.google.com/drive/folders/1TSKJmcmmPRwD8AJKmkbSgh9gc4cFsfaJ"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="w-8 h-8 mr-2"
                    fill="currentColor"
                  >
                    <path d="M312.43 34.45c-4.07-7.03-11.53-11.45-19.71-11.45H219.29c-8.18 0-15.64 4.42-19.71 11.45l-156.11 269.1h91.2l.14-.25 130.38-225.09 47.23 81.42-129.35 224.09h252.15c9.08 0 17.38-5.05 21.64-13.14l-147.78-255zm169.37 269.1L371.38 88.83l-53.7 92.63 110.4 189.09h53.72c8.14 0 15.54-4.43 19.58-11.49 4.04-7.05 4.04-15.59.02-22.63zm-460.06-35.42c-8.14 0-15.54 4.42-19.58 11.49-4.04 7.05-4.04 15.59-.02 22.63l110.4 189.09c4.07 7.03 11.53 11.45 19.71 11.45h220.57c8.18 0 15.64-4.42 19.71-11.45l55.19-95.14H173.42c-8.18 0-15.64-4.42-19.71-11.45L58.64 268.13zm253.65 177.91H199.71l65.97-114.08 65.97 114.08z" />
                  </svg>
                  Ingresa
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-10">
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
          <div className="px-4 py-2">
            <div className="flex items-center w-full px-4 py-2 rounded-lg bg-teal-600">
              <Link
                className="flex items-center px-2 py-1 text-xs w-full font-semibold text-teal-700 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                href="https://open.spotify.com/playlist/..."
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-teal-600"
                  viewBox="0 0 168 168"
                  fill="currentColor"
                >
                  <path d="M84 0a84 84 0 1084 84A84 84 0 0084 0zm38.15 121.3a4.69 4.69 0 01-6.46 1.39c-17.71-10.85-40.07-13.32-66.33-7.34a4.69 4.69 0 01-2.08-9.15c28.68-6.51 53.94-3.69 73.91 8.38a4.69 4.69 0 011.39 6.46zm9.25-20.75a5.86 5.86 0 01-8.08 1.74c-20.28-12.42-51.24-16.06-75-8.83a5.86 5.86 0 01-3.5-11.14c26.11-8.22 60.05-4.21 82.94 10.16a5.86 5.86 0 011.64 8.08zm1.15-23.17c-24.1-14.3-63.2-15.64-86.21-8.6a7.04 7.04 0 01-4.21-13.41c26.19-8.23 68.84-6.67 95.66 9.94a7.04 7.04 0 11-7.24 12.07z" />
                </svg>
                &nbsp; &nbsp;Ingresa
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
