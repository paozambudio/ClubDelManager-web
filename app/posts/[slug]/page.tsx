import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/blog/getPostMetadata";

import React from "react";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div className="mx-auto max-w-xl px-8">
      <style>
        {`
          .prose * {
            color: gray !important;
          }
        `}
      </style>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-gray-600">{post.data.title}</h1>
        <p className="text-gray-600 mt-2">{post.data.subtitle}</p>
        <div className="my-12 text-center">
          <p className="text-white mt-2">
            Fecha: {post.data.date} &nbsp;&nbsp; Por: {post.data.autor}
          </p>
        </div>
      </div>

      <article className="prose text-white">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
