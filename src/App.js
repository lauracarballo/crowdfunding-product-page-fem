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

export default function App() {
  const { isOpen, setIsOpen, toggle } = useModal();
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Hero>
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
  z-index: 0;

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
