import React from "react";
import getPostMetadata from "../getPostMetadata";
import PostTabComponent from "./PostTabComponent";
import { PostMetadata } from "../PostMetadata";

interface FilteredPostProps {
  posts: PostMetadata[];
}

const FilteredPost: React.FC<FilteredPostProps> = ({ posts }) => {
  return (
    <div>
      <PostTabComponent posts={posts} />
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = await getPostMetadata();
  return {
    props: {
      posts,
    },
  };
};

export default FilteredPost;
