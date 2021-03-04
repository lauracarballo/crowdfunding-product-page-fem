import styled from "styled-components";

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
  position: fixed;
  top: 3%;
  right: 2rem;
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
        Home
      </MobileLink>
      <MobileLink onClick={() => setOpen(!open)} href="/">
        Projects
      </MobileLink>
      <MobileLink onClick={() => setOpen(!open)} href="/">
        Contact
      </MobileLink>
    </Menu>
  );
}

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 2rem;
  position: fixed;
  background-color: #810000;
  top: 0;
  right: 0;
  z-index: 9;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.open ? "translateX(0%)" : "translateX(100%)")};
`;

const MobileLink = styled.a`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-decoration: none;
  transition: color 0.3s linear;
  color: #fff;
`;
