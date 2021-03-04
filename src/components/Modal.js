import ReactDOM from "react-dom";
import { FocusScope } from "@react-aria/focus";
import { useState } from "react";
import styled from "styled-components";
import { typeScale, primary } from "../utils";
import Radio from "./Radio";
import { products } from "./Products";
import { PrimaryButton } from "./Buttons";

export default function Modal({ isOpen, closeModal, openThankYou }) {
  return isOpen
    ? ReactDOM.createPortal(
        <FocusScope contain autoFocus>
          <ModalWrapper>
            <Container
              role="dialog"
              aria-modal="true"
              aria-labelledby="ProductsList"
              aria-describedby="Choose the product you want to support"
              tab-index={-1}
            >
              <CloseModalButtonWrapper>
                <CloseModalButton onClick={closeModal}>x</CloseModalButton>
              </CloseModalButtonWrapper>
              <h3>Back this project</h3>
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
          </ModalWrapper>
        </FocusScope>,
        document.body
      )
    : null;
}

const ModalWrapper = styled.aside`
  display: grid;
  place-items: center;
  width: 100%;
  margin: 0 auto;
`;

const Container = styled.div`
  position: relative;
  top: -200px;
  z-index: 999;
  background-color: #fff;
  width: 700px;
  border-radius: 10px;
  padding: 20px 40px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: #000;
  opacity: 0.75;
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

// const useRadio = (name, ref) => {

//     {
//         "products": [{
//             refRadio1: false,
//             refRadio2: false,
//             refRadio3: true,
//         }]
//     }

//     return products[ref]
// }

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
  const [pledge, setPledge] = useState();
  const [isSelected, setIsSelected] = useState(false);

  //   const ref = useRef();

  //   const {isChecked, onChange} = useRadio("products", ref);

  function handleChange(event) {
    setIsSelected(true);
  }

  function handleInputChange(event) {
    setPledge(event.target.value);
  }

  return isSelected ? (
    <ProductBox isSelected={isSelected} disabled={disabled}>
      <Label>
        <div>
          <Radio
            //   ref={ref}
            name="products"
            checked={isSelected}
            onChange={onSelect}
            value={id}
          />
          <Tag>{name}</Tag>

          <Price>{price}</Price>
        </div>
        <div>
          <Units>{units}</Units>
        </div>
      </Label>
      <p>{description}</p>
      <hr />
      <Row>
        <span>Enter your pledge</span>
        <Row>
          <InputWrapper>
            <label htmlFor="pledge">$</label>
            <Input
              type="text"
              id="pledge"
              name="pledge"
              onChange={handleInputChange}
              value={pledge}
              placeholder={defaultPledge}
            />
          </InputWrapper>
          <PrimaryButton onClick={openThankYou} modifiers="small">
            Continue
          </PrimaryButton>
        </Row>
      </Row>
    </ProductBox>
  ) : (
    <ProductBox isSelected={isSelected} disabled={disabled}>
      <Label>
        <div>
          <Radio
            //   ref={ref}
            name="products"
            checked={isSelected}
            onChange={handleChange}
            value={name}
          />
          <Tag>{name}</Tag>

          <Price>{price}</Price>
        </div>
        <div>
          <Units>{units}</Units>
        </div>
      </Label>
      <p>{description}</p>
    </ProductBox>
  );
}

const ProductBox = styled.div`
  position: relative;
  margin: 20px 0px;
  background-color: #fff;
  border: ${(props) =>
    props.isSelected
      ? `2px solid ${primary[100]}`
      : "1px solid hsl(0deg 6% 92% / 85%)"};
  border-radius: 10px;
  box-shadow: 15px 15px 65px #fff;
  text-align: left;
  padding: 20px;

  p:only-of-type {
    padding-left: 40px;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const Tag = styled.span`
  margin-left: 20px;
  font-weight: 700;
`;

const Price = styled.span`
  color: ${primary[100]};
  font-size: ${typeScale.copyrightText};
  margin: 0 20px;
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
