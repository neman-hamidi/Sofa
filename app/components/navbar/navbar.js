import { icons, menuItems } from "./Text";
import "./navbar.css";
const navbar = () => (
  <nav className="container text-center navbar-item">
    <div className="row align-items-center">
      {/* بخش آیکون‌ها */}
      <div className="col-4">
        <div className="icon-navbar d-flex justify-center gap-3">
          {icons.map((item, index) => (
            <div key={index} className="position-relative">
              {item.icon}
              {item.badge !== undefined && (
                <div className="badge">{item.badge}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* بخش عنوان */}
      <div className="col-4">
        <h1 className="fs-3 fw-bolder">ZinaTor</h1>
      </div>

      {/* بخش منو */}
      <div className="col-4">
        <div className="d-flex gap-3 justify-content-center">
          {menuItems.map((item, index) => (
            <h5 key={index}>{item}</h5>
          ))}
        </div>
      </div>
    </div>
  </nav>
);
export default navbar;
