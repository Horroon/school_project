import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AppState = {
  theme: "dark" | "light";
};
const initialState: AppState = {
  theme: "light",
};

const AppReducer = createSlice({
  name: "appreducer",
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<AppState["theme"]>) => ({
      ...state,
      theme: action.payload,
    }),
  },
});

const { updateTheme } = AppReducer.actions;
export default AppReducer.reducer;
