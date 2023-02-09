import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },

    remove: (state, action) => {
      return state.filter((el, idx) => idx !== action.payload);
    },
  },
});

export default todoSlice;
export const { add, done, remove } = todoSlice.actions;
