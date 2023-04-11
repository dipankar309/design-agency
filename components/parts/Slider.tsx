import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper  } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Pagination } from "swiper";
import { Mousewheel } from 'swiper';
import { FreeMode } from "swiper";
import { Scrollbar } from "swiper";


export default function Slider() {
  return (
<Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        mousewheel={true}
        freeMode={true}
        scrollbar={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Scrollbar, Mousewheel,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
  );
}
