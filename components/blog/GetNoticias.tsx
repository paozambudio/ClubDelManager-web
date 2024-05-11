import getPostMetadata from "./getPostMetadata";
import PostPreview from "./PostPreviewLastest";
import Link from "next/link";

const GetNoticias = () => {
  const publicaciones = getPostMetadata();
  const publicacionesOrdenadas = publicaciones.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const latestPosts = publicacionesOrdenadas.slice(0, 2); // Mostrar solo los 3 primeros

  return (
    <>
      <div className="container px-10 py-10 mx-auto mt-6 md:flex md:items-center md:justify-between ">
        <h1 className="text-2xl font-semibold text-blue-400 capitalize lg:text-3xl dark:text-white">
          Enterate de las últimas novedades
        </h1>

        <Link href="/blog">
          <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Ver más ...
          </button>
        </Link>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {latestPosts
          .filter((post) => post.active)
          .map((post) => (
            <li key={post.slug}>
              <PostPreview {...post} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default GetNoticias;
