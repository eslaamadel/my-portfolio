"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Images
import EdraakLogo from "../assets/Edraak";
import MaharatechLogo from "../assets/maharaEN";
import EgfwdLogo from "../assets/Egfwd";
import DevloperCarrerLogo from "../assets/Devloper career logo";
import WebflowLogo from "../assets/Webflow logo";

// Import Swiper styles
import "swiper/css";
import "./SwiperStyle.css";

// Import required modules
import { Autoplay } from "swiper/modules";

const SwiperSlider = () => {
  return (
    <>
      <div className="my-[60px] slider-container text-black dark:text-white">
        <Swiper
          autoplay={{
            delay: 0, // No delay between transitions
          }}
          speed={5000} // Transition speed (adjust for smoother scroll)
          loop={true} // Infinite loop for seamless transition (without pause)
          allowTouchMove={false} // Disable touch/swipe functionality
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            591: {
              slidesPerView: 2,
            },
            745: {
              slidesPerView: 3,
            },
            1025: {
              slidesPerView: 4,
            },
            1281: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay]} // Autoplay module for continuous movement
          className="mySwiper"
        >
          <SwiperSlide>
            <EdraakLogo />
          </SwiperSlide>
          <SwiperSlide>
            <MaharatechLogo />
          </SwiperSlide>
          <SwiperSlide>
            <EgfwdLogo />
          </SwiperSlide>
          <SwiperSlide>
            <DevloperCarrerLogo />
          </SwiperSlide>
          <SwiperSlide>
            <WebflowLogo />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperSlider;
