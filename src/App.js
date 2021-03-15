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
import useSWR, { mutate } from "swr";
import getDaysleft from "./utils/getDaysLeft";

const fetcher = (url) =>
  axios
    .get(url)
    .then((res) => res.data)
    // For offline use:
    .catch(() => mutate("http://localhost:5000/projects", sampleProject));

const sampleProject = {
  id: 1,
  title: "Mastercraft Bamboo Monitor Riser",
  subtitle:
    "A beautiful & handcrafted monitor stand to reduce neck and eye strain.",
  description:
    "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand. Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
  products: [
    {
      id: 0,
      name: "Bamboo Stand",
      price: "Pledge $25 or more",
      minPledge: 25,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      units: 101,
    },
    {
      id: 1,
      name: "Black Edition Stand",
      price: "Pledge $75 or more",
      minPledge: 75,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      units: 64,
    },
    {
      id: 2,
      name: "Mahogany Special Edition ",
      price: "Pledge $200 or more",
      minPledge: 200,
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      units: 0,
    },
  ],
  backersCount: 5007,
  targetPledge: 100000,
  currentPledge: 89914,
  expires: "2021-03-29T00:00:00.000Z",
};

export default function App() {
  const { data: project } = useSWR("http://localhost:5000/projects", fetcher);

  const { isOpen, toggle } = useModal();
  const [isPledgeReceived, setIsPledgeReceived] = useState(false);
  const { isMobile } = useViewport();

  if (!project) {
    return <div>Loading</div>;
  }

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
