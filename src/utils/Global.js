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
  color: ${neutral[100]};
  font-size: ${typeScale.paragraph};
  background-color: hsl(0deg 0% 96%);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  width: 90%;
  margin: 0 auto;
}

h1 {
  font-size: ${typeScale.header1};
  font-weight: 700;
}

h2 {
  font-size: ${typeScale.header2};
  font-weight: 700;
}


ul, li {
  list-style-type: none;
}

a:link {
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
}

a:visited {
  text-decoration: inherit;
  color: inherit;
  cursor: auto;
}

`;
