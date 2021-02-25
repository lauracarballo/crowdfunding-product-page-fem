import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "./Buttons";

export default function Intro({ title, subtitle }) {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <ButtonWrapper>
        <PrimaryButton>Back this Project</PrimaryButton>
        <SecondaryButton>Bookmark</SecondaryButton>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 665px;
  background-color: #fff;
  border: 1px solid hsl(0deg 0% 73% / 85%);
  border-radius: 10px;
  box-shadow: 15px 15px 65px #fff;
  text-align: center;
  padding: 44px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
