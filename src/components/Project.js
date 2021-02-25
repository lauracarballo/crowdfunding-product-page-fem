import styled from "styled-components";
import Intro from "./ProjectIntro";

export default function Project() {
  return (
    <ProjectWrapper>
      <Intro
        title="Mastercraft Bamboo Monitor Riser"
        subtitle="A beautiful & handcrafted monitor stand to reduce neck and eye strain."
      />
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  position: absolute;
  top: 275px;
  z-index: 1;
`;
