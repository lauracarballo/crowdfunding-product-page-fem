import styled from "styled-components";
import { hideVisually } from "polished";
import { typeScale, primary } from "../utils";
import Radio from "./Radio";
import { PrimaryButton } from "./Buttons";
import { useState } from "react";

export default function SelectProductBox({
  name,
  id,
  description,
  price,
  units,
  defaultPledge,
}) {
  const [value, setValue] = useState("");

  const disabled = units === 0;

  return (
    <Label>
      <HiddenRadio
        name="products"
        id={defaultPledge}
        value={id}
        disabled={disabled}
      />
      <ProductBox disabled={disabled}>
        <RadioWrapper>
          <div>
            <Radio label={name} />

            <PriceTag>{price}</PriceTag>
          </div>

          <UnitWrapper>
            <Units>{units} left</Units>
          </UnitWrapper>
        </RadioWrapper>

        <p>{description}</p>
        <MobileUnitWrapper>
          <Units>{units} left</Units>
        </MobileUnitWrapper>
        <Divider />
        <Row>
          <span>Enter your pledge</span>
          <InnerRow>
            <InputWrapper>
              <label htmlFor="pledge">$</label>
              <Input
                type="text"
                name="pledge"
                value={value}
                placeholder={defaultPledge}
                onChange={(event) => setValue(event.target.value)}
              />
            </InputWrapper>
            <PrimaryButton type="submit" modifiers="small">
              Continue
            </PrimaryButton>
          </InnerRow>
        </Row>
      </ProductBox>
    </Label>
  );
}

const Divider = styled.hr`
  display: none;
`;

const ProductBox = styled.div`
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

  p:only-of-type {
    padding-left: 40px;

    @media only screen and (max-width: 768px) {
      padding-left: 0px;
    }
  }
`;

const Row = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  ${hideVisually()}

  &:checked + ${ProductBox} {
    border: 2px solid ${primary[100]};
    svg {
      visibility: visible;
    }
    ${Divider} {
      display: block;
    }
    ${Row} {
      display: flex;
    }
  }
`;

const InnerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
  }
`;

const Label = styled.label`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const PriceTag = styled.span`
  color: ${primary[100]};
  font-size: ${typeScale.copyrightText};
  margin: 0 10px;
  @media only screen and (max-width: 768px) {
    display: block;
    margin: 0 40px;
  }
`;

const Units = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
`;

const Input = styled.input`
  width: 40px;
  border: none;
  outline: none;
  border-radius: 20px;
  margin: 0px 10px;

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
    border: 2px solid transparent;
  }
`;

const InputWrapper = styled.div`
  border: 2px solid hsl(0deg 6% 92% / 85%);
  border-radius: 30px;
  padding: 10px 15px;
  margin-right: 10px;
`;

const UnitWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileUnitWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
