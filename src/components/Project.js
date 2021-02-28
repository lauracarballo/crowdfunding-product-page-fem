import styled from "styled-components";
import Intro from "./ProjectIntro";
import Info from "./ProjectInfo";
import Counter from "./Counter";

export default function Project() {
  return (
    <ProjectWrapper>
      <Intro
        title="Mastercraft Bamboo Monitor Riser"
        subtitle="A beautiful & handcrafted monitor stand to reduce neck and eye strain."
      />
      <Counter moneyRaised="$89,914" totalBackers="$5,007" days="56" />
      <Info>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </Info>
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
