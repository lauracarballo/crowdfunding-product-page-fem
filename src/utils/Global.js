import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";
import { neutral } from "./colors";
import { typeScale } from "./typography";

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  height: 100%;
  font-family: ${primaryFont};
  color: ${neutral[400]};
  font-size: ${typeScale.paragraph};
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  width: 90%;
  margin: 0 auto;
}

ul, li {
    list-style-type: none;
}

`;
