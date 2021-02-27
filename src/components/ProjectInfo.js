import styled from "styled-components";
import ProductBox from "./ProductBox";

export default function Info({ children }) {
  return (
    <Container>
      <h2>About this project</h2>
      <div>{children}</div>
      <ProductBox
        name="Bamboo Stand"
        price="Pledge $25 or more"
        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
        units="101"
      />
      <ProductBox
        name="Black Edition Stand"
        price="Pledge $75 or more"
        description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        units="64"
      />
      <ProductBox
        name="Mahogany Special Edition "
        price="Pledge $200 or more"
        description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        units="0"
      />
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
