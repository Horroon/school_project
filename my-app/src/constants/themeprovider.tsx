import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { RootState } from "../store/index";
import { getTheme } from "../utils/themeprovider";

const ThemeProviderComponent: React.FC = ({ children }) => {
  const selectedTheme = useSelector(
    (state: RootState) => state.appReducer.theme
  );
  return (
    <ThemeProvider theme={getTheme(selectedTheme)}>{children}</ThemeProvider>
  );
};

export default ThemeProviderComponent;
