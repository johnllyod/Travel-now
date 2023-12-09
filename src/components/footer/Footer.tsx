import "./footer.css";
import Card from "react-bootstrap/esm/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faFacebook);

const Footer = () => {
  return (
    <Card className="text-center footer">
      <Card.Header>Travel guide</Card.Header>
      <Card.Body>
        <Card.Title>Social media sites</Card.Title>
        <Card.Text>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon className="ms-3" icon={faTwitter} />
          <FontAwesomeIcon className="ms-3" icon={faInstagram} />
        </Card.Text>
        <Card.Title>Email</Card.Title>
        <Card.Text>sampleemail@site.com</Card.Text>
        <Card.Title>Address</Card.Title>
        <Card.Text>Company address</Card.Text>
      </Card.Body>
      <Card.Footer>For educationial porposes only.</Card.Footer>
    </Card>
  );
};

export default Footer;
