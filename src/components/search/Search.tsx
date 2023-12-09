import { Link, useLocation } from "react-router-dom";
import "./search.css";
import { Card } from "react-bootstrap";

interface props {
  countryInfo: {
    country: string;
    touristAttraction: string[];
    imageLink: string;
  }[];
}

const Search = ({ countryInfo }: props) => {
  const location = useLocation();
  var resultCount = 0;

  return (
    <>
      <div className="container searchFrame">
        <h1>Search result</h1>
        {countryInfo.map((item, index) => {
          if (
            item.country.toLowerCase() == location.state.searchval.toLowerCase()
          ) {
            resultCount++;
            return (
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
                        Go somewhere
                      </Link>
                    </Card.Body>
                  </pre>
                </Card>
              </div>
            );
          }
          if (
            resultCount == 0 &&
            index >= Object.keys(countryInfo).length - 1
          ) {
            return (
              <h4 key={index}>No result for "{location.state.searchval}"</h4>
            );
          }
        })}
      </div>
    </>
  );
};

export default Search;
