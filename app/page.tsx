import ResumeHistory from "../components/home/resumeHistory";
import dbConnect from "../config/database";
import SpotifyDriveAccess from "@/components/homeMiembros/SpotifyDriveAccess";
import Hero from "@/components/home/Hero";
import NuestraPropuesta from "@/components/home/NuestraPropuesta";
import MemberSummary from "@/components/member/MemberSummary";
import GetOpinion from "@/components/blog/GetOpinion";
import BeneficiosCDM from "@/components/home/BeneficiosCDM";
import EventsSummary from "@/components/homeMiembros/EventsSummary";
import Organizaciones from "@/components/home/Organizaciones";

const HomePage = async () => {
  await dbConnect();

  return (
    <>
      {/* <Banner altText="Imagen de banner" /> */}
      <Hero />

      <NuestraPropuesta />

      <Organizaciones />

      <MemberSummary />

      <SpotifyDriveAccess />
      <EventsSummary />
      <GetOpinion />
      <BeneficiosCDM />
      <div className="mx-auto max-w-5xl px-6 pt-6 flex flex-col justify-center items-center">
        <ResumeHistory />
      </div>
    </>
  );
};

export default HomePage;
