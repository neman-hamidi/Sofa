import "./blogItem.css";
export default function blogItem({ title, paragraph, children }) {
  return (
    <div>
      <div>
        <div className="blogItem">{children}</div>
        <div className="paragraph-div">
          <p className="text-secondary mb-2 text-start mt-2">
            by <span className="text-black">admin</span> October24, 2023
          </p>
          <p className="fw-bold mb-4 text-start">{title}</p>
          <p className="text-secondary mb-3 text-start">{paragraph}</p>
        </div>
        <div className="text-center">
          <button className="btn btn-outline-dark mt-3">Read More</button>
        </div>
      </div>
    </div>
  );
}
