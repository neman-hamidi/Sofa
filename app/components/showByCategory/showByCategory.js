import "./showByCategory.css"
import ShowByCategoryItem from "./showByCategoryItem/showByCategoryItem"
export default function showByCategory() {
  return (
    <div>
        <p className="text-center mt-5 fw-bold fs-2">Show By Category</p>
        <div className="grid-category">
        <ShowByCategoryItem img="/images/m2_cat_01.jpg" title="Kitchen" description="41 items"/>
        <ShowByCategoryItem img="/images/m2_cat_02.jpg" title="kids Room" description="64 items"/>
        <ShowByCategoryItem img="/images/m2_cat_03.jpg" title="Bed Room" description="54 items"/>
        <ShowByCategoryItem img="/images/m2_cat_04.jpg" title="Living Room" description="32 items"/>
        </div>
    </div>
  )
}
