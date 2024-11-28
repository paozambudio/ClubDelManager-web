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

        <p className="text-lg text-white px-8 font-">Seguinos en las redes: </p>

        <div className="flex mt-4 -mx-2">
          <a
            href="https://www.linkedin.com/company/el-club-del-manager/"
            target="_blank"
            className="mx-2 text-white"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <LinkedinIcon />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/clubdelmanager?igsh=MTF6MHp2Y2pkZjlzdA=="
            target="_blank"
            className="mx-2 text-white"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <InstagramIcon />
            </svg>
          </a>

          <a
            href="https://m.facebook.com/elclubdelmanager?mibextid=LQQJ4d"
            target="_blank"
            className="mx-2 text-white"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <FacebookIcon />
            </svg>
          </a>

          <a
            href=" https://www.youtube.com/@ClubdelManager"
            target="_blank"
            className="mx-2 text-white"
            aria-label="YouTube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <YouTubeIcon />
            </svg>
          </a>

          <a
            href="https://open.spotify.com/user/31v3jgx5cf2jzouv64bndnx4nffa?si=M2MUHefrTAyLAEjvmn056w"
            target="_blank"
            className="mx-2 text-white "
            aria-label="Spotify"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 168 168"
              fill="currentColor"
            >
              <path d="M84 0a84 84 0 1084 84A84 84 0 0084 0zm38.15 121.3a4.69 4.69 0 01-6.46 1.39c-17.71-10.85-40.07-13.32-66.33-7.34a4.69 4.69 0 01-2.08-9.15c28.68-6.51 53.94-3.69 73.91 8.38a4.69 4.69 0 011.39 6.46zm9.25-20.75a5.86 5.86 0 01-8.08 1.74c-20.28-12.42-51.24-16.06-75-8.83a5.86 5.86 0 01-3.5-11.14c26.11-8.22 60.05-4.21 82.94 10.16a5.86 5.86 0 011.64 8.08zm1.15-23.17c-24.1-14.3-63.2-15.64-86.21-8.6a7.04 7.04 0 01-4.21-13.41c26.19-8.23 68.84-6.67 95.66 9.94a7.04 7.04 0 11-7.24 12.07z" />
            </svg>
          </a>

          <a
            href="https://www.tiktok.com/@elclubdelmanager"
            target="_blank"
            className="mx-2 text-white"
            aria-label="TikTok"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 48 48"
              fill="#FFFFFF"
            >
              <path
                fill="#FFFFFF"
                d="M23 29.585a4.282 4.282 0 0 1-4.284 4.282A4.282 4.282 0 0 1 14.43 29.585c0-2.363 1.924-4.287 4.287-4.287a4.271 4.271 0 0 1 1.716.35v-3.562a7.78 7.78 0 0 0-1.716-.192c-4.316 0-7.834 3.518-7.834 7.834 0 4.315 3.518 7.833 7.834 7.833 3.86 0 7.068-2.752 7.748-6.347h-3.564Z"
              />
              <path
                fill="#FFFFFF"
                d="M27.316 18.863c1.582 1.167 3.515 1.854 5.617 1.854.1 0 .198-.003.296-.006v-3.564a5.51 5.51 0 0 1-.297.008c-2.105 0-3.944-.983-5.616-2.526v4.234ZM28.02 26.758a7.758 7.758 0 0 1-1.07-3.98v-12.14h-3.56v15.704a4.286 4.286 0 0 0-1.715-.35 4.286 4.286 0 0 0-4.286 4.286 4.286 4.286 0 0 0 4.286 4.286 4.286 4.286 0 0 0 4.286-4.286h3.564a7.83 7.83 0 0 1-1.07 3.978c1.342-.997 2.323-2.406 2.905-4.078Z"
              />

              <path
                fill="#FFFFFF"
                d="M16.145 22.748a7.834 7.834 0 0 1 4.477-6.974v-3.47c-4.434.869-7.794 4.776-7.794 9.443 0 2.28.85 4.36 2.25 5.96-.272-.778-.422-1.61-.422-2.475 0-1.163.244-2.273.692-3.2a7.706 7.706 0 0 1-.18 1.716 7.834 7.834 0 0 1-1.996 3.2Z"
              />
              <path
                fill="#FFFFFF"
                d="M26.247 17.667a9.85 9.85 0 0 0 5.615 1.853c.05 0 .098 0 .147-.002V16.01a5.51 5.51 0 0 1-.295.007 5.532 5.532 0 0 1-3.242-1.04 9.65 9.65 0 0 0 2.584 1.828 9.48 9.48 0 0 0 3.624 1.04v2.612c.082 0 .163.002.244.002a9.864 9.864 0 0 1-5.617-1.854v1.054c0 1.28-.205 2.522-.59 3.68a7.833 7.833 0 0 1 2.905-4.078V12.664a9.68 9.68 0 0 1-2.905 1.853v1.854a7.86 7.86 0 0 1-.59 3.78ZM17.156 34.634a7.85 7.85 0 0 0 4.473-6.974h-1.07a7.816 7.816 0 0 1-3.664 6.353 4.276 4.276 0 0 0-2.284-.756c-.672 0-1.314.135-1.91.377a7.84 7.84 0 0 0 1.47-3.72H18a4.272 4.272 0 0 0-3.196 1.384 7.83 7.83 0 0 0 2.89 4.018 4.275 4.275 0 0 0 1.284-.377ZM13.326 29.584a7.837 7.837 0 0 1-1.715-.192V33.58a9.682 9.682 0 0 0 4.758-1.954 4.287 4.287 0 0 0 1.062 3.594 7.837 7.837 0 0 1-4.473-6.974Z"
              />
            </svg>
          </a>

          <a
            href={`mailto:${emailClub}`}
            className="mx-2 text-white"
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
