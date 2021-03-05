import styled from "styled-components";
import { typeScale } from "../utils";

export default function Burger({ isNavOpen, setIsNavOpen }) {
  return (
    <MobileButton
      isNavOpen={isNavOpen}
      onClick={() => setIsNavOpen(!isNavOpen)}
    >
      {isNavOpen ? (
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
            <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
          </g>
        </svg>
      ) : (
        <>
          <ButtonStyling />
          <ButtonStyling />
          <ButtonStyling />
        </>
      )}
    </MobileButton>
  );
}

const MobileButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.25rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  z-index: 999;

  &:focus {
    outline: none;
  }
`;

const ButtonStyling = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: ${(props) => (props.isNavOpen ? "#000" : "#fff")};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 0.5px;
`;

export function MenuBar({ isNavOpen, setIsNavOpen }) {
  return (
    <>
      <Menu isNavOpen={isNavOpen}>
        <MobileLink onClick={() => setIsNavOpen(!isNavOpen)} href="/">
          About
        </MobileLink>
        <Divider />
        <MobileLink onClick={() => setIsNavOpen(!isNavOpen)} href="/">
          Discover
        </MobileLink>
        <Divider />
        <MobileLink onClick={() => setIsNavOpen(!isNavOpen)} href="/">
          Get Started
        </MobileLink>
      </Menu>
      {isNavOpen ? <ModalOverlay /> : null}
    </>
  );
}

const Menu = styled.div`
  height: fit-content;
  width: 90%;
  text-align: left;
  padding: 1rem;
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  top: 60px;
  right: 15px;
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isNavOpen ? "translateY(0%)" : "translateY(-150%)"};
`;

const MobileLink = styled.a`
  display: block;
  padding: 1rem;
  font-weight: 500;
  font-size: ${typeScale.header1};
  text-decoration: none;
  transition: color 0.3s linear;
  color: #fff;
`;

const Divider = styled.hr`
  width: 109%;
  margin-left: -16px;
  background-color: hsl(0deg 6% 92% / 85%);
  color: hsl(0deg 6% 92% / 85%);
  height: 1px;
  border: 1px;
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
