"use client";
import React, { useState } from "react";
import { PostMetadata } from "../PostMetadata";
import Link from "next/link";

interface PostTabComponentProps {
  posts: PostMetadata[];
}

const PostTabComponent: React.FC<PostTabComponentProps> = ({ posts }) => {
  // Obtener tipos únicos de las publicaciones
  const uniqueTypes = Array.from(new Set(posts.map((post) => post.type)));

  // Estado para almacenar el tipo seleccionado
  const [selectedType, setSelectedType] = useState<string | null>(
    uniqueTypes[-1] || null
  );

  return (
    <div className="relative rounded-lg overflow-hidden pt-4">
      <div className="flex justify-center mb-4">
        <div className="grid grid-cols-3 gap-4 items-center p-1 border border-blue-500 dark:border-blue-400 rounded-xl">
          <button
            key={-1}
            className={`px-2 py-1 text-base sm:text-lg lg:text-xl font-medium capitalize transition-colors duration-300 focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl ${
              selectedType === null
                ? "bg-blue-400 text-white"
                : "text-white dark:hover:text-white"
            }`}
            style={{ minWidth: "fit-content" }} // Add this line
            onClick={() => setSelectedType(null)}
          >
            Todos
          </button>
          {uniqueTypes.map((type, index) => (
            <button
              key={index}
              className={`px-2 py-1 text-base sm:text-lg lg:text-xl font-medium capitalize transition-colors duration-300 focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl ${
                selectedType === type
                  ? "bg-blue-400 text-white"
                  : "text-white dark:hover:text-white"
              }`}
              style={{ minWidth: "fit-content" }} // Add this line
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
        {posts
          .filter((post) => selectedType === null || post.type === selectedType)
          .map((post, idx) => (
            <div key={idx} className="mx-4 my-6">
              <div className="relative rounded-lg overflow-hidden">
                <Link href={`/posts/${post.slug}`}>
                  <img
                    src={post.imagen}
                    alt="Imagen de portada del blog"
                    className="relative z-10 object-cover w-full rounded-md h-96"
                  />
                  <div className="relative z-20 max-w-lg p-4 mx-auto -mt-16 bg-white rounded-md shadow dark:bg-gray-900">
                    <p className="mt-2 text-xs text-blue-400">{post.date}</p>
                    <h2 className="font-semibold text-gray-700 hover:underline dark:text-white md:text-lg">
                      {post.title}
                    </h2>
                    <p className="t-2 text-xs text-gray-400 dark:text-gray-200 md:text-sm">
                      {post.subtitle}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </ul>
      <div className="inline-flex w-full mt-6 sm:w-auto">
        <Link href="">
          <button className="inline-flex items-center justify-center w-full px-6 py-2 font-medium text-white duration-300 bg-blue-400  rounded-lg hover:bg-blue-500  focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostTabComponent;
