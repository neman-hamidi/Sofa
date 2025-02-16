import items from "./Text";
import LivingRoomitem from "./livingRoomitem/livingRoomitem";
import "./livingRoom.css";
export default function livingRoom() {
  return (
    <div>
      <p className="text-center fs-2">
        <span className="text-secondary">You are in </span>
        <span className="underline-span">Living Room</span>
      </p>
      <div className="div-livingRoom">
        {items.map((item, index) => (
          <LivingRoomitem key={index} {...item} />
        ))}
      </div>
      <div className="text-center my-4">
        <button type="button" className="btn btn-outline-info">
          Shop All Products
        </button>
      </div>
    </div>
  );
}
