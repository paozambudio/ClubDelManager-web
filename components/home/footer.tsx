"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import { signOut } from "next-auth/react";

const Footer: React.FC = () => {
  const [emailClub, setEmailClub] = useState("clubdelmanager@gmail.com");

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

        <p className="text-lg text-white px-8 font-bold">Club del Manager</p>

        <div className="flex mt-4 -mx-2">
          <a
            href="https://www.linkedin.com/company/el-club-del-manager/posts/?feedView=all"
            target="_blank"
            className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
            aria-label="LinkedIn"
          >
            <svg
              className="w-7 h-7 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <LinkedinIcon />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/clubdelmanager?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="mx-2 text-white dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
            aria-label="Instagram"
          >
            <svg
              className="w-7 h-7 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <InstagramIcon />
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
