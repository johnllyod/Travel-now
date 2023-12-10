import "./home.css";
import HomeCarousel from "../carousel/HomeCarousel";
import TravelGallery from "../galery/TravelGallery";
import { useEffect } from "react";

interface props {
  countryInfo: {
    country: string;
    touristAttraction: string[];
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
