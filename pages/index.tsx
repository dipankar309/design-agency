import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Mousewheel } from 'swiper';
import { FreeMode } from "swiper";
import { Scrollbar } from "swiper";
import { Pagination } from "swiper";




import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nab from "../components/parts/Nab";
import Banner from "../components/parts/hero";
import About from "../components/parts/about";
import Company from "../components/parts/company";
import Advantages from "../components/parts/advantages";

import Contact from "../components/parts/contact";

// import Slider from "../components/parts/Slider";




const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nab />

      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        freeMode={true}
        scrollbar={true}
        parallax={true}
        speed={600}
        pagination={{clickable: true,}}
        modules={[FreeMode, Scrollbar, Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Company />
        </SwiperSlide>
        <SwiperSlide>
          <Advantages />
        </SwiperSlide>
        <SwiperSlide>
          <Contact />
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Home;
