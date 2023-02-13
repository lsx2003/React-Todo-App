import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import addContentSlice from "./slice/addContentSlice";
import todoSlice from "./slice/todoSlice";
import calendar from "./slice/calendarSlice";
import fetch from "./slice/calendarSlice";

const store = configureStore({
  middleware: [...getDefaultMiddleware()],
  reducer: {
    content: addContentSlice.reducer,
    todo: todoSlice.reducer,
    calendar: calendar.reducer,
    fetch: fetch.reducer,
  },
});

export default store;
