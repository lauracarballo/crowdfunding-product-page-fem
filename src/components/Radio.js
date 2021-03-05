import styled from "styled-components";
import { hideVisually } from "polished";
import { primary } from "../utils";

export default function Radio({ label, checked, id, ...props }) {
  return (
    <RadioContainer>
      <HiddenRadio id={id} checked={checked} {...props} />
      <StyledRadio checked={checked}>
        <Icon viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" />
        </Icon>
      </StyledRadio>
      <Label>{label}</Label>
    </RadioContainer>
  );
}

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  ${hideVisually()}
`;

const Icon = styled.svg`
  fill: ${primary[100]};
  stroke: white;
`;

const StyledRadio = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 1px solid hsl(0deg 6% 92% / 85%);
  border-radius: 12px;
  transition: all 150ms;
  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const RadioContainer = styled.div`
  display: inline-flex;
  vertical-align: text-top;
`;

const Label = styled.span`
  margin: 0 15px;
  font-weight: 700;

  &:hover {
    color: ${primary[100]};
    cursor: pointer;
  }
`;
