import styled from "styled-components";
import ProductBox from "./ProductBox";
import { products } from "./Products";

export default function Info({ openModal }) {
  return (
    <Container>
      <h2>About this project</h2>
      <div>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </div>

      {products.map((product) => {
        return (
          <ProductBox
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            units={product.units}
            openModal={openModal}
          />
        );
      })}
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
    width: 310px;
    padding: 20px;
  }
`;
