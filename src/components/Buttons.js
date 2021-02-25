import styled from "styled-components";
import { typeScale } from "../utils";

const Button = styled.button`
  padding: 15px 30px;
  font-size: ${typeScale.helperText};
  font-weight: 700;
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  transition: all 0.5s;
  border-radius: 25px;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
    border: 2px solid transparent;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryButton};
  color: ${(props) => props.theme.textColorOnPrimary};
  border: none;
`;

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.secondaryButton};
  border: none;
  color: ${(props) => props.theme.primaryColor};
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: 2px solid transparent;
  color: ${(props) => props.theme.primaryColor};
`;
