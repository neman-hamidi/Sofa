import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Diversity3TwoToneIcon from "@mui/icons-material/Diversity3TwoTone";
import "./livingRoomitem.css";
export default function livingRoomitem({
  title,
  price,
  img1,
  img2,
  discount,
  sale,
}) {
  return (
    <section className="livingRoomitem">
      <div className="div-imgs mb-4">
        <img src={img1} alt="imgs" className="img-1" />
        <img src={img2} alt="imgs" className="img-2" />
        <div className="image-plus">
          <div className="icons-product">
            <div className="options-product">
              <FavoriteBorderOutlinedIcon />
            </div>
            <div className="options-product">
              <Diversity3TwoToneIcon />
            </div>
          </div>
          <div className="options-product">
            <ShoppingBagOutlinedIcon />
          </div>
        </div>
      </div>
      {sale && (
        <div className="sale-item ">
          <p>Sale !</p>
        </div>
      )}
      <p className="mb-3">{title}</p>
      <p className="text-secondary">
        {price} <span className="text-decoration-line-through">{discount}</span>
      </p>
    </section>
  );
}
