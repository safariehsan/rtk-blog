import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector(selectAllUsers);
  const onAddHandler = () => {
    if (title && content) {
      //   dispatch(
      //     postAdded({
      //       id: nanoid(),
      //       title,
      //       content,
      //     })
      //   );
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
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
