import getPostMetadata from "./getPostMetadata";
import PostPreview from "./PostPreviewLastest";
import Link from "next/link";

const LatestPostPreview = () => {
  const publicaciones = getPostMetadata();
  const publicacionesOrdenadas = publicaciones.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const latestPosts = publicacionesOrdenadas.slice(0, 3); // Mostrar solo los 3 primeros

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {latestPosts.map((post) => (
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

export default LatestPostPreview;
