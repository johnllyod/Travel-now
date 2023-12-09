import { Container } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutInner">
        <Container>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            molestias tempora sequi non, nemo quod reprehenderit molestiae
            natus. Voluptatum, voluptate natus. Necessitatibus vero rerum quam,
            velit vitae reprehenderit. Minus, minima!
          </p>
        </Container>
      </div>
      <img src="./src/assets/Airplane.jpg" alt="Airplane" />
    </div>
  );
};

export default About;
