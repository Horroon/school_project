import { createSlice } from "@reduxjs/toolkit";

const toDoReducer = createSlice({
  name: "toDoReducer",
  initialState: {},
  reducers: {
    add: (state, payload) => ({ ...state, add: payload }),
  },
});
export const { add } = toDoReducer.actions;
export default toDoReducer.reducer;
