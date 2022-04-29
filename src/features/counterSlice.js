import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inc: (state) => {
      state.count += 1;
    },
    dec: (state) => {
      state.count -= 1;
    },
    incByVal: (state, action) => {
      state.count += action.payload;
    },
    decByVal: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { inc, dec, incByVal, decByVal } = counterSlice.actions;
export default counterSlice.reducer;
