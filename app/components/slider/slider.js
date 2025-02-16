import Slideritem from "./slideritem";
import Carousel from "react-bootstrap/Carousel";
import slides from "./Text";
export default function slider() {
  return (
    <div className="mt-5">
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index} interval={1000}>
            <Slideritem {...slide} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
