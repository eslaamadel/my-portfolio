import Image from "next/image";
import MockupFood from "../assets/iPhone 13 mini - SataFood 1.png";
import MockupMall from "../assets/iPhone 13 mini - SataMall 1.png";
import logoMall from "../assets/Logowithbacgroundvideo-ezgif.dscom-reverse.gif";
import logoFood from "../assets/Sata-food-no-backgroud-logo-ezgif.com-reverse.gif";

const Splash = () => {
  const splashData = [
    { mockup: MockupFood, logo: logoFood, animation: "fade-right" },
    { mockup: MockupMall, logo: logoMall, animation: "fade-left" },
  ];

  return (
    <div className="flex flex-col py-[100px] justify-center items-center gap-24">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="flex flex-col justify-center items-center gap-4 edk:w-[1000px] tb:w-[500px] w-fit"
      >
        <h2 className="text-h-2 text-netu-50 font-bold tb:text-h-3 mb:text-h-3">
          Enlivening
        </h2>
        <p className="text-h-4 text-netu-500 font-normal text-center leading-[130%] mb:text-p tb:text-p">
          Bringing Splash Screens to Life
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="flex w-full justify-center"
      >
        {splashData.map((item, index) => (
          <div
            key={index}
            data-aos={item.animation}
            data-aos-duration="700"
            className="relative"
          >
            <Image
              src={item.mockup}
              alt={`Mockup ${index + 1}`}
              width={500}
              height={500}
            />
            <Image
              src={item.logo}
              className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-3/4 mb:w-28 tb:w-36 sdk:w-44 w-52"
              alt={`Logo ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Splash;
