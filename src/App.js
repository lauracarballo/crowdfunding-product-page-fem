import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
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
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  const { isOpen, toggle } = useModal();
  const [isCompleted, setIsCompleted] = useState(false);
  const { isMobile } = useViewport();

  useEffect(() => {
    axios.get("http://localhost:5000/projects").then((res) => {
      setProject(res.data);
      setLoading(false);
    });
  }, []);

  // function updateCount(value) {
  //   const res = axios
  //     .post("/projects", {
  //       pledge: value,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  //   if (res.created) {
  //     setIsCompleted(true);
  //     setIsOpen(false);
  //   }
  // }

  return (
    <ThemeProvider theme={defaultTheme}>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <Hero isMobile={isMobile}>
            <Nav />
          </Hero>
          <Project
            title={project.title}
            subtitle={project.subtitle}
            openModal={toggle}
            moneyRaised={"$" + project.currentPledge}
            totalBackers={project.backersCount}
            days="56"
            products={project.products}
          />

          <Modal
            products={project.products}
            isOpen={isOpen}
            closeModal={toggle}
            openThankYou={() => {
              setIsCompleted(true);
              toggle();
            }}
          />
          {isCompleted ? (
            <ThankYouModal
              isCompleted={isCompleted}
              closeThankYouModal={() => setIsCompleted(false)}
            />
          ) : null}
        </>
      )}

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
