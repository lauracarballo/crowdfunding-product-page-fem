import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import { GlobalStyle } from "./utils/Global";
import { defaultTheme } from "./utils/themes";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Hero>
        <Nav />
      </Hero>
      <GlobalStyle />
    </ThemeProvider>
  );
}

const Hero = styled.header`
  height: 356px;
  width: 100%;
  position: relative;
  background-image: url("/images/image-hero-desktop.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  padding: 20px 140px;
  z-index: 1;

  &:before {
    height: inherit;
    width: 100%;
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #00000029;
    z-index: -1;
  }
`;
