import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

interface MemberItemProps {
  nombre: string;
  apellido: string;
  cargo: string;
  linkedinURL: string;
  foto: string;
}

export default function Member(Member: MemberItemProps) {
  return (
    <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group border-teal-600 hover:bg-teal-500">
      <img
        className="object-cover w-24 h-24 rounded-full ring-4 ring-gray-300"
        src={Member.foto}
        alt=""
      />

      <h1 className="mt-4 text-xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
        {Member.nombre} {Member.apellido}
      </h1>

      <div className="flex items-center mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
        <p>{Member.cargo}</p>
        <Link
          href={`https://www.linkedin.com/in/${Member.linkedinURL}`}
          target="_blank"
          className="ml-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
          aria-label="Linkedin"
          rel="noopener noreferrer"
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <LinkedinIcon />
          </svg>
        </Link>
      </div>
    </div>
  );
}
