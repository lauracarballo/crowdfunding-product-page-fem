import ReactDOM from "react-dom";
import { FocusScope } from "@react-aria/focus";
import styled from "styled-components";
import { PrimaryButton } from "./Buttons";

export default function ThankYouModal({ isCompleted, closeThankYouModal }) {
  return isCompleted
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
              <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
                  <path
                    stroke="#FFF"
                    stroke-width="5"
                    d="M20 31.86L28.093 40 44 24"
                  />
                </g>
              </svg>
              <h3>Thanks for your support!</h3>
              <p>
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.{" "}
              </p>
              <PrimaryButton modifier="small" onClick={closeThankYouModal}>
                Got it!
              </PrimaryButton>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -150px;
  z-index: 999;
  background-color: #fff;
  width: 515px;
  border-radius: 10px;
  padding: 20px 40px;
  text-align: center;
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
