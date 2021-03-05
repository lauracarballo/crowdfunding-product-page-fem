import { useState } from "react";
import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "./Buttons";

export default function Intro({ title, subtitle, openModal }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <Container>
      <Logo>
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <circle fill="#000" cx="28" cy="28" r="28" />
            <g fill-rule="nonzero">
              <path
                d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
                fill="#444"
              />
              <path
                d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
                fill="#FFF"
              />
            </g>
          </g>
        </svg>
      </Logo>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <ButtonWrapper>
        <PrimaryButton modifiers="large" onClick={openModal}>
          Back this Project
        </PrimaryButton>
        <SecondaryButton onClick={() => setIsBookmarked(!isBookmarked)}>
          {isBookmarked ? (
            <Row>
              <svg width="65" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="hsl(176, 50%, 47%)" cx="28" cy="28" r="28" />
                  <path fill="#fff" d="M23 19v18l5-5.058L33 37V19z" />
                </g>
              </svg>
              <Bookmark isBookmarked={isBookmarked}>Bookmarked</Bookmark>
            </Row>
          ) : (
            <Row>
              <svg width="65" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                  <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                </g>
              </svg>
              <Bookmark>Bookmark</Bookmark>
            </Row>
          )}
        </SecondaryButton>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 665px;
  background-color: #fff;
  border: 1px solid hsl(0deg 6% 92% / 85%);
  border-radius: 10px;
  box-shadow: 15px 15px 65px #fff;
  text-align: center;
  padding: 44px;

  @media only screen and (max-width: 768px) {
    width: 310px;
    padding: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Bookmark = styled.div`
  color: ${(props) =>
    props.isBookmarked ? `${props.theme.primaryHoverColor}` : "#000"};

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  position: absolute;
  top: -30px;
  left: 47%;

  @media only screen and (max-width: 768px) {
    left: 41%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
`;
