"use client";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import { useState } from "react";

const blogPage = () => {
  const [emailPresidente, setEmailPresidente] = useState(
    "federico.azeglio@gmail.com"
  );
  const [emailVicepresidente, setEmailVicepresidente] = useState(
    "andy.garcia@gmial.com"
  );
  const [emailTesorero, setEmailAdministrativa] = useState(
    "franco.maratta@gmail.com"
  );
  const [emailSecretario, setEmailSecretario] = useState(
    "pablo.iacobucci@gmail.com"
  );
  const [email1Voval, setEmail1Vocal] = useState("eugenia.plaza@gmail.com");

  const [email2Vocal, setEmailemail2Vocal] = useState(
    "nicolas.tarditi@gmial.com"
  );
  const [email3Vocal, setEmailemail3Vocal] = useState(
    "mauricio.guzman@gmial.com"
  );

  const copiarAlPortapapeles = (email: string) => {
    // Crear un elemento de entrada temporal
    const input = document.createElement("input");
    input.setAttribute("value", email);
    document.body.appendChild(input);
    input.select();
    // Copiar el contenido seleccionado
    document.execCommand("copy");
    // Eliminar el elemento de entrada temporal
    document.body.removeChild(input);
  };

  return (
    <section className="">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-bold text-white text-center capitalize lg:text-3xl">
          Comisión Directiva
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          {/* Presentacion presidente */}
          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="./imgTeam/Presidente.jpg"
                alt=""
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-white capitalize md:text-2xl dark:text-white group-hover:text-white">
                  Federico Azeglio
                </h1>

                <p className="mt-2 text-white capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Presidente, fundador
                </p>
              </div>
            </div>
            <p className="mt-4 text-white dark:text-gray-300 group-hover:text-gray-300">
              XXX Profesión
            </p>
            <p className="mt-4 text-white dark:text-gray-300 group-hover:text-gray-300">
              xxxx descripción
            </p>

            <div className="flex mt-4 -mx-2">
              <a
                href="https://www.instagram.com/clubdelmanager?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <InstagramIcon />{" "}
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/el-club-del-manager/"
                target="_blank"
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <LinkedInIcon />{" "}
                </svg>
              </a>

              <a
                href={`mailto:${emailPresidente}`}
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Correo electrónico"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <EmailIcon />
                </svg>
              </a>
            </div>
          </div>

          {/* Presentacion VicePresidente */}
          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="./imgTeam/VicePresidente.jpg"
                alt=""
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-white capitalize md:text-2xl group-hover:text-white">
                  Andy García
                </h1>

                <p className="mt-2 text-white capitalize group-hover:text-gray-300">
                  Vicepresidente, fundador
                </p>
              </div>
            </div>

            <p className="mt-4 text-white group-hover:text-gray-300">
              xxx profesión
            </p>
            <p className="mt-4 text-white group-hover:text-gray-300">
              xxx descripción
            </p>

            <div className="flex mt-4 -mx-2">
              <a
                href="https://www.instagram.com/clubdelmanager?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <InstagramIcon />{" "}
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/el-club-del-manager/"
                target="_blank"
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <LinkedInIcon />{" "}
                </svg>
              </a>

              <a
                href={`mailto:${emailVicepresidente}`}
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Correo electrónico"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <EmailIcon />
                </svg>
              </a>
            </div>
          </div>

          {/* Directora Administrativa */}
          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="./imgTeam/Joaco.jpeg"
                alt=""
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-white capitalize md:text-2xl group-hover:text-white">
                  Pablo Iacobucci
                </h1>

                <p className="mt-2 text-white capitalize group-hover:text-gray-300">
                  Secretario
                </p>
              </div>
            </div>

            <p className="mt-4 text-white group-hover:text-gray-300">
              xxx profesión
            </p>
            <p className="mt-4 text-white group-hover:text-gray-300">
              xxx descripción
            </p>

            <div className="flex mt-4 -mx-2">
              <a
                href="https://www.instagram.com/clubdelmanager?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <InstagramIcon />{" "}
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/el-club-del-manager/"
                target="_blank"
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <LinkedInIcon />{" "}
                </svg>
              </a>

              <a
                href={`mailto:${emailSecretario}`}
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Correo electrónico"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <EmailIcon />
                </svg>
              </a>
            </div>
          </div>

          {/* Directoria de Etica y calificacion */}
          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="./imgTeam/Tesorero.jpg"
                alt=""
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-white capitalize md:text-2xl group-hover:text-white">
                  Franco Maratta
                </h1>

                <p className="mt-2 text-white capitalize group-hover:text-gray-300">
                  Tesorero, fundador
                </p>
              </div>
            </div>

            <p className="mt-4 text-white group-hover:text-gray-300">
              xxx profesión
            </p>
            <p className="mt-4 text-white group-hover:text-gray-300">
              xxx descripción
            </p>

            <div className="flex mt-4 -mx-2">
              <a
                href="https://www.instagram.com/clubdelmanager?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <InstagramIcon />{" "}
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/el-club-del-manager/"
                target="_blank"
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <LinkedInIcon />{" "}
                </svg>
              </a>

              <a
                href={`mailto:${emailTesorero}`}
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Correo electrónico"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <EmailIcon />
                </svg>
              </a>
            </div>
          </div>

          {/* Director de Prensa, fundador */}
          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="./imgTeam/Joaco.jpeg"
                alt=""
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-white capitalize md:text-2xl group-hover:text-white">
                  Eugenia Plaza
                </h1>

                <p className="mt-2 text-white capitalize group-hover:text-gray-300">
                  1er Vocal
                </p>
              </div>
            </div>

            <p className="mt-4 text-white group-hover:text-gray-300">
              xxx profesión
            </p>
            <p className="mt-4 text-white group-hover:text-gray-300">
              xxx descripción
            </p>

            <div className="flex mt-4 -mx-2">
              <a
                href="https://www.instagram.com/clubdelmanager?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <InstagramIcon />{" "}
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/el-club-del-manager/"
                target="_blank"
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <LinkedInIcon />{" "}
                </svg>
              </a>

              <a
                href={`mailto:${email1Voval}`}
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Correo electrónico"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <EmailIcon />
                </svg>
              </a>
            </div>
          </div>

          {/* Director de Acciones y Relaciones Aeroespaciales */}
          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="./imgTeam/Joaco.jpeg"
                alt=""
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-white capitalize md:text-2xl group-hover:text-white">
                  Nicolás Tarditi
                </h1>

                <p className="mt-2 text-white capitalize group-hover:text-gray-300">
                  2do Vocal
                </p>
              </div>
            </div>

            <p className="mt-4 text-white group-hover:text-gray-300">
              xxx profesión
            </p>
            <p className="mt-4 text-white group-hover:text-gray-300">
              xxx descripción
            </p>

            <div className="flex mt-4 -mx-2">
              <a
                href="https://www.instagram.com/clubdelmanager?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <InstagramIcon />{" "}
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/el-club-del-manager/"
                target="_blank"
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <LinkedInIcon />{" "}
                </svg>
              </a>

              <a
                href={`mailto:${email2Vocal}`}
                className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Correo electrónico"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <EmailIcon />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Director de Acciones y Relaciones Aeroespaciales */}
        <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
          <div className="flex flex-col sm:-mx-4 sm:flex-row">
            <img
              className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
              src="./imgTeam/3Vocal.jpg"
              alt=""
            />

            <div className="mt-4 sm:mx-4 sm:mt-0">
              <h1 className="text-xl font-semibold text-white capitalize md:text-2xl group-hover:text-white">
                Mauricio Guzmán
              </h1>

              <p className="mt-2 text-white capitalize group-hover:text-gray-300">
                3er Vocal
              </p>
            </div>
          </div>

          <p className="mt-4 text-white group-hover:text-gray-300">
            xxx profesión
          </p>
          <p className="mt-4 text-white group-hover:text-gray-300">
            xxx descripción
          </p>

          <div className="flex mt-4 -mx-2">
            <a
              href="https://www.instagram.com/clubdelmanager?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <InstagramIcon />{" "}
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/el-club-del-manager/"
              target="_blank"
              className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <LinkedInIcon />{" "}
              </svg>
            </a>

            <a
              href={`mailto:${email3Vocal}`}
              className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
              aria-label="Correo electrónico"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <EmailIcon />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blogPage;
