import React from "react";
import { useSwiper } from "swiper/react";
import lefticon from "../../assets/icons/left.png";
import righticon from "../../assets/icons/right.png";
import "./topproduct.css";

const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <div className="top-products-navigation">
      <h2 className="top-product-title">
        Top Selling Product <br /> of The Year
      </h2>
      <div className="button-wrapper">
        <button onClick={() => swiper.slidePrev()}>
          <img className="btn-icon" src={lefticon} alt="left-arror" />
        </button>
        <button onClick={() => swiper.slideNext()}>
          <img className="btn-icon" src={righticon} alt="right-arrow" />
        </button>
      </div>
    </div>
  );
};

export default SwiperButton;
