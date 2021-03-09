import styled from "styled-components";
import axios from "axios";
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
import useSWR from "swr";
import getDaysleft from "./utils/getDaysLeft";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function App() {
  const { data: project } = useSWR("http://localhost:5000/projects", fetcher);

  const { isOpen, toggle } = useModal();
  const [isPledgeReceived, setIsPledgeReceived] = useState(false);
  const { isMobile } = useViewport();

  if (!project) return <div>Loading</div>;

  const daysLeft = getDaysleft(project.expires);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Hero isMobile={isMobile}>
        <Nav />
      </Hero>
      <Project
        title={project.title}
        subtitle={project.subtitle}
        openModal={toggle}
        moneyRaised={project.currentPledge}
        totalBackers={project.backersCount}
        days={daysLeft}
        products={project.products}
        targetPledge={project.targetPledge}
      />

      <Modal
        products={project.products}
        isOpen={isOpen}
        closeModal={toggle}
        openThankYouModal={() => setIsPledgeReceived(true)}
      />
      {isPledgeReceived ? (
        <ThankYouModal
          isPledgeReceived={isPledgeReceived}
          closeThankYouModal={() => setIsPledgeReceived(false)}
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
