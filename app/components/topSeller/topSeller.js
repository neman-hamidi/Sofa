import "./topSeller.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import LivingRoomitem from "../livingRoom/livingRoomitem/livingRoomitem";
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
export default function topSeller() {
  return (
    <>
    <p className="fw-bold text-center fs-2 my-5">Top Sellers</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="justify-items-center mb-5">
          <LivingRoomitem
            title="Axis 2-Piece Sectional Sofa"
            price="$339.99"
            img1="/images/m2_p04_1-768x768.jpeg"
            img2="/images/m2_p04_2-700x700.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="justify-items-center mb-5">
          <LivingRoomitem
            title="Wells Renew Vegan Leather Chair"
            price="$299.99"
            img1="/images/m2_p01_2-700x700.jpeg"
            img2="/images/m2_p01_1-768x768.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="justify-items-center mb-5">
          <LivingRoomitem
            title="Gather Sofa"
            price="$139.99X"
            sale="sale"
            discount="$339.99X"
            img1="/images/m2_p02_1-768x768.jpeg"
            img2="/images/m2_p02_2-700x700.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="justify-items-center mb-5">
          <LivingRoomitem
            title="Muirfield Sculptural Metal Accent Chair"
            price="$299.99"
            img1="/images/m2_p03_2-700x700.jpeg"
            img2="/images/m2_p03_1-768x768.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="justify-items-center mb-5">
          <LivingRoomitem
            title="Polly Sand Brown Accent Chair"
            price="$439.99"
            img1="/images/m2_p05_2-700x700.jpeg"
            img2="/images/m2_p05_1-768x768.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide className="justify-items-center mb-5">
          <LivingRoomitem
            title="Axis 2-Seat Sofa"
            price="$239.99"
            sale="sale"
            img1="/images/m2_p04_1-768x768.jpeg"
            img2="/images/m2_p04_2-700x700.jpeg"
          />
        </SwiperSlide>
      </Swiper>
      <div className="container w-option-product my-5">
            <div className="row">
                <div className="col-6">
                    <div className="desc-product">
                        <h5 className="text-secondary text-start ps-5 pt-5">Ceiling Lighting</h5>
                        <h4 className="fw-bolder fs-3 text-start ps-5 pt-4">Andre Black Cone Pendant Light</h4>
                        <p className="text-secondary text-center text-start ps-2 pt-3">Whether you want to brighten up a dim hallway or add a statement piece to the dining room</p>
                    </div>
                </div>
                <div className="col-6 product-display">
                        <div className="desc-product2">
                          <div className="gerdali-2">
                            <div>
                              <TipsAndUpdatesOutlinedIcon/>
                            </div>
                          </div>
                            <h5 className="text-secondary text-start ps-5 pt-5">Ceiling Lighting</h5>
                            <h4 className="fw-bolder fs-3 text-start ps-5 pt-4">Andre Black Cone Pendant Light</h4>
                            <p className="text-black text-center text-start ps-2 pt-3 ">Whether you want to brighten up a dim hallway or add a statement piece to the dining room</p>
                        </div>
                        <div className="desc-product3">
                              <div className="gerdali-2">
                                <div>
                                  <TipsAndUpdatesOutlinedIcon/>
                                </div>
                               </div>
                            <h5 className="text-secondary text-start ps-5 pt-5">Ceiling Lighting</h5>
                            <h4 className="fw-bolder fs-3 text-start ps-5 pt-4">Andre Black Cone Pendant Light</h4>
                            <p className="text-black text-center text-start ps-2 pt-3">Whether you want to brighten up a dim hallway or add a statement piece to the dining room</p>
                        </div>
                </div>
            </div>
      </div>
    </>
  );
}
