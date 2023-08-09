import type { AppProps } from "next/app";
import { defaultTheme } from "../styles/themes/default";
import GlobalStyle from "@/styles/global";
import { ThemeProvider } from '@emotion/react';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
