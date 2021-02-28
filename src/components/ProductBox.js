import styled from "styled-components";
import { typeScale, primary } from "../utils";
import { PrimaryButton } from "./Buttons";

export default function ProductBox({ name, price, description, units }) {
  return (
    <Container>
      <Row>
        <h3>{name}</h3>
        <Price>{price}</Price>
      </Row>
      <p>{description}</p>
      <Row>
        <div>
          <Units>{units}</Units>
          <span>left</span>
        </div>
        <PrimaryButton modifiers="small">Select Reward</PrimaryButton>
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

const Price = styled.span`
  color: ${primary[100]};
  font-size: ${typeScale.copyrightText};
`;

const Units = styled.span`
  font-size: 30px;
  font-weight: 700;
  margin-right: 10px;
`;
