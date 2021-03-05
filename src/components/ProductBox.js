import styled from "styled-components";
import { typeScale, primary } from "../utils";
import { PrimaryButton } from "./Buttons";

export default function ProductBox({
  name,
  price,
  description,
  units,
  disabled,
  openModal,
}) {
  return (
    <Container disabled={disabled}>
      <Row>
        <h3>{name}</h3>
        <Price>{price}</Price>
      </Row>
      <p>{description}</p>
      <Row>
        <UnitsWrapper>
          <Units>{units}</Units>
          <span>left</span>
        </UnitsWrapper>
        <PrimaryButton onClick={openModal} disabled={disabled}>
          {disabled ? "Out of Stock" : "Select Reward"}
        </PrimaryButton>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 20px 0px;
  background-color: #fff;
  border: 1px solid hsl(0deg 6% 92% / 85%);
  border-radius: 10px;
  box-shadow: 15px 15px 65px #fff;
  text-align: left;
  padding: 20px;

  &:before {
    position: absolute;
    content: ${(props) => (props.disabled ? '""' : "none")};
    width: 100%;
    height: 100%;
    border-radius: 10px;
    top: 0px;
    left: 0px;
    background-color: #ffffff99;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    justify-content: left;
  }
`;

const Price = styled.span`
  color: ${primary[100]};
  font-size: ${typeScale.copyrightText};
`;

const UnitsWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Units = styled.span`
  font-size: 30px;
  font-weight: 700;
  margin-right: 10px;
`;
