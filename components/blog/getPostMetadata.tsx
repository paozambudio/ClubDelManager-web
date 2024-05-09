import  fs  from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      imagen: `blog-portada/${fileName.replace(".md", ".jpg")}`, // Ruta a la imagen de portada
      type: matterResult.data.type, // Agregamos el tipo o categoría
      autor: matterResult.data.autor, // Agregamos el autor
    };
  });

  return posts;
};

export default getPostMetadata;

export async function getStaticProps() {
  const posts = await getPostMetadata(); // Fetch data

  return {
    props: {
      posts, // Pass the fetched data as props
    },
  };
}
