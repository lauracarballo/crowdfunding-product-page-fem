import styled from "styled-components";
import { typeScale } from "../utils";

export default function Burger({ open, setOpen }) {
  return (
    <MobileButton open={open} onClick={() => setOpen(!open)}>
      <ButtonStyling open={open} />
      <ButtonStyling open={open} />
      <ButtonStyling open={open} />
    </MobileButton>
  );
}

const MobileButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: ${(props) => (props.open ? "#fff" : "transparent")};
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
`;

const ButtonStyling = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: ${(props) => (props.open ? "#000" : "#fff")};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 0.5px;

  &:first-child {
    transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
  }

  &:nth-child(2) {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) =>
      props.open ? "translateX(20px)" : "translateX(0)"};
  }

  &:nth-child(3) {
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

export function MenuBar({ open, setOpen }) {
  return (
    <Menu open={open}>
      <MobileLink onClick={() => setOpen(!open)} href="/">
        About
      </MobileLink>
      <Divider />
      <MobileLink onClick={() => setOpen(!open)} href="/">
        Discover
      </MobileLink>
      <Divider />
      <MobileLink onClick={() => setOpen(!open)} href="/">
        Get Started
      </MobileLink>
    </Menu>
  );
}

const Menu = styled.div`
  height: fit-content;
  width: 90%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  top: 60px;
  right: 15px;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.open ? "translateX(0%)" : "translateX(100%)")};
`;

const MobileLink = styled.a`
  display: block;
  font-weight: 700;
  font-size: ${typeScale.header1};
  text-decoration: none;
  transition: color 0.3s linear;
  color: #fff;
`;

const Divider = styled.hr`
  width: 123%;
  margin-left: -31px;
  background-color: hsl(0deg 6% 92% / 85%);
  color: hsl(0deg 6% 92% / 85%);
  height: 1px;
  border: 1px;
`;
