import ShowByCategoryItem from "./showByCategoryItem/showByCategoryItem";
import categories from "./Text";
import "./showByCategory.css";
const showByCategory = () => (
  <>
    <h3 className="text-center mt-5 fw-bold fs-2">Show By Category</h3>
    <div className="grid-category">
      {categories.map((category, index) => (
        <ShowByCategoryItem key={index} {...category} />
      ))}
    </div>
  </>
);
export default showByCategory;
