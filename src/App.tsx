import { Outlet } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { useRecoilValue } from "recoil";
import { isDarkThemeState } from "./atoms";
// utils
import { GlobalStyle, BasicStyle } from './utils/globalStyles';
import { darkTheme, lightTheme } from './utils/theme';
// components
import Header from "./components/Header";

function App() {
  const isDarkTheme = useRecoilValue(isDarkThemeState);
  return (
    <ThemeProvider theme={isDarkTheme? darkTheme: lightTheme}>
      <GlobalStyle />
      <BasicStyle />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
