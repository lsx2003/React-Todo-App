import { createSlice } from "@reduxjs/toolkit";

const addContentSlice = createSlice({
  name: "addContentSlice",
  initialState: { isOpen: false, value: "", selected: null },
  reducers: {
    setId: (state, action) => {
      console.log("setId", action.payload);
      state.selected = action.payload;
    },
    open: (state, action) => {
      state.isOpen = true;
    },
    // open2는 content 수정창 열기
    open2: (state, action) => {
      state.isOpen2 = true;
    },
    cancel: (state, action) => {
      state.isOpen = false;
    },
    // cancel2는 content 수정창 닫기
    cancel2: (state, action) => {
      state.isOpen2 = false;
    },
    addContent: (state, action) => {
      state.addVal = action.payload;
    },
    updateContent: (state, action) => {
      state.updateVal = action.payload;
    },
  },
});

export default addContentSlice;
export const {
  open,
  open2,
  cancel,
  cancel2,
  addContent,
  updateContent,
  setId,
} = addContentSlice.actions;
