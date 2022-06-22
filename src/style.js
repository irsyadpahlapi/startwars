import styled, { keyframes } from "styled-components";

function show() {
  return keyframes`
    0% {opacity: 0;}
    25% {opacity: 0.25;}
    50% {opacity: 0.5;}
    75% {opacity: 0.75;}
    100% {opacity: 1;}
  `;
}

function showDescription() {
  return keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
  `;
}
const Container = styled.div`
  padding: 10px 20px;
`;

const Words = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Welcome = styled.div`
  font-family: Fantasy;
  font-size: 40px;
  opacity: 1;
  animation-name: ${show()};
  animation-duration: 1s;
  margin-right: 10px;
  font-weight: 700;
`;

const Description = styled.div`
  background-color: black;
  color: white;
  padding: 0 10px;
  font-family: Fantasy;
  font-size: 20px;
  margin-top: 8px;
  opacity: 1;
  animation-name: ${showDescription()};
  animation-duration: 3s;
`;

export { Container, Words, Welcome, Description };
