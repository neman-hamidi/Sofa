import { Button } from "react-bootstrap";
import "./slideritem.css";
const slideritem = ({ img, text }) => (
  <div className="slideritem">
    <img src={img} alt="imgs" />
    <div>
      <h3 className="text-secondary fs-6 p-1">Classic Comfort</h3>
      <p className="fw-bold fs-3 p-2 w-75 mx-auto ">{text}</p>
    </div>
    <div className="text-center">
      <Button variant="warning btn-1">...More</Button>
    </div>
  </div>
);
export default slideritem;
