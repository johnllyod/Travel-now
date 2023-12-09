import { useLocation } from "react-router-dom";
import "./country.css";
import { Container } from "react-bootstrap";

interface props {
  countryInfo: {
    country: string;
    touristAttraction: string[];
    imageLink: string;
  }[];
}

const Country = ({ countryInfo }: props) => {
  const location = useLocation();
  const { from } = location.state;

  const countrySelected = countryInfo.find((obj) => {
    return obj.country === from;
  });

  return (
    <>
      <div
        className="countryHeader"
        style={{ backgroundImage: `url(${countrySelected?.imageLink})` }}
      >
        <h1>{countrySelected?.country}</h1>
        {/* <img
          src={countrySelected?.imageLink}
          alt={countrySelected?.country}
          className=""
        /> */}
      </div>
      <div className="countryInfo">
        <Container>
          <h3>Tourist attractions</h3>
          {countrySelected?.touristAttraction.map((item, index) => (
            <p>{index + 1 + ". " + item}</p>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Country;
