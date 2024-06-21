import Image from "next/image";
import Link from "next/link";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CustomizedTimeline from "../../components/history/TimeLine";

export default function HistoryPage() {
  return (
    <div className="w-full py-12 space-y-12 md:py-24 lg:space-y-16">
      <div className="flex max-w-6xl px-4 py-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg shadow-md dark:bg-gray-800">
        <div className="w-1/3 p-4 md:p-4">
          <span className="text-xl font-bold text-sky-600 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
            Sobre el club
          </span>
          <p className="mt-2 text-md text-gray-600 dark:text-gray-300">
            Marcados fuertemente luego del 2020, un grupo de Profesionales
            veíamos y sentíamos que no teníamos un espacio de intimidad para
            reflexionar, compartir y debatir sobre las problemáticas que vivimos
            diariamente como lideres de diferentes organizaciones, en una
            sociedad que cambio rotundamente. <br /> <br />
            Impulsados por un espíritu gregario, colaborativo, con paradigmas
            generacionales similares fue que nos empezamos a agruparnos bajo
            esta fuerte necesidad y realidad.
          </p>
        </div>
        <div
          className="w-2/3 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/imgHome/Img7.jpeg')" }}
        ></div>
      </div>

      <div className="flex flex-col max-w-6xl px-4 py-4 h-full bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg shadow-md dark:bg-gray-800">
        <div className="w-full p-4">
          <span className="text-xl font-bold text-sky-600 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
            Nuestra Evolución en el tiempo
          </span>
        </div>
        <div className="w-full h-full sm:h-80 md:h-96 lg:h-full xl:h-160 bg-cover bg-center bg-no-repeat">
          <img
            src="/imgHistory/Linea_de_Tiempo.jpeg"
            alt="Línea de Tiempo"
            className="w-full h-full object-cover rounded-b-lg"
          />
        </div>
      </div>

      <div className="flex flex-col max-w-6xl max-h-50 px-4 py-4 h-full bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg shadow-md dark:bg-gray-800">
        <div className="w-full p-4 md:p-4 ">
          <span className="text-xl font-bold text-sky-600 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
            Nuestros valores
          </span>
        </div>
        <div
          className=" bg-cover bg-center bg-no-repeat min-h-96 h-full"
          style={{ backgroundImage: "url('/imgHome/img20.jpeg')" }}
        ></div>
      </div>

      <div className="flex flex-col max-w-6xl max-h-50 px-4 py-4 h-full bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg shadow-md dark:bg-gray-800">
        <div className="w-full p-4 md:p-4 ">
          <span className="text-xl font-bold text-sky-600 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
            Nuestros objetivos
          </span>
        </div>

        <div className="flex flex-col max-w-6xl px-4 py-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex items-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600 dark:text-gray-400 mr-4"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="none" />
              <path d="M8 12h8" />
              <path d="M12 8l4 4-4 4" />
            </svg>
            <span className="text-xl text-gray-600 dark:text-gray-300">
              Calendarizar Eventos privados formativos Mensuales.
            </span>
          </div>
          <div className="flex items-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600 dark:text-gray-400 mr-4"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="none" />
              <path d="M8 12h8" />
              <path d="M12 8l4 4-4 4" />
            </svg>
            <span className="text-xl text-gray-600 dark:text-gray-300">
              Eventos sociales y Networking Mensuales.
            </span>
          </div>
          <div className="flex items-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600 dark:text-gray-400 mr-4"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="none" />
              <path d="M8 12h8" />
              <path d="M12 8l4 4-4 4" />
            </svg>
            <span className="text-xl text-gray-600 dark:text-gray-300">
              Células de trabajo multidisciplinarias.
            </span>
          </div>
          <div className="flex items-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600 dark:text-gray-400 mr-4"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="none" />
              <path d="M8 12h8" />
              <path d="M12 8l4 4-4 4" />
            </svg>
            <span className="text-xl text-gray-600 dark:text-gray-300">
              Nutrir de material de interés el grupo de Linkedin.
            </span>
          </div>
          <div className="flex items-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600 dark:text-gray-400 mr-4"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="none" />
              <path d="M8 12h8" />
              <path d="M12 8l4 4-4 4" />
            </svg>
            <span className="text-xl text-gray-600 dark:text-gray-300">
              Dictar conferencias en Universidades.
            </span>
          </div>
          <div className="flex items-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600 dark:text-gray-400 mr-4"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="none" />
              <path d="M8 12h8" />
              <path d="M12 8l4 4-4 4" />
            </svg>
            <span className="text-xl text-gray-600 dark:text-gray-300">
              Profundizar en el conocimiento e interacción de losmiembros.
            </span>
          </div>
          <div className="flex items-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600 dark:text-gray-400 mr-4"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="none" />
              <path d="M8 12h8" />
              <path d="M12 8l4 4-4 4" />
            </svg>
            <span className="text-xl text-gray-600 dark:text-gray-300">
              Biblioteca con mas de 150 libros de Managment.
            </span>
          </div>
          <div className="flex items-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600 dark:text-gray-400 mr-4"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="none" />
              <path d="M8 12h8" />
              <path d="M12 8l4 4-4 4" />
            </svg>
            <span className="text-xl text-gray-600 dark:text-gray-300">
              Podcast protagonizados por miembros..
            </span>
          </div>
          <div className="flex items-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600 dark:text-gray-400 mr-4"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="none" />
              <path d="M8 12h8" />
              <path d="M12 8l4 4-4 4" />
            </svg>
            <span className="text-xl text-gray-600 dark:text-gray-300">
              Confección de Papers sobre temas relevantes del Managment.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
