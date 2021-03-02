import styled from "styled-components";
import ProductBox from "./ProductBox";
import { products } from "./Products";

export default function Info({ children }) {
  return (
    <Container>
      <h2>About this project</h2>
      <div>{children}</div>

      {products.map((product) => {
        return (
          <ProductBox
            name={product.name}
            price={product.price}
            description={product.description}
            units={product.units}
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
`;
