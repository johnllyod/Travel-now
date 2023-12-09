interface Props {
  text: string;
}

const CarouselImage = ({ text }: Props) => {
  return <img className="carouelImg" src={text} alt="img" />;
};

export default CarouselImage;
