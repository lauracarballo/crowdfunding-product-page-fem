import ReactDOM from "react-dom";
import { FocusScope } from "@react-aria/focus";
import { hideVisually } from "polished";
import { useState } from "react";
import styled from "styled-components";
import { typeScale, primary } from "../utils";
import Radio from "./Radio";
import { PrimaryButton } from "./Buttons";

export default function Modal({ products, isOpen, closeModal, openThankYou }) {
  return isOpen
    ? ReactDOM.createPortal(
        <aside>
          <FocusScope autoFocus>
            <Container
              role="dialog"
              aria-modal="true"
              aria-labelledby="ProductsList"
              aria-describedby="Choose the product you want to support"
              tab-index={-1}
            >
              <CloseModalButtonWrapper>
                <CloseModalButton onClick={closeModal}>
                  <svg
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                      fill="#000"
                      fill-rule="evenodd"
                      opacity=".4"
                    />
                  </svg>
                </CloseModalButton>
              </CloseModalButtonWrapper>
              <h2>Back this project</h2>
              <p>
                Want to support us in bringing MasterCraft Bamboo Monitor Riser
                out in the world?
              </p>
              <SelectProductBox
                name="Pledge with no reward"
                description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
              />

              {products.map((product) => {
                return (
                  <SelectProductBox
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    units={product.units + " left"}
                    defaultPledge={product.minPledge}
                    openThankYou={openThankYou}
                  />
                );
              })}
            </Container>
            <ModalOverlay />
          </FocusScope>
        </aside>,
        document.body
      )
    : null;
}

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: #fff;
  width: 700px;
  border-radius: 10px;
  padding: 20px 40px;
  overflow: scroll;
  height: 90%;

  @media only screen and (max-width: 768px) {
    width: 310px;
    padding: 15px 20px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: #000;
  opacity: 0.55;
`;

const CloseModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseModalButton = styled.button`
  border: none;
  background: transparent;
  color: ${(props) => props.theme.mainFontColor};
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
    border: 2px solid transparent;
  }
`;

export function SelectProductBox({
  name,
  id,
  description,
  disabled,
  price,
  units,
  defaultPledge,
  onSelect,
  openThankYou,
}) {
  const [value, setValue] = useState();

  function handleInputChange(event) {
    const inputValue = event.target.value;
    setValue(inputValue);
  }

  return (
    <Label>
      <HiddenRadio name="products" value={id} label={name} />
      <ProductBox disabled={disabled}>
        <RadioWrapper>
          <Radio />

          <PriceTag>{price}</PriceTag>
        </RadioWrapper>

        <UnitWrapper>
          <Units>{units}</Units>
        </UnitWrapper>

        <p>{description}</p>
        <MobileUnitWrapper>
          <Units>{units}</Units>
        </MobileUnitWrapper>
        <Divider />
        <Row>
          <span>Enter your pledge</span>
          <InnerRow>
            <InputWrapper>
              <label htmlFor="pledge">$</label>
              <Input
                type="text"
                id="pledge"
                name="pledge"
                onChange={handleInputChange}
                value={value}
                placeholder={defaultPledge}
              />
            </InputWrapper>
            <PrimaryButton onClick={openThankYou} modifiers="small">
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

  p:only-of-type {
    padding-left: 40px;

    @media only screen and (max-width: 768px) {
      padding-left: 0px;
    }
  }

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
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const RadioWrapper = styled.div`
  display: inline-flex;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const PriceTag = styled.span`
  display: contents;
  color: ${primary[100]};
  font-size: ${typeScale.copyrightText};
  margin: 0 20px;
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
