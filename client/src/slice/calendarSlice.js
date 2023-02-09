import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendarSlice",
  initialState: { clicked: false },
  reducers: {
    open: (state, action) => {
      state.clicked = true;
    },
    close: (state, action) => {
      state.clicked = false;
    },
    pick: (state, action) => {
      console.log(action)
    },
  },
});

export default calendarSlice;
export const { open, close } = calendarSlice.actions;
