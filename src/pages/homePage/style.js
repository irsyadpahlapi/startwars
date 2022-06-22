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
const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto");
  font-family: "Raleway", sans-serif;
  width: 100%;
  animation-name: ${show()};
  animation-duration: 2s;
  .react-card-flipper {
    height: calc(100vh - 40px) !important;
  }
`;

const PageOne = styled.div`
  box-shadow: 0 0 50px #ccc;
  border-radius: 20px;
  height: 100%;
`;

const PageTwo = styled.div`
  box-shadow: 0 0 50px #ccc;
  border-radius: 20px;
  height: 100%;
`;

export { Container, PageOne, PageTwo };
