import styled from "styled-components";
import Intro from "./ProjectIntro";
import Info from "./ProjectInfo";
import Counter from "./Counter";

export default function Project({
  openModal,
  title,
  subtitle,
  products,
  moneyRaised,
  totalBackers,
  days,
}) {
  return (
    <ProjectWrapper>
      <Intro title={title} subtitle={subtitle} openModal={openModal} />
      <Counter
        moneyRaised={moneyRaised}
        totalBackers={totalBackers}
        days={days}
      />
      <Info products={products} openModal={openModal} />
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
