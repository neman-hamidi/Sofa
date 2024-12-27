import Slideritem from "./slideritem";
import Carousel from "react-bootstrap/Carousel";
export default function slider() {
  return (
    <div className="mt-5">
      <Carousel>
        <Carousel.Item interval={1000}>
          <Slideritem
            img="/images/m2_slider_03.jpeg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, impedit
      dicta! Ex molestiae ea similique facilis, commodi est inventore aliquam
      quisquam repudiandae nobis laboriosam! Ab reiciendis atque earum optio
      corporis?"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Slideritem img="/images/m2_slider_02.jpeg" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, impedit
      dicta! Ex molestiae ea similique facilis, commodi est inventore aliquam
      quisquam repudiandae nobis laboriosam! Ab reiciendis atque earum optio
      corporis?" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Slideritem img="/images/m2_slider_011.jpeg" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, impedit
      dicta! Ex molestiae ea similique facilis, commodi est inventore aliquam
      quisquam repudiandae nobis laboriosam! Ab reiciendis atque earum optio
      corporis?" />
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
}
