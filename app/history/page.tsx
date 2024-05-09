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
              Poner nuestra historia
            </p>
          </div>
        </div>

        <div className="inline-flex w-full mt-6 sm:w-auto">
          <Link href="">
            <button className="inline-flex items-center justify-center w-full px-6 py-2 font-medium text-white duration-300 bg-blue-400  rounded-lg hover:bg-blue-500  focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              Volver
            </button>
          </Link>
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
