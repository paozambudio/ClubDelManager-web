import Image from "next/image";
import Link from "next/link";

export default function HistoryPage() {
  return (
    <div className="w-full py-12 space-y-12 md:py-24 lg:space-y-16">
      <div className="container space-y-12 px-4 md:px-6 lg:space-y-16">
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl text-white font-bold tracking-tighter sm:text-5xl md:text-6xl/relaxed">
              La historia del Club
            </h1>
            <p className="md:text-xl/relaxed pt-6 lg:text-base/relaxed xl:text-xl/relaxed text-white">
              El dia 07/11/23 se firmo el estatuto del club pero...
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-8  text-white">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col items-start space-y-2">
              {/* <p className="text-sm font-medium tracking-wide uppercase">
                07/11/23
              </p> */}
              <p className="text-xl font-bold tracking-tight">
                ¿Qué es el Club?
              </p>
              <p className="">
                El Club Aeroespacial es una asociación que busca promover el
                estudio, desarrollo, progreso y divulgación de las ciencias y
                tecnologías vinculadas a temas aeroespaciales,
                telecomunicaciones, innovaciones tecnológicas y áreas afines, a
                través de trabajos de investigación, elaboración de proyectos,
                realización de entrevistas, presentación de trabajos y
                organización de cursos, charlas, conferencias, proyecciones,
                exposiciones, etc.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt="foto de los fundadores con el estatuto"
                className="aspect-auto overflow-hidden rounded-lg object-cover"
                src="/imgHistory/fotoconestatuto.jpg"
                width={300}
                height={400}
              />
              <span className="text-sm">
                Foto de los fundadores con el estatuto
              </span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col items-center">
              <Image
                alt="foto de los fundadores con el estatuto"
                className="aspect-auto overflow-hidden rounded-lg object-cover"
                src="/imgHistory/cate.jpg"
                width={300}
                height={400}
              />
              <span className="text-sm">Foto en el 12° CATE</span>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <p className="text-xl font-bold tracking-tight">
                Pero, ¿cómo surgió?
              </p>
              <p className="">
                La idea surge en el 12° Congreso Argentino de Tecnología
                Espacial (12° CATE), una jornada en donde se abordan diversas
                temáticas relacionadas al aeroespacio que van desde vehículos
                espaciales, cargas útiles y telecomunicaciones hasta
                investigaciones sobre la la trayectoria Tierra-Luna,
                especializaciones terciarias y proyectos de investigación.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-white">
            <p>
              En este marco es donde los estudiantes de la Escuela Técnica de la
              Universidad de Mendoza: Joaquín Loberza, Mercedes Marón, Jerónimo
              Martínez, Augusto Massut Aznar, Nahuel Quiroga y Sofía Rojas,
              decidieron plantearse la creación de un club en donde se trataran
              temas aeroespaciales para que cualquier interesado pudiera acceder
              a ellos y desarrollar sus propias proyectos.
            </p>
          </div>
          <img
            alt="Moon Landing"
            className="mx-auto aspect-[16/9] overflow-hidden rounded-lg object-cover object-center"
            height="400"
            src="/imgHistory/fotocondirectivos.jpg"
            width="720"
          />

          <div className="space-y-4">
            <p>
              Bajo este concepto y luego de un largo año, lleno de
              investigaciones y trabajos como el concurso CANSAT Argentina 2023,
              el programa GLOBE de la NASA y el Space Apps Challenge 2023, los
              estudiantes fundaron el 7 de Noviembre el Club Aeroespacial.
            </p>
            <p>
              Si querés conocer más sobre las investigaciones y trabajos en los
              que participamos podés encontrar toda la informaciĺn en nuestro
              blog o nuestros proyectos.
            </p>

            <div className="pt-6">
              <div className="flex justify-center">
                <div className="px-6">
                  <Link href="/blog">
                    <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                      Blog
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto max-w-4xl space-y-8  text-white">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="grid items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-4xl lg:grid-cols-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">CANSAT Argentina 2023</h3>
                <p className="text-sm">
                  On July 16, 1969, the Apollo 11 spacecraft was launched from
                  Kennedy Space Center in Florida. The Saturn V rocket carried
                  the crew into space, beginning their historic journey to the
                  Moon.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Translunar Injection</h3>
                <p className="text-sm">
                  After orbiting the Earth, the spacecraft performed a
                  translunar injection, sending it on a trajectory towards the
                  Moon. The crew settled in for the three-day journey,
                  conducting experiments and preparing for the lunar landing.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Lunar Orbit Insertion</h3>
                <p className="text-sm ">
                  The spacecraft entered lunar orbit, and the crew prepared for
                  the final stage of the mission. The Eagle lunar module
                  separated from the command module, carrying Neil Armstrong and
                  Buzz Aldrin to the surface of the Moon.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
