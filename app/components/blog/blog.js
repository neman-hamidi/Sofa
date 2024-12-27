import "./blog.css";
import BlogItem from "./blogItem/blogItem";
export default function blog() {
  return (
    <div>
      <p className="fs-3 fw-bold text-start blog-title">Blog & Insights</p>
      <div className="blog">
        <BlogItem
          title="Bring a Little Joy to Your Days With These 14 Items"
          paragraph=" to coffee tables with handy storage for magazines and"
        >
          <img src="/images/blog-01.jpeg" alt="" />
        </BlogItem>

        <BlogItem
          title="Accent Furniture to Personalize your"
          paragraph="From dining tables that you can extend if you have guests to coffee tables with handy storage for magazines and"
        >
          <img src="/images/blog-02.jpg" alt="" />
        </BlogItem>

        <BlogItem
          title="Tips for Staying Productive when you Work from"
          paragraph="From dining tables that you can extend if you have guests to coffee tables with handy storage for magazines and"
        >
          <img src="/images/blog-03.jpg" alt="" />
        </BlogItem>
      </div>
    </div>
  );
}
