import styled from "styled-components";
import { primary } from "../utils";

export default function Counter({ moneyRaised, totalBackers, days }) {
  return (
    <Container>
      <Row>
        <Column>
          <Number>{moneyRaised}</Number>
          <span>of $100,000 backed</span>
        </Column>

        <Divider />

        <Column>
          <Number>{totalBackers}</Number>
          <span>total backers</span>
        </Column>

        <Divider />

        <Column>
          <Number>{days}</Number>
          <span>days left</span>
        </Column>
      </Row>

      <Slider />
    </Container>
  );
}

const Container = styled.div`
  margin: 20px 0px;
  width: 665px;
  background-color: #fff;
  border: 1px solid hsl(0deg 6% 92% / 85%);
  border-radius: 10px;
  box-shadow: 15px 15px 65px #fff;
  text-align: left;
  padding: 44px;

  @media only screen and (max-width: 768px) {
    width: 350px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 460px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Number = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const Divider = styled.hr`
  position: relative;
  background-color: hsl(0deg 6% 92% / 85%);
  color: hsl(0deg 6% 92% / 85%);
  -webkit-transform: rotate(90deg);
  width: 60px;
  height: 1px;
  border: 1px;
  top: 30px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    -webkit-transform: none;
    top: 5px;
  }
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background-color: hsl(0deg 6% 92% / 85%);
  margin-top: 40px;

  &:before {
    content: "";
    width: 70%;
    height: 10px;
    border-radius: 10px;
    background-color: ${primary[100]};
    position: absolute;
  }
`;
