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
      </div>
    </div>
  );
}
