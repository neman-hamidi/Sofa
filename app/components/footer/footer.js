import "./footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function footer() {
  return (
    <div className="container-fluid footer text-start">
      <div className="row pt-5 text-white div-row-footer">
        <div className="col-3">
          <p className="fw-bold fs-4 pb-3">Let’s get in touch</p>
          <p className="fs-5 mb-3 ">
            Sign up for our newsletter and receive 10% off your
          </p>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.co"
          />
        </div>
        <div className="col-3 ">
          <p className="fw-bold">information</p>
          <p className="fw-bold py-2">Privacy policy</p>
          <p className="fw-bold">Refund policy</p>
          <p className="fw-bold py-2">Shipping & Return</p>
          <p className="fw-bold">Term & conditions</p>
        </div>
        <div className="col-3">
          <p className="fw-bold">Quick links</p>
          <p className="fw-bold py-2">Product Compare</p>
          <p className="fw-bold">My account</p>
          <p className="fw-bold py-2">Shopping Cart</p>
          <p className="fw-bold">Wishlist</p>
        </div>
        <div className="col-3">
          <p className="fw-bold ">Our Store</p>
          <p className="py-3">
            Miniture is one of the biggest international fashion companies, one
            of the world’s largest distribution groups.
          </p>
          <div className="div-icons-footer mb-4">
            <div>
                <FacebookOutlinedIcon/>
            </div>
            <div>
                <InstagramIcon/>
            </div>
            <div>
                <TelegramIcon/>
            </div>
            <div>
                <LinkedInIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
