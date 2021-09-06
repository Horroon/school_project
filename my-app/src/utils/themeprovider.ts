import { Themes } from "../constants/themes";
import { AppState } from "../reducers/app_reducer";

export const getTheme = (selectedTheme: AppState["theme"]) =>
  Themes[selectedTheme];
