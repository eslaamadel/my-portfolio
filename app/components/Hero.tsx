"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS styles
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 4, // Change offset to trigger animation earlier or later
      delay: 2, // Delay in milliseconds
      easing: "ease-in-out", // CSS easing function
    });
  }, []);

  return (
    <>
      <div className="w-full flex flex-col py-[100px]" id="Home">
        <div className="flex flex-col gap-11 justify-center items-center">
          <div className="flex flex-col gap-[38px] justify-center items-center leading-tight w-full">
            <h1
              data-aos="fade-up"
              data-aos-duration="400"
              className="text-h-1 text-netu-50 font-bold text-center edk:w-[850px] w-full tb:text-h-2 mb:text-h-3"
            >
              Crafting Unique and Meaningful Experiences Through
              <span className="text-accent-default mb:block">
                {" "}
                <Typewriter
                  words={["Design", "Development", "Innovation", "Excellence"]}
                  loop={true}
                  cursor
                  cursorStyle="|" // Customize the cursor character
                  cursorBlinking={true} // Manually control cursor blinking
                  typeSpeed={80} // Speed of typing each word
                  deleteSpeed={90} // Speed of deleting each word
                  delaySpeed={1500} // Pause between the words before deleting
                />
              </span>
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-duration="500"
              className="text-h-4 text-netu-500 font-light text-center edk:w-[1000px] w-full mb:text-p-1 tb:text-h4 mb:text-p"
            >
              Hi, I&apos;m Eslam, a passionate web developer and UI/UX designer
              focused on creating user-friendly and visually appealing digital
              products.
            </h2>
          </div>
          <div className="flex gap-7 mb:flex-col mb:gap-4 mb:items-center ">
            <div data-aos="fade-up" data-aos-duration="600">
              <Button variant="default" size={"lg"} asChild>
                <a href="mailto:eslamadelwahba@gmail.com">Get in touch</a>
              </Button>
            </div>
            <div data-aos="fade-up" data-aos-duration="700" className="w-full">
              <Button
                variant="secondary"
                size={"lg"}
                className="w-full"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1fh69nC2Vk7zs0gnB02Iwt9a4HTBgw8v3/view?usp=sharing"
                  target="_blank"
                  className="w-full"
                >
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
