import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Link href={`/posts/${props.slug}`}>
        <img
          src={props.imagen}
          alt="Imagen de portada del blog"
          className="relative z-10 object-cover w-full rounded-md h-64"
        />

        <div className="relative z-20 max-w-lg p-4 mx-auto -mt-16 bg-gray-100 dark:bg-gray-100 rounded-b-lg shadow ">
          <p className="mt-2 text-xs text-blue-400">
            {props.date} {props.active}
          </p>
          <div className="h-16 overflow-hidden">
            <h2 className="font-semibold text-gray-700 hover:underline dark:text-gray-700  md:text-lg">
              {props.title}
            </h2>
          </div>
          <div className="h-10 overflow-hidden">
            <p className="t-2 text-xs text-gray-400 dark:text-gray-400 md:text-sm">
              {props.subtitle}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
