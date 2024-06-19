import getPostMetadata from "../components/blog/getPostMetadata";
import PostPreview from "../components/blog/PostPreview";
import LastestPostPreview from "../components/blog/LastestPostPreview";
import GetNoticias from "../components/blog/GetNoticias";
import Banner from "../components/home/banner";
import ResumeHistory from "../components/home/resumeHistory";
import NumbersHome from "../components/home/numbersHome";
import dbConnect from "../config/database";
import { debug } from "console";
import SpotifyDriveAccess from "@/components/homeMiembros/SpotifyDriveAccess";
import Hero from "@/components/home/Hero";
import NuestraPropuesta from "@/components/home/NuestraPropuesta";

const HomePage = async () => {
  await dbConnect();

  return (
    <>
      {/* <Banner altText="Imagen de banner" /> */}
      <Hero />
      <NuestraPropuesta />

      <div className="mx-auto max-w-5xl px-6 pt-6 flex flex-col justify-center items-center">
        <GetNoticias />

        <ResumeHistory />

        <SpotifyDriveAccess />
      </div>
    </>
  );
};

export default HomePage;
