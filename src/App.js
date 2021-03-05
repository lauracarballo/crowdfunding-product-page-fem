import styled from "styled-components";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Modal from "./components/Modal";
import Nav from "./components/Nav";
import Project from "./components/Project";
import ThankYouModal from "./components/ThankYouModal";
import useModal from "./components/useModal";
import { GlobalStyle } from "./utils/Global";
import { defaultTheme } from "./utils/themes";
import useViewport from "./components/useViewport";

export default function App() {
  const { isOpen, setIsOpen, toggle } = useModal();
  const [isCompleted, setIsCompleted] = useState(false);
  const { isMobile } = useViewport();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Hero isMobile={isMobile}>
        <Nav />
      </Hero>
      <Project openModal={toggle} />
      <Modal
        isOpen={isOpen}
        closeModal={toggle}
        openThankYou={() => {
          setIsCompleted(true);
          setIsOpen(false);
        }}
      />

      {isCompleted ? (
        <ThankYouModal
          isCompleted={isCompleted}
          closeThankYouModal={() => setIsCompleted(false)}
        />
      ) : null}

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

  @media only screen and (max-width: 767px) {
    background-image: url("/images/image-hero-mobile.jpg");
    padding: 20px 30px;
  }
`;
