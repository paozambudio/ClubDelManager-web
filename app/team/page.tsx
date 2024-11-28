"use client";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Member from "../../components/team/Member";

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
        <h1 className="text-2xl font-semibold text-center text-sky-600 capitalize lg:text-3xl ">
          Nuestro Equipo Directivo
        </h1>
        <p className="max-w-2xl text-xl mx-auto my-6 text-center text-gray-500 font-semibold dark:text-gray-500">
          Líderes situacionales, en ejercicio de la comisión directiva.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          <Member
            nombre="Federico"
            apellido="Azeglio"
            cargo="Presidente"
            foto="/imgTeam/Presidente.webp"
            linkedinURL="federicoazeglio"
          />

          <Member
            nombre="Andrés"
            apellido="García"
            cargo="Vicepresidente"
            foto="/imgTeam/VicePresidente.webp"
            linkedinURL="andy-garcía-06539713"
          />

          <Member
            nombre="Pablo"
            apellido="Iacobucci"
            cargo="Secretario"
            foto="/imgTeam/Secretario.webp"
            linkedinURL="pablo-iacobucci-412a1620"
          />

          <Member
            nombre="Franco"
            apellido="Maratta"
            cargo="Tesorero"
            foto="/imgTeam/Tesorero.webp"
            linkedinURL="francomaratta"
          />

          <Member
            nombre="Eugenia"
            apellido="Plaza"
            cargo="1er Vocal"
            foto="/imgTeam/1Vocal.webp"
            linkedinURL="eugenia-plaza-901a5b215"
          />

          <Member
            nombre="Nicolás"
            apellido="Tarditi"
            cargo="2do Vocal"
            foto="/imgTeam/2Vocal.webp"
            linkedinURL="nicolas-tarditi-420a41b"
          />

          <Member
            nombre="Mauricio"
            apellido="Guzmán"
            cargo="3er Vocal"
            foto="/imgTeam/3Vocal.webp"
            linkedinURL="mauricio-antonio-guzman-a0512036"
          />
        </div>
      </div>

      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-sky-600 capitalize lg:text-3xl ">
          Nuestro Comité Ejecutivo
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          <Member
            nombre="Diego"
            apellido="Montivero"
            cargo=""
            foto="/imgTeam/Presidente.webp"
            linkedinURL="federicoazeglio"
          />

          <Member
            nombre="Roberto"
            apellido="Burgos"
            cargo=""
            foto="/imgTeam/VicePresidente.webp"
            linkedinURL="andy-garcía-06539713"
          />
        </div>
      </div>

      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-sky-600 capitalize lg:text-3xl ">
          Nuestros Coordinadores de Células
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          <Member
            nombre="Eugenia "
            apellido="Plaza"
            cargo="Célula de Eventos"
            foto="/imgTeam/1Vocal.webp"
            linkedinURL="eugenia-plaza-901a5b215"
          />

          <Member
            nombre="Marisa"
            apellido="Sanchez"
            cargo="Célula Contenidos"
            foto="/imgTeam/VicePresidente.webp"
            linkedinURL="andy-garcía-06539713"
          />

          <Member
            nombre="Diego"
            apellido="Molinuevo"
            cargo="Célula Summit"
            foto="/imgTeam/VicePresidente.webp"
            linkedinURL="andy-garcía-06539713"
          />

          <Member
            nombre="Paola"
            apellido="Zambudio"
            cargo="Célula Plataforma Digital y Beneficios"
            foto="/imgTeam/VicePresidente.webp"
            linkedinURL="andy-garcía-06539713"
          />
        </div>
      </div>
    </section>
  );
};

export default blogPage;
