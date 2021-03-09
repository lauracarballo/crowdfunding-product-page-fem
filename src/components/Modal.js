import ReactDOM from "react-dom";
import axios from "axios";
import { mutate } from "swr";
import { FocusScope } from "@react-aria/focus";
import SelectProductBox from "./SelectionBox";
import styled from "styled-components";

export default function Modal({ products, isOpen, closeModal }) {
  function updateCount(event) {
    event.preventDefault();

    const checkedRadio = Array.from(event.target.products).find(
      (element) => element.checked
    );

    if (!checkedRadio) {
      return;
    }

    const productId = checkedRadio.value;
    const pledge = checkedRadio.nextElementSibling.querySelector("input").value;

    axios
      .post("http://localhost:5000/projects", {
        product: +productId,
        pledge: +pledge,
      })
      .then(function (response) {
        closeModal();
        mutate("http://localhost:5000/projects");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
              <form onSubmit={updateCount}>
                {products.map((product, index) => {
                  return (
                    <SelectProductBox
                      key={index}
                      id={product.id}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      units={product.units}
                      defaultPledge={product.minPledge}
                      updateCount={updateCount}
                    />
                  );
                })}
              </form>
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
