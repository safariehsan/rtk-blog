import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Ehsan Safari",
  },
  {
    id: "1",
    name: "Hamid Karimi",
  },
  {
    id: "2",
    name: "Ali Saremi",
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
