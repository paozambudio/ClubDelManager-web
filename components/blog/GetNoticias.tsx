import getPostMetadata from "./getPostMetadata";
import PostPreview from "./PostPreviewLastest";
import Link from "next/link";

const GetNoticias = () => {
  const publicaciones = getPostMetadata();
  const publicacionesSinOpinion = publicaciones.filter(
    (publi) => publi.type.toLowerCase() !== "opinion"
  );

  const publicacionesOrdenadas = publicacionesSinOpinion.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const latestPosts = publicacionesOrdenadas.slice(0, 2); // Mostrar solo los 3 primeros

  return (
    <>
      <div className="container py-10 pt-10 align-top mx-auto mt-6 md:flex md:items-center md:justify-between ">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-gray-800">
          Enterate <br />
          de las últimas &nbsp;
          <span className="underline decoration-blue-500">Novedades</span>
        </h1>

        <Link href="/blog">
          <button className="inline-flex items-center justify-center  px-10 py-2 p-10 font-medium text-white duration-300 bg-sky-600  rounded-lg hover:bg-blue-500  focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            Leer más
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-2 text-white dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </Link>
      </div>

      <ul className=" flex-col h-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {latestPosts
          .filter((post) => post.active)
          .map((post) => (
            <li key={post.slug} className="flex-1 h-full">
              <PostPreview {...post} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default GetNoticias;
