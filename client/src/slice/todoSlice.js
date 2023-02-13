import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: [],
  reducers: {
    fetchData: (state, action) => {
      state.push(action.payload);
    },

    add: (state, action) => {
      state.push(action.payload);
    },

    sync: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.pop();
      }
      state.push(action.payload);
      return;
    },
  },
});

export default todoSlice;
export const { fetchData, add, done, sync } = todoSlice.actions;
