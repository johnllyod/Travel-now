import { useLocation } from "react-router-dom";
import "./country.css";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

interface attractionDetails {
  name: string;
  image: string;
  details: string;
  location: string;
  map: string;
}

interface props {
  countryInfo: {
    country: string;
    touristAttraction: attractionDetails[];
    imageLink: string;
  }[];
}

const Country = ({ countryInfo }: props) => {
  const location = useLocation();
  const { from } = location.state;

  const countrySelected = countryInfo.find((obj) => {
    return obj.country === from;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <div className="attractionContainer">
            {countrySelected?.touristAttraction.map((item) => (
              <div className="attractionDetails">
                <img src={item.image} alt={item.name} />
                <div>
                  <h2>{item.name}</h2>
                  <p>
                    <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                    {item.location}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCircleInfo} className="me-2" />
                    {item.details}
                  </p>
                  <iframe
                    src={item.map}
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    width="100%"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Country;
