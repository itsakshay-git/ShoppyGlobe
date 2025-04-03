/**
 * @component TopProduct
 * @desc A component that displays a carousel of top products using Swiper.js.
 * It features an autoplaying slider with navigation controls and responsive breakpoints.
 * The products are mapped from a constant `topProduct`, with each product rendered as a `ProductItem` in a Swiper slide.
 */

import React from 'react'
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import topProduct from '../../constant';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperButton from './SwiperButton';
import { Link } from 'react-router';
import ProductItem from '../ProductItem/ProductItem';

const TopProduct = () => {
  return (
    <div className="top-product">     
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        480: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 6 },
        1440: { slidesPerView: 6 },
    
      }}
      autoHeight={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      style={{ height: "520px", paddingTop: "150px"}}
    >
      <SwiperButton />
      {topProduct.map((product) => (
        <SwiperSlide key={product.id}  style={{ height: "600px" }} className='slide-wrapper'>
          <ProductItem key={product.id} product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default TopProduct