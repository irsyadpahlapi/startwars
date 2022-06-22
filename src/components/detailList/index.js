import React from "react";
import AnimatedText from "react-animated-text-content";
import { Container, Card } from "./style";
const props = {
  type: "chars",
  animationType: "diagonal",
  interval: 0.1,
  duration: 1,
  tag: "p",
  className: "animated-paragraph",
  includeWhiteSpaces: true,
  threshold: 0.1,
  rootMargin: "20%",
};
const animation = {
  x: "200px",
  y: "-20px",
  scale: 1.1,
  ease: "ease-in-out",
};
const DetailList = ({ data }) => {
  return (
    <Container>
      <Card>
        <div style={{ display: "flex" }}>
          <div className="title">Name </div>
          <AnimatedText {...props} animation={animation}>
            {data.name}
          </AnimatedText>
        </div>

        <div style={{ display: "flex" }}>
          <div className="title">Kelamin </div>
          <AnimatedText {...props} animation={animation}>
            {data.gender}
          </AnimatedText>
        </div>

        <div style={{ display: "flex" }}>
          <div className="title">Warna Mata </div>
          <AnimatedText {...props} animation={animation}>
            {data.eye_color}
          </AnimatedText>
        </div>

        <div style={{ display: "flex" }}>
          <div className="title">Warna Rambut </div>
          <AnimatedText {...props} animation={animation}>
            {data.hair_color}
          </AnimatedText>
        </div>

        <div style={{ display: "flex" }}>
          <div className="title"> </div>
          <AnimatedText {...props} animation={animation}>
            {data.skin_color}
          </AnimatedText>
        </div>

        <div style={{ display: "flex" }}>
          <div className="title">Tinggi </div>
          <AnimatedText {...props} animation={animation}>
            {data.height}
          </AnimatedText>
        </div>

        <div style={{ display: "flex" }}>
          <div className="title">Berat </div>
          <AnimatedText {...props} animation={animation}>
            {data.mass}
          </AnimatedText>
        </div>
      </Card>
    </Container>
  );
};

export default DetailList;
