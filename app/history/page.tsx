import Image from "next/image";
import Link from "next/link";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

export default function HistoryPage() {
  return (
    <div className="w-full py-12 space-y-12 md:py-24 lg:space-y-16">
      <div className="container space-y-12 px-4 md:px-6 lg:space-y-16">
        <div className="space-y-4 ">
          <div className="space-y-2">
            <h1 className="text-4xl text-sky-600 font-bold tracking-tighter sm:text-5xl md:text-6xl/relaxed p-6">
              Sobre el Club
            </h1>
            <div className=" grid grid-cols-2 align-middle">
              <p className="md:text-xl/relaxed pt-6 lg:text-base/relaxed xl:text-xl/relaxed text-gray-500 align-middle">
                Marcados fuertemente luego del 2020, un grupo de Profesionales
                veíamos y sentíamos que no teníamos un espacio de intimidad para
                reflexionar, compartir y debatir sobre las problemáticas que
                vivimos diariamente como lideres de diferentes organizaciones,
                en una sociedad que cambio rotundamente. Impulsados por un
                espíritu gregario, colaborativo, con paradigmas generacionales
                similares fue que nos empezamos a agruparnos bajo esta fuerte
                necesidad y realidad.
              </p>
              <img
                className="align-middle"
                src="imgHome/Img7.jpeg"
                width={800}
                height={300}
              />
            </div>
            <h1 className="text-4xl text-sky-600 font-bold tracking-tighter sm:text-5xl md:text-6xl/relaxed p-6">
              Nuestra evolución en el tiempo
            </h1>
            <div>
              <h1 className="text-2xl text-gray-500 font-semibold tracking-tighter sm:text-2xl md:text-2xl/relaxed">
                <p className="font-bold text-3xl text-gray-200">2021 </p> Se
                empezo a gestar esta iniciativa con un relevamiento informal por
                algunos de los miembros sobre otros Managers y esta necedidad
                identificada.
              </h1>
              <h1 className="text-2xl text-teal-500 font-semibold tracking-tighter sm:text-2xl md:text-2xl/relaxed">
                <p className="font-bold text-3xl text-gray-200">2022 </p> Se
                empiezan a agrupar diferentes referentes entorno a una
                comunidad, luego generamos una reunión inicial donde lo
                compartido y vivido quedara en el anecdotario de todos los allí
                presentes... fue una reunión muy sentida!!
              </h1>
              <h1 className="text-2xl text-gray-500 font-semibold tracking-tighter sm:text-2xl md:text-2xl/relaxed">
                <p className="font-bold text-3xl text-gray-200">2023 </p> Se
                armo un equipo de lideres para planificar el año y ser puente de
                las inquietudes y necesidades de los miembros, como poder
                abordar nuevos desafíos de cara al futuro del club.
              </h1>
            </div>
            <div className=" grid grid-cols-2">
              <div>
                <h1 className="text-4xl text-sky-600 font-bold tracking-tighter sm:text-5xl md:text-6xl/relaxed p-6">
                  Nuestros valores
                </h1>
                <div className=" grid grid-cols-1">
                  <img src="imgHome/img20.jpeg" width={800} height={300} />
                </div>
              </div>
              <div>
                <h1 className="text-4xl text-sky-600 font-bold tracking-tighter sm:text-5xl md:text-6xl/relaxed p-6">
                  Nuestros objetivos
                </h1>
                <div className=" grid grid-cols-1 p-6">
                  <ul>
                    <li>
                      <p>
                        <CheckCircleOutlinedIcon /> Calendarizar Eventos
                        privados formativos Mensuales.
                      </p>
                    </li>
                    <li>
                      <p>
                        <CheckCircleOutlinedIcon />
                        Eventos sociales y Networking Mensuales.
                      </p>
                    </li>
                    <li>
                      <p>
                        <CheckCircleOutlinedIcon />
                        Células de trabajo multidisciplinarias.
                      </p>
                    </li>
                    <li>
                      <p>
                        <CheckCircleOutlinedIcon />
                        Nutrir de material de interés el grupo de Linkedin.
                      </p>
                    </li>
                    <li>
                      <p>
                        <CheckCircleOutlinedIcon />
                        Dictar conferencias en Universidades.
                      </p>
                    </li>
                    <li>
                      <p>
                        <CheckCircleOutlinedIcon />
                        Profundizar en el conocimiento e interacción de
                        losmiembros.
                      </p>
                    </li>
                    <li>
                      <p>
                        <CheckCircleOutlinedIcon />
                        Biblioteca con mas de 150 libros de Managment.
                      </p>
                    </li>
                    <li>
                      <p>
                        <CheckCircleOutlinedIcon />
                        Podcast protagonizados por miembros..
                      </p>
                    </li>
                    <li>
                      <p>
                        <CheckCircleOutlinedIcon />
                        Confección de Peapers sobre temas relevantes del
                        Managment.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
