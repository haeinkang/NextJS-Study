import { css } from "@emotion/react";
import theme from "./theme";

export const global = css`
  html {
    height: 100%;
    body {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0;
      #__next {
        background: ${theme.colors.background};
        color: ${theme.colors.black};
        display: flex;
        font-family: sans-serif;
        height: 100%;
      }
    }
  }
`;

export default global;