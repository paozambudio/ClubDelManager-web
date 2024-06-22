"use client";
//import imgPortada from "./imgHome/img1.jpeg";
import Image from "next/image";
const Hero = () => {
  return (
    <header>
      <nav className=" border-teal-500 rounded-md">
        <div class="container flex items-center justify-between px-6 py-3 mx-auto"></div>
      </nav>

      <div class="container px-6 mx-auto">
        <div class="items-center lg:flex ">
          <div
            className="w-full md:w-2/3 bg-cover bg-center rounded-sm bg-no-repeat min-h-64 h-auto md:h-auto"
            style={{ backgroundImage: "url('/imgHome/img1.jpeg')" }}
          ></div>
          <div class="w-full lg:w-1/2 px-6 py-16 mx-auto">
            <div class="lg:max-w-lg">
              <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                Bienvenido a{" "}
                <span class="text-sky-600 font-semibold tracking-wide">
                  El Club del Manager
                </span>
              </h1>

              <p class="mt-3 text-lg text-gray-600 dark:text-gray-400 font-sans">
                El mundo no va a cambiar sólo, necesitamos contar con vos para
                TRANSFORMAR EL LIDERAZGO!!
              </p>

              <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <span className="font-sans">
                  Si querés ser parte, llená el formulario
                </span>

                <button
                  class="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-sky-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  onClick={() => {
                    window.open(
                      "https://forms.gle/2sHNbcHMedhV4kDs9",
                      "_blank"
                    );
                  }}
                >
                  Unite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
