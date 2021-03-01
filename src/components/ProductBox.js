import styled from "styled-components";
import { typeScale, primary } from "../utils";
import { PrimaryButton } from "./Buttons";

export default function ProductBox({
  name,
  price,
  description,
  units,
  disabled,
}) {
  return (
    <Container disabled={disabled}>
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
        {disabled ? (
          <PrimaryButton modifiers={["small", "disabled"]}>
            Out of Stock
          </PrimaryButton>
        ) : (
          <PrimaryButton modifiers="small">Select Reward</PrimaryButton>
        )}
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
    content: "";
    width: 100%;
    height: 100%;
    border: ${(props) =>
      props.disabled
        ? "1px solid hsl(0deg 6% 92% / 40%)"
        : "1px solid hsl(0deg 0% 85%)"};
    top: 0px;
    left: 0px;
    background-color: ${(props) => (props.disabled ? "#ffffff99" : "none")};
  }
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
