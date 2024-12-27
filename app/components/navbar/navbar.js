import "./navbar.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import Diversity3TwoToneIcon from "@mui/icons-material/Diversity3TwoTone";
export default function navbar() {
  return (
    <>
      <div className="container text-center navbar-item">
        <div className="row">
          <div className="col-4 justify-items-center">
            <div className="icon-navbar">
              <div>
                <ShoppingBagOutlinedIcon />
                <div className="badge">0</div>
              </div>
              <div>
                <GroupsIcon />
              </div>
              <div>
                <FavoriteBorderOutlinedIcon />
              </div>
              <div>
                <Diversity3TwoToneIcon />
              </div>
            </div>
          </div>
          <div className="col-4">
            <h1 className="fs-3 fw-bolder">ZinaTor</h1>
          </div>
          <div className="col-4">
            <div className="d-flex gap-3 justify-items-center">
              <h5>Contact Us</h5>
              <h5>Blog</h5>
              <h5>Shop</h5>
              <h5>About Us</h5>
              <h5>Home</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
