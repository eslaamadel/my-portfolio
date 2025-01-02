"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Images
import Image from "next/image";
import Company1 from "../assets/Edraak.svg";
import Company2 from "../assets/maharaEN.svg";
import Company3 from "../assets/Egfwd.svg";
import Company4 from "../assets/Devloper career logo.svg";
import Company5 from "../assets/Webflow logo.svg";

// Import Swiper styles
import "swiper/css";
import "./SwiperStyle.css";

// Import required modules
import { Autoplay } from "swiper/modules";

const SwiperSlider = () => {
  return (
    <>
      <div className="my-[60px] slider-container">
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
            <Image src={Company1} alt="Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Company2} alt="Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Company3} alt="Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Company4} alt="Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Company5} alt="Logo" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperSlider;
