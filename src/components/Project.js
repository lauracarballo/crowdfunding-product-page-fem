import styled from "styled-components";
import Intro from "./ProjectIntro";
import Info from "./ProjectInfo";
import Counter from "./Counter";

export default function Project({ openModal }) {
  return (
    <ProjectWrapper>
      <Intro
        title="Mastercraft Bamboo Monitor Riser"
        subtitle="A beautiful & handcrafted monitor stand to reduce neck and eye strain."
        openModal={openModal}
      />
      <Counter moneyRaised="$89,914" totalBackers="$5,007" days="56" />
      <Info openModal={openModal} />
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  position: absolute;
  top: 225px;
`;
