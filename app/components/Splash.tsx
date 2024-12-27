import Image from "next/image";
import MockupFood from "../assets/iPhone 13 mini - SataFood.png";
import MockupMall from "../assets/iPhone 13 mini - SataMall.png";
import logoMall from "../assets/Logowithbacgroundvideo-ezgif.dscom-reverse.gif";
import logoFood from "../assets/Sata-food-no-backgroud-logo-ezgif.com-reverse.gif";
const Splash = () => {
  return (
    <div className="flex flex-col py-[100px] justify-center items-center gap-24">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="flex flex-col justify-center items-center gap-4 edk:w-[1000px] tb:w-[500px] w-fit"
      >
        <h2 className="text-h-2 text-netu-50 font-bold tb:text-h-3 mb:text-h-3">
          FAQs
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
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          className="relative overflow-hidden h-[500px]"
        >
          <Image src={MockupFood} alt="Logo" width={500} height={500} />
          <Image
            src={logoFood}
            className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-2/3"
            alt="Logo"
            width={200}
            height={200}
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="700"
          className="relative overflow-hidden h-[500px]"
        >
          <Image src={MockupMall} alt="Logo" width={500} height={500} />
          <Image
            src={logoMall}
            className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-2/3"
            alt="Logo"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Splash;
