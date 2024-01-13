import { createGlobalStyle, css } from "styled-components";

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  html {
    font-size: 14px;
    font-family: "Roboto", sans-serif;
  }
  @media (min-width: 768px) {
    html {
      font-size: 16px;
    }
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
