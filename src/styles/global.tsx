import { css, Global } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; /* Deve ser "border-box" em vez de "0" */
        border: none;
      }

      body,
      input,
      textarea,
      button {
        font-family: Roboto, sans-serif;
        border: none;
      }
    `}
  />
);

export default GlobalStyle;
