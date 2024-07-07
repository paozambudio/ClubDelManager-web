import getPostMetadata from "./getPostMetadata";
import GetNoticias from "./GetNoticias";

const GetOpinion = () => {
  const publicaciones = getPostMetadata();
  const publicacionesOpinion = publicaciones.filter(
    (publi) => publi.type.toLowerCase() === "opinion"
  );
  const publicacionesOrdenadas = publicacionesOpinion.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const latestPosts = publicacionesOrdenadas.slice(0, 4);

  return (
    <section className="bg-transparent ">
      <div className="container px-6 py-2 mx-auto ">
        <div className="lg:flex lg:-mx-6 h-99 ">
          <div className="lg:w-3/4 lg:px-6 ">
            <GetNoticias />
          </div>

          <div className="mt-8 py-8 lg:w-1/4 lg:mt-0 lg:px-2 overflow-y-auto ">
            <h2 className="font-semibold">Opinión del Manager</h2>
            {latestPosts
              .filter((post) => post.active)
              .map((post) => (
                <div className="flex-1">
                  <a
                    href={`/posts/${post.slug}`}
                    className="block mt-2 text-sm font-sans text-gray-500 hover:underline hover:text-gray-500 dark:text-gray-500 "
                  >
                    <h3 className="text-sky-700 text-md capitalize font-normal">
                      {post.title}
                    </h3>
                    {post.subtitle}
                  </a>
                  <br />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetOpinion;
