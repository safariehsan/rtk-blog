import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostsExcerpt from "./PostsExcerpt";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content = "";
  if (postsStatus === "loading") {
    content = "Loading...";
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    // console.log(orderedPosts);
    content = orderedPosts.map((post) => (
      <PostsExcerpt post={post} key={post.id} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <b>Posts</b>
      <br />
      {content}
    </section>
  );
};

export default PostsList;
