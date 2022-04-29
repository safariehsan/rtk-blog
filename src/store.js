import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import userReducer from "./features/userSlice";
import postReducer from "./features/postSlice";
import postsReducer from "./features/posts/postsSlice";
import usersReducer from "./features/users/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});
