import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.copyrightText};
    padding: 15px 20px;
    min-width: 100px;
  `,
  large: () => `
    padding: 20px 35px;
  `,
};

const Button = styled.button`
  padding: 15px 25px;
  font-size: ${typeScale.helperText};
  font-weight: 700;
  min-width: 150px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  transition: all 0.5s;
  border-radius: 30px;

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

  &:disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme.textColorOnSecondary};
    color: ${(props) => props.theme.textColorOnPrimary};
    border: none;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryButton};
  color: ${(props) => props.theme.textColorOnPrimary};
  border: none;
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.secondaryButton};
  color: ${(props) => props.theme.textColorOnSecondary};
  padding: 0px 20px 0px 0px;
  border: none;
  color: ${(props) => props.theme.primaryColor};

  &:hover {
    background-color: inherit;
    color: inherit;
  }
`;
