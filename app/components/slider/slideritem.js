import { Button } from "react-bootstrap";
import "./slideritem.css";
export default function slideritem({ img, text }) {
  return (
    <>
      <div className="slideritem">
        <img src={img} alt="" />
        <div>
          <p className="text-secondary fs-6 p-1">Classic Comfort</p>
          <p className="fw-bold fs-3 p-2 w-75 mx-auto ">{text}</p>
        </div>
        <div className="text-center">
          <Button variant="warning btn-1">...More</Button>
        </div>
      </div>
    </>
  );
}
