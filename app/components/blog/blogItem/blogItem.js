import "./blogItem.css";
const blogItem = ({ title, paragraph, src }) => (
  <>
    <div className="blogItem">
      <img src={src} alt="imgs" />
    </div>
    <div className="paragraph-div">
      <p className="text-secondary mb-2 text-start mt-2">
        by <span className="text-black">admin</span> October24, 2023
      </p>
      <h3 className="fw-bold mb-4 text-start">{title}</h3>
      <p className="text-secondary mb-3 text-start">{paragraph}</p>
    </div>
    <div className="text-center">
      <button className="btn btn-outline-dark mt-3">Read More</button>
    </div>
  </>
);
export default blogItem;
