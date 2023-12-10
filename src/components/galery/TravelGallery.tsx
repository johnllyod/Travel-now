import { Card, Container } from "react-bootstrap";
import "./gallery.css";
import { Link } from "react-router-dom";

interface props {
  countryInfo: {
    country: string;
    touristAttraction: string[];
    imageLink: string;
  }[];
}

const TravelGallery = ({ countryInfo }: props) => {
  return (
    <Container className="row travelGallery m-auto">
      <h1>Travel Gallery</h1>
      {countryInfo.map((item, index) => (
        <div key={index} className="cardFrame col-sm-6">
          <Card className="mb-4">
            <Card.Img variant="top" src={item.imageLink} />
            <pre>
              <Card.Body>
                <Card.Title>{item.country}</Card.Title>
                <Card.Text>
                  Tourist spots: {item.touristAttraction[0]}
                </Card.Text>
                <Link
                  className="btn"
                  to={`/Country`}
                  state={{ from: item.country }}
                >
                  More
                </Link>
              </Card.Body>
            </pre>
          </Card>
        </div>
      ))}
    </Container>
  );
};

export default TravelGallery;
