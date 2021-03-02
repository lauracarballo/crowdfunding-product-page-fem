import ReactDOM from "react-dom";
import { FocusScope } from "@react-aria/focus";
import { useState } from "react";
import styled from "styled-components";
import Radio from "./Radio";

export default function Modal({ isOpen, closeModal }) {
  return isOpen
    ? ReactDOM.createPortal(
        <FocusScope contain restoreFocus autoFocus>
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
              <SelectProductBox
                name="Bamboo Stand"
                description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list"
              />
              <SelectProductBox
                name="Black Edition Stand"
                description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              />
              <SelectProductBox
                disabled
                name="Mahogany Special Edition"
                description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              />
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
  width: 665px;
  border-radius: 10px;
  padding: 40px;
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

export function SelectProductBox({ name, description, disabled }) {
  const [isSelected, setIsSelected] = useState(false);
  //   const ref = useRef();

  //   const {isChecked, onChange} = useRadio("products", ref);

  function handleChange(event) {
    setIsSelected(true);
    console.log(event.target.name);
  }
  return (
    <ProductBox disabled={disabled}>
      <label>
        <Radio
          //   ref={ref}
          name="products"
          checked={isSelected}
          onChange={handleChange}
          value={name}
        />
        <Tag>{name}</Tag>
      </label>
      <p>{description}</p>
    </ProductBox>
  );
}

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
`;

const Tag = styled.span`
  margin-left: 20px;
  font-weight: 700;
`;
