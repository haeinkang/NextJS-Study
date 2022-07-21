import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
const MaterialTheme = createTheme({});
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MaterialThemeProvider theme={MaterialTheme}>
				<CssBaseline />
        <Component {...pageProps} />
      </MaterialThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;