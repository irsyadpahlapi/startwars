import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
  height: 100%;

  .title {
    width: 150px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

const Card = styled.div`
  background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
  box-shadow: 0px 20px 100px #555;
  left: 85%;
  z-index: 0;
  height: 80%;
  padding: 20px;
  color: white;
`;

export { Container, Card };
