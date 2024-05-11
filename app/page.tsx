import getPostMetadata from "../components/blog/getPostMetadata";
import PostPreview from "../components/blog/PostPreview";
import LastestPostPreview from "../components/blog/LastestPostPreview";
import GetNoticias from "../components/blog/GetNoticias";
import Banner from "../components/home/banner";
import ResumeHistory from "../components/home/resumeHistory";
import NumbersHome from "../components/home/numbersHome";
import { dbConnect } from "../config/database";

const HomePage = async () => {
  return (
    <>
      <Banner altText="Imagen de banner" />

      <div className="mx-auto max-w-5xl px-6 pt-6 flex flex-col justify-center items-center">
        <NumbersHome
          miembrosCount={62}
          proyectosCount={5}
          participacionCount={15}
        />
        <GetNoticias />

        <ResumeHistory />
      </div>
    </>
  );
};

export default HomePage;
