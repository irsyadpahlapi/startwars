import styled from "styled-components";

const Container = styled.div`
  .wrapper {
    position: absolute;
    top: 15%;
    left: 40%;
    width: 300px;
    height: 500px;
    perspective: 900px;
  }

  .container {
    position: absolute;
    top: 0%;
    width: 70%;
    height: 70%;
    transition: .5s all ease;
    transform: rotateX(60deg) scale(0.7);
    perspective: 900px;
    box-shadow: 0px 20px 50px #555;
    animation: entry 1s linear 1;
  }

  #c0 {
    position: absolute;
    top: 0%;
    width: 70%;
    height: 70%;
    background: linear-gradient(to bottom, #eba65b 30%, #d99267 100%);
    z-index: 300;
    box-shadow: 0px 20px 100px #555;
  }

  #c1 {
    background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
    box-shadow: 0px 20px 100px #555;
    left: 85%;
    z-index: 0;
  }

  #c2 {
    left: -85%;
    z-index: 0;
    background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
    box-shadow: 0px 20px 100px #555;
  }

  .container:hover {
    cursor: pointer;
    transform: rotate(0deg) scale(1) translateY(10px);
    transition: .5s all ease;
    z-index: 400;
  }

  .image {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 45%;
    background: linear-gradient(to top, #eba65b 30%, #d99267 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #i1 {
    background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
  }

  #i2 {
    background: linear-gradient(to bottom, #59476f 30%, #7b88d1 100%);
  }

  span {
    position: absolute;
    top: 0%;
    left: 55%;
    border-radius: 100%;
    background-color: #fff;
    z-index: 10;
  }

  .story {
    position: absolute;
    top: 45%;
    left: 0%;
    height: 55%;
    width: 100%;
    background: linear-gradient(to bottom, #eba65b 0%, #d99267 40%);
    z-index: 30;
  }

  #s1 {
    background: linear-gradient(to top, #5b62a2 0%, #7b88d1 100%);
  }

  #s2 {
    background: linear-gradient(to top, #5b62a2 0%, #7b88d1 120%);
  }

  .info {
    position: absolute;
    top: 10%;
  }

  span {
    text-align: center;
    text-shadow: 0px 0px 10px #eee;
    color: #eee;
    letter-spacing: 2px;
  }

  h3 {
    text-align: center;
    text-shadow: 0px 0px 10px #eee;
    color: #eee;
    letter-spacing: 2px;
  }

  @keyframes simple {
    50% {
      transform: translateX(10px);
      opacity: 0.5;
    }
    100% {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes simple1 {
    50% {
      transform: translateX(-10px);
      opacity: 0.5;
    }
    100% {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes entry {
    0% {
      top: -20%;
      opacity: 0.1;
    }
    100% {
      top: 0%;
    }
  }
    }
  `;

const Initial = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #eee;
  text-shadow: 0px 0px 10px #eee;
  color: #eee;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
`;

const Box = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
  div:nth-child(1) {
    font-size: 11px;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
  }
  div:nth-child(2) {
    color: white;
  }
`;

const Next = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  font-family: MyRobot;
`;

const Prev = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  cursor: pointer;
  font-family: MyRobot;
`;

const Title = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto");
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  font-family: "Raleway", sans-serif;
  font-size: 35px;
  font-weight: 400;
  text-align: center;
`;

const Loading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Container, Initial, Box, Next, Prev, Title, Loading };
