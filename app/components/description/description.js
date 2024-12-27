import "./description.css"
export default function description() {
  return (
    <div className="container description">
      <div className="row">
        <div className="col-6">
          <img src="/images/m2_text_banner.jpeg" alt="" className="rounded-4" />
        </div>
        <div className="col-6 my-auto ">
          <p className="fw-light text-center">Urban Luxe</p>
          <h3 className="fw-bolder text-center mt-5 fs-1">Modern Comfort</h3>
          <h3 className="fw-bolder text-center mb-3 fs-2">Timeless Design</h3>
          <p className="w-75 mx-auto text-secondary my-5">
            Experience the essence of modern luxury with our Urban Luxe
            collection. Each piece effortlessly combines contemporary style and
            timeless design
          </p>
          <div className="text-center my-4">
            <button type="button" className="btn btn-outline-info">
              Shop All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
