import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return {
    /*<div className="relative rounded-lg  overflow-hidden">
      
      <Link href={`/posts/${props.slug}`}>
      <img
        src={props.imagen}
        alt="Imagen de portada del blog"
        className="relative z-10 object-cover w-full rounded-md h-96"
      />
      <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
        <p className="mt-3 text-sm text-blue-500">{props.date}</p>
        
          <h2 className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">{props.title}</h2>
    
        <p className="t-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">{props.subtitle}</p>
        
      </div>
      </Link>
  </div>*/
  };
};

export default PostPreview;
