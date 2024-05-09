import getPostMetadata from "../../components/blog/getPostMetadata";
import FilteredPost from "../../components/blog/fliter/FilteredPost";

const blogPage = () => {
  const publicaciones = getPostMetadata();
  const publicacionesOrdenadas = publicaciones.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div>
      
      <FilteredPost posts={publicacionesOrdenadas} />{" "}
    </div>
  );
};

export default blogPage;
