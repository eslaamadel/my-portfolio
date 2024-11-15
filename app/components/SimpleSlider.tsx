"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Company1 from "../assets/Edraak.svg";
import Company2 from "../assets/maharaEN.svg";
import Company3 from "../assets/Egfwd.svg";
import Company4 from "../assets/Devloper career logo.svg";
import Company5 from "../assets/Webflow logo.svg";

const SimpleSlider = () => {
  const settings = {
    dots: false, // إخفاء النقاط
    infinite: true, // تفعيل التمرير المستمر
    speed: 8000, // تقليل سرعة الحركة
    slidesToShow: 4, // عرض 4 صور في نفس الوقت
    slidesToScroll: 1, // تحريك الصورة الواحدة
    autoplay: true, // تفعيل التشغيل التلقائي
    autoplaySpeed: 0, // الحركة بدون توقف
    cssEase: "linear", // الحركة تكون بشكل خطي ومستمر
    pauseOnHover: false, // الاستمرار في التحرك حتى عند مرور الماوس
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          speed: 8000, // نفس السرعة
          autoplaySpeed: 0, // نفس السرعة
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 8000, // نفس السرعة
          autoplaySpeed: 0, // نفس السرعة
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 8000, // نفس السرعة
          autoplaySpeed: 0, // نفس السرعة
        },
      },
    ],
  };
  return (
    <>
      <div className="my-[60px] slider-container">
        <Slider {...settings}>
          <div>
            <Image
              src={Company1}
              alt="Logo"
              className="w-[160px] mb:w-[120px]"
            />
          </div>
          <div className="-ml-7">
            <Image
              src={Company2}
              alt="Logo"
              className="w-[200px] mb:w-[150px]"
            />
          </div>
          <div>
            <Image
              src={Company3}
              alt="Logo"
              className="w-[130px] mb:w-[100px]"
            />
          </div>
          <div>
            <Image
              src={Company4}
              alt="Logo"
              className="w-[170px] mb:w-[140px]"
            />
          </div>
          <div>
            <Image
              src={Company5}
              alt="Logo"
              className="w-[130px] mb:w-[100px]"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SimpleSlider;
