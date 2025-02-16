import details from "./Text";
import BlogItem from "./blogItem/blogItem";
import "./blog.css";
export default function blog() {
  return (
    <section>
      <h3 className="fs-3 fw-bold text-start blog-title">Blog & Insights</h3>
      <div className="blog">
        {details.map((item, index) => (
          <div key={index}>
            <BlogItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
