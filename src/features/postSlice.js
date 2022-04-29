import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
};

export const getPosts = createAsyncThunk(
  //action type string
  "posts/getPosts",
  // callback function
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (data) => data.json()
    );
    return res;
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.post = action.payload;
      state.isLoading = false;
    },
    [getPosts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default postSlice.reducer;
