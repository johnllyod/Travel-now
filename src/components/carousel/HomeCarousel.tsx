import "./carousel.css";
import { useRef } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CarouselImage from "./CarouselImage";

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
          <CarouselImage text="/Travel-now/images/Paris.jpg" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <CarouselImage text="/Travel-now/images/Vaitape.jpg" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <CarouselImage text="/Travel-now/images/Glacier_National_Park.jpg" />
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
