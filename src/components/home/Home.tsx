import "./home.css";
import HomeCarousel from "../carousel/HomeCarousel";
import TravelGallery from "../galery/TravelGallery";

interface props {
  countryInfo: {
    country: string;
    touristAttraction: string[];
    imageLink: string;
  }[];
}

const Home = ({ countryInfo }: props) => {
  return (
    <div className="mb-5">
      <HomeCarousel />
      <TravelGallery countryInfo={countryInfo}></TravelGallery>
    </div>
  );
};

export default Home;
