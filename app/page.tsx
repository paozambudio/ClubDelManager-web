import GetNoticias from "../components/blog/GetNoticias";
import ResumeHistory from "../components/home/resumeHistory";
import dbConnect from "../config/database";
import SpotifyDriveAccess from "@/components/homeMiembros/SpotifyDriveAccess";
import Hero from "@/components/home/Hero";
import NuestraPropuesta from "@/components/home/NuestraPropuesta";
import MemberSummary from "@/components/member/MemberSummary";

const HomePage = async () => {
  await dbConnect();

  return (
    <>
      {/* <Banner altText="Imagen de banner" /> */}
      <Hero />
      <NuestraPropuesta />
      <MemberSummary />
      <SpotifyDriveAccess />

      <div className="mx-auto max-w-5xl px-6 pt-6 flex flex-col justify-center items-center">
        <GetNoticias />

        <ResumeHistory />
      </div>
    </>
  );
};

export default HomePage;
