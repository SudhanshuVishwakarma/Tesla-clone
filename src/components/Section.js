import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

function Section({
  title,
  description,
  leftbtnText,
  rightbtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Button>
        <ButtonGroup>
          <Fade bottom cascade>
            <LeftButton>{leftbtnText}</LeftButton>
          </Fade>
          <Fade bottom cascade>
            {rightbtnText && <RightButton>{rightbtnText}</RightButton>}
          </Fade>
        </ButtonGroup>
        <DownArrow src="https://img.icons8.com/ios/64/ffffff/expand-arrow--v2.png"></DownArrow>
      </Button>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://i.ibb.co/dpXKFFW/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical
  align-items: center; //horizontal
  background-image: ${(props) => `url("${props.bgImage}")`};
  scroll-snap-align: start;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: none;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Button = styled.div``;
