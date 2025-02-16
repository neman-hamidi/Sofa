import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import LivingRoomitem from "../livingRoom/livingRoomitem/livingRoomitem";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import products from "./Text";
import "./topSeller.css";
export default function topSeller() {
  return (
    <>
      <h3 className="fw-bold text-center fs-2 my-5">Top Sellers</h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="justify-items-center mb-5">
            <LivingRoomitem {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container w-option-product my-5">
        <div className="row">
          <div className="col-6">
            <div className="desc-product">
              <h5 className="text-secondary text-start ps-5 pt-5">
                Ceiling Lighting
              </h5>
              <h4 className="fw-bolder fs-3 text-start ps-5 pt-4">
                Andre Black Cone Pendant Light
              </h4>
              <p className="text-secondary text-center ps-2 pt-3">
                Whether you want to brighten up a dim hallway or add a statement
                piece to the dining room
              </p>
            </div>
          </div>
          <div className="col-6 product-display">
            <div className="desc-product2">
              <div className="gerdali-2">
                <div>
                  <TipsAndUpdatesOutlinedIcon />
                </div>
              </div>
              <h5 className="text-secondary text-start ps-5 pt-5">
                Ceiling Lighting
              </h5>
              <h4 className="fw-bolder fs-3 text-start ps-5 pt-4">
                Andre Black Cone Pendant Light
              </h4>
              <p className="text-black text-center  ps-2 pt-3 ">
                Whether you want to brighten up a dim hallway or add a statement
                piece to the dining room
              </p>
            </div>
            <div className="desc-product3">
              <div className="gerdali-2">
                <div>
                  <TipsAndUpdatesOutlinedIcon />
                </div>
              </div>
              <h5 className="text-secondary text-start ps-5 pt-5">
                Ceiling Lighting
              </h5>
              <h4 className="fw-bolder fs-3 text-start ps-5 pt-4">
                Andre Black Cone Pendant Light
              </h4>
              <p className="text-black text-center ps-2 pt-3">
                Whether you want to brighten up a dim hallway or add a statement
                piece to the dining room
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
