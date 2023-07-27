import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";
import { defaultTheme } from "../styles/themes/default";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
