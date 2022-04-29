import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userName = action.payload;
    },
    logout: (state) => {
      state.userName = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
