import styled from "styled-components";
import { PrimaryButton } from "./Buttons";

export default function ProductBox({ name, price, description, units }) {
  return (
    <Container>
      <Row>
        <h3>{name}</h3>
        <span>{price}</span>
      </Row>
      <p>{description}</p>
      <Row>
        <span>{units} left</span>
        <PrimaryButton>Select Reward</PrimaryButton>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px 0px;
  background-color: #fff;
  border: 1px solid hsl(0deg 6% 92% / 85%);
  border-radius: 10px;
  box-shadow: 15px 15px 65px #fff;
  text-align: left;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
