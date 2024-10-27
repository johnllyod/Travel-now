import "./home.css";
import HomeCarousel from "../carousel/HomeCarousel";
import TravelGallery from "../galery/TravelGallery";
import { useEffect } from "react";

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

const Home = ({ countryInfo }: props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mb-5">
      <HomeCarousel />
      <TravelGallery countryInfo={countryInfo}></TravelGallery>
    </div>
  );
};

export default Home;
