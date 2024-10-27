import { Container } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutInner">
        <Container>
          <h1>About</h1>
          <p>
            Welcome to Travel Now, your ultimate gateway to discovering the
            world’s most breathtaking destinations. Whether you’re a seasoned
            traveler or planning your first adventure, our site offers a curated
            selection of must-visit tourist spots, from iconic landmarks to
            off-the-beaten-path treasures.
          </p>
        </Container>
      </div>
      {/* <img src="./src/assets/Airplane.jpg" alt="Airplane" /> */}
    </div>
  );
};

export default About;
