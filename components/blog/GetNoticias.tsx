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

        <div className="flex mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>

      <div className="flex justify-between mt-8 md:mt-0">
        <button
          title="left arrow"
          className="p-2 mx-3 text-sky-600 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          title="right arrow"
          className="p-2 text-sky-600 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {console.log(latestPosts)}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {latestPosts
          .filter((post) => post.active)
          .map((post) => (
            <li key={post.slug}>
              <PostPreview {...post} />
            </li>
          ))}
      </ul>

      <div className="pt-6">
        <Link href="/blog">
          <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Mas noticias
          </button>
        </Link>
      </div>
    </>
  );
};

export default GetNoticias;
