"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Image1 from "../assets/Edraak.png";
import Image2 from "../assets/Course_Certificate_En(UX Fundamentals)-1.png";
import Image3 from "../assets/Advanced User Experience Design NanoDegree-1.png";
import Image4 from "../assets/Eslam Adel Wahba Developer Career-1.png";
import Image5 from "../assets/Eslam Adel Wahba Developer Career (Second)-1.png";
import Image6 from "../assets/Webflow 101 Certificate-1.png";

const Certificate = () => {
  // Store all images in an array
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <>
      <div
        className="flex flex-col py-[100px] gap-24 items-center overflow-x-hidden edk:-mx-20 edk:px-20 px-12 -mx-12"
        id="Certificates"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex flex-col justify-center items-center gap-4 edk:w-[1000px] tb:w-[500px] w-fit"
        >
          <h2 className="text-h-2 text-netu-50 font-bold tb:text-h-3 mb:text-h-4">
            My Certificates
          </h2>
          <p className="text-h-4 text-netu-500 font-normal text-center leading-[130%] mb:text-p tb:text-p">
            A collection of my professional certificates showcasing my
            dedication to learning, growth, and excellence.
          </p>
        </div>
        <Carousel data-aos="fade-left" data-aos-duration="600">
          <CarouselContent className="flex gap-5 h-fit ">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="mb:basis-5/6 tb:basis-1/2 sdk:basis-1/2 dk:basis-1/3 edk:basis-1/4 flex-shrink-0 "
              >
                <Image
                  src={image}
                  alt={`Certificate ${index + 1}`}
                  className="aspect-[3/2] rounded-[6px]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Certificate;
