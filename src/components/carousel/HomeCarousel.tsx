import "./carousel.css";
import { useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
import { useNavigate } from "react-router-dom";

const HomeCarousel = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function handleSearch() {
    if (inputRef.current?.value) {
      navigate("/Search", { state: { searchval: inputRef.current.value } });
    }
  }

  return (
    <div className="position-relative">
      <Carousel>
        <Carousel.Item interval={5000}>
          <CarouselImage text="./src/assets/Paris.jpg" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <CarouselImage text="./src/assets/Vaitape.jpg" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <CarouselImage text="./src/assets/Glacier National Park.jpg" />
        </Carousel.Item>
      </Carousel>
      <div className="input-group w-50 position-absolute top-50 start-50 translate-middle">
        <input
          ref={inputRef}
          id="searchval"
          name="searchVal"
          className="form-control"
          type="text"
          placeholder="Search..."
        ></input>
        <button className="btn" onClick={handleSearch}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
