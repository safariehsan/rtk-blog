import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import React from "react";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderPosts = orderedPosts.map((post) => {
    return (
      <div key={post.id}>
        <article>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}</p>
          <p>
            <PostAuthor userId={post.userId} />
            <br />
            <TimeAgo timestamp={post.date} />
          </p>
          <ReactionButtons post={post} />
        </article>
        <hr />
      </div>
    );
  });
  return (
    <section>
      <b>Posts</b>
      <br />
      {renderPosts}
    </section>
  );
};

export default PostsList;
