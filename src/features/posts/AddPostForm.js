import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const users = useSelector(selectAllUsers);

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const onAddHandler = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
      } catch (err) {
        console.error("failed to add post: ", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };
  const renderUserOptions = users.map((user) => {
    return (
      <option value={user.id} key={user.id}>
        {user.name}
      </option>
    );
  });
  return (
    <>
      <h3>Add a new post</h3>
      <form>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value="">select user</option>
          {renderUserOptions}
        </select>
        <br />
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          placeholder="content"
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button disabled={!canSave} type="button" onClick={onAddHandler}>
          Add Post
        </button>
      </form>
    </>
  );
};

export default AddPostForm;
