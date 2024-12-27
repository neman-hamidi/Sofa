import "./livingRoom.css";

import LivingRoomitem from "./livingRoomitem/livingRoomitem"
export default function livingRoom() {
  return (
    <div>
      <p className="text-center fs-2">
        <span className="text-secondary">You are in </span>
        <span className="underline-span">Living Room</span>
      </p>
      <div className="div-livingRoom">
        <LivingRoomitem title="Axis 2-Piece Sectional Sofa" price="$339.99" img1="/images/m2_p04_1-768x768.jpeg" img2="/images/m2_p04_2-700x700.jpeg"/>
        <LivingRoomitem title="Wells Renew Vegan Leather Chair" price="$299.99" img1="/images/m2_p01_2-700x700.jpeg" img2="/images/m2_p01_1-768x768.jpeg"/>
        <LivingRoomitem title="Gather Sofa" price="$139.99X" sale="sale" discount="$339.99X" img1="/images/m2_p02_1-768x768.jpeg" img2="/images/m2_p02_2-700x700.jpeg"/>
        <LivingRoomitem title="Muirfield Sculptural Metal Accent Chair" price="$299.99" img1="/images/m2_p03_2-700x700.jpeg" img2="/images/m2_p03_1-768x768.jpeg"/>
        <LivingRoomitem title="Polly Sand Brown Accent Chair" price="$439.99" img1="/images/m2_p05_2-700x700.jpeg" img2="/images/m2_p05_1-768x768.jpeg"/>
        <LivingRoomitem title="Axis 2-Seat Sofa" price="$239.99" img1="/images/m2_p04_1-768x768.jpeg" img2="/images/m2_p04_2-700x700.jpeg"/>
        <LivingRoomitem title="Lounge Deep Chaise Lounge" price="$299.99" img1="/images/m2_p08_2-700x700.jpeg" img2="/images/m2_p08_1-768x768.jpeg"/>
        <LivingRoomitem title="Medoc Swivel Chair" price="$299.99" img1="/images/m2_p06_2-700x700.jpeg" img2="/images/m2_p07_1-768x768.jpeg"/>
      </div>
      <div className="text-center my-4">
      <button type="button" className="btn btn-outline-info">Shop All Products</button>

      </div>
    </div>
  );
}
