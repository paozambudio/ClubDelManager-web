"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { useState } from "react";
import { signOut } from "next-auth/react";

const Footer: React.FC = () => {
  const [emailClub, setEmailClub] = useState("clubdelmanagermza@gmail.com");

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
    <footer className="bg-transparent">
      <div className="container flex flex-col items-center justify-center p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row sm:px-8">
        <Link href="/">
          <Image src="/LogoPng.png" width={60} height={60} alt="Logo" />
        </Link>

        <p className="text-lg text-white px-8 font-">
          Encontranos en nuestras redes:{" "}
        </p>

        <div className="flex mt-4 -mx-2">
          <a
            href="https://www.linkedin.com/company/el-club-del-manager/"
            target="_blank"
            className="mx-2"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="#0077B5"
            >
              <path d="M20.447 20.452h-3.75v-5.569c0-1.328-.027-3.038-1.851-3.038-1.852 0-2.135 1.445-2.135 2.942v5.665H9.009V9h3.6v1.561h.051c.5-.949 1.72-1.951 3.543-1.951 3.79 0 4.487 2.496 4.487 5.744v6.098zM5.337 7.433c-1.207 0-2.186-.98-2.186-2.188 0-1.207.979-2.188 2.186-2.188 1.209 0 2.188.981 2.188 2.188 0 1.208-.979 2.188-2.188 2.188zM6.923 20.452H3.752V9h3.171v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.729v20.542C0 23.231.792 24 1.771 24h20.451C23.205 24 24 23.231 24 22.271V1.729C24 .77 23.205 0 22.225 0z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/clubdelmanager?igsh=MTF6MHp2Y2pkZjlzdA=="
            target="_blank"
            className="mx-2"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <linearGradient
                id="instagram-gradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#f09433", stopOpacity: 1 }}
                />
                <stop
                  offset="25%"
                  style={{ stopColor: "#e6683c", stopOpacity: 1 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "#dc2743", stopOpacity: 1 }}
                />
                <stop
                  offset="75%"
                  style={{ stopColor: "#cc2366", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#bc1888", stopOpacity: 1 }}
                />
              </linearGradient>
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.585-.07 4.851c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.585-.012-4.851-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.851s.012-3.585.07-4.851c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.851-.07zm0-2.163C8.755 0 8.333.013 7.053.072 5.773.131 4.64.388 3.678 1.35 2.717 2.311 2.46 3.444 2.401 4.724c-.059 1.28-.072 1.702-.072 4.978s.013 3.698.072 4.978c.059 1.28.316 2.413 1.277 3.375.961.961 2.094 1.218 3.374 1.277 1.28.059 1.702.072 4.978.072s3.698-.013 4.978-.072c1.28-.059 2.413-.316 3.375-1.277.961-.961 1.218-2.094 1.277-3.374.059-1.28.072-1.702.072-4.978s-.013-3.698-.072-4.978c-.059-1.28-.316-2.413-1.277-3.375-.961-.961-2.094-1.218-3.374-1.277C15.667.013 15.245 0 11.97 0h-.002z"
                fill="url(#instagram-gradient)"
              />
              <path
                d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.324c-2.295 0-4.162-1.867-4.162-4.162S9.705 7.838 12 7.838s4.162 1.867 4.162 4.162-1.867 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.444.648-1.444 1.444s.648 1.444 1.444 1.444 1.444-.648 1.444-1.444-.648-1.444-1.444-1.444z"
                fill="url(#instagram-gradient)"
              />
            </svg>
          </a>

          <a
            href="https://m.facebook.com/elclubdelmanager?mibextid=LQQJ4d"
            target="_blank"
            className="mx-2"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.412c0-3.1 1.894-4.788 4.661-4.788 1.325 0 2.463.098 2.794.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.311h3.587l-.467 3.622h-3.12V24h6.11c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z"
                fill="#1877F2"
              />
              <path
                d="M16.803 24V14.706h3.12l.467-3.622h-3.587V8.773c0-1.047.29-1.762 1.794-1.762l1.918-.001v-3.24c-.33-.044-1.468-.142-2.794-.142-2.767 0-4.661 1.688-4.661 4.788v2.681H9.692v3.622h3.128V24h4.098z"
                fill="#FFF"
              />
            </svg>
          </a>

          <a
            href=" https://www.youtube.com/@ClubdelManager"
            target="_blank"
            className="mx-2"
            aria-label="YouTube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M23.498 6.186a2.998 2.998 0 0 0-2.118-2.117C19.237 3.5 12 3.5 12 3.5s-7.237 0-9.38.57a2.998 2.998 0 0 0-2.118 2.116C0 8.33 0 12 0 12s0 3.67.502 5.814a2.998 2.998 0 0 0 2.118 2.116C4.763 20.5 12 20.5 12 20.5s7.237 0 9.38-.57a2.998 2.998 0 0 0 2.118-2.116C24 15.67 24 12 24 12s0-3.67-.502-5.814zM9.545 15.568V8.432L16 12l-6.455 3.568z"
                fill="#FF0000"
              />
            </svg>
          </a>

          <a
            href="https://open.spotify.com/user/31v3jgx5cf2jzouv64bndnx4nffa?si=M2MUHefrTAyLAEjvmn056w"
            target="_blank"
            className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-500 group-hover:text-white"
            aria-label="Spotify"
            onMouseOver={(e) =>
              e.currentTarget.classList.add("hover:text-gray-500")
            }
            onMouseOut={(e) =>
              e.currentTarget.classList.remove("hover:text-gray-500")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.682 17.644a.824.824 0 01-1.186.276 7.952 7.952 0 00-5.129-1.893c-4.398 0-7.96 3.563-7.96 7.958a7.952 7.952 0 0012.145 6.805c.55-.344 1.275-.377 1.853-.085a.824.824 0 01.384 1.086 9.883 9.883 0 01-5.986 2.12c-5.47 0-9.913-4.443-9.913-9.92S6.53 2.08 12 2.08c1.517 0 2.942.343 4.217.953a.824.824 0 01.39 1.096z"
              />
            </svg>
          </a>

          <a
            href="https://www.tiktok.com/@elclubdelmanager"
            target="_blank"
            className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
            aria-label="TikTok"
          >
            <svg
              className="w-7 h-7 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <MusicNoteIcon />
            </svg>
          </a>

          <a
            href={`mailto:${emailClub}`}
            className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
            aria-label="Correo electrónico"
          >
            <svg
              className="w-7 h-7 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <EmailIcon />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
