import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../features/postSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  console.log(posts);
  return (
    <div>
      <b>Posts</b>
      <br />
    </div>
  );
};

export default Posts;
