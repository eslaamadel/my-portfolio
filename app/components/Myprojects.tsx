import Image from "next/image";
import image1 from "../assets/Clickmare.png";
import image2 from "../assets/Lernio.png";
import image3 from "../assets/School-Bus-Tracking.png";
import image4 from "../assets/Summit.png";
import image5 from "../assets/Bevatel.png";
import image6 from "../assets/Satafood.png";
import { Button } from "@/components/ui/button";
import { LuArrowRight } from "react-icons/lu";

const Myprojects = () => {
  return (
    <>
      <div
        className="flex flex-col py-[100px] justify-center items-center gap-24"
        id="Projects"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h2 className="text-h-2 text-netu-50 font-bold tb:text-h-3 mb:text-h-3">
            My Projects
          </h2>
          <p className="text-h-4 text-netu-500 font-normal text-center leading-[130%] mb:text-p tb:text-p">
            Check what I made - this is worth a thousand words about me.
          </p>
        </div>
        <div className="grid edk:grid-cols-3 dk:grid-cols-3 sdk:grid-cols-2 tb:grid-cols-2 mb:grid-cols-1 gap-10">
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="px-7 py-[68px] h-[550px] mb:h-[450px] bg-Primary-950 rounded-2xl relative overflow-hidden"
          >
            <div className="flex flex-col gap-6 ">
              <div className="flex flex-col gap-2 z-10">
                <h2 className="text-h-4 text-netu-50 font-bold">Clickmare</h2>
                <p className="text-p text-netu-500 font-medium leading-[140%] mb:text-sm-cap">
                  Built a modular, scalable design system for Clickmare
                  Healthcare App using atomic design principles.
                </p>
              </div>
              <Button
                variant="default"
                size={"default"}
                className="z-10 w-fit"
                asChild
              >
                <a
                  href="https://www.figma.com/proto/mGLi3ooYvFp3E5W7PYL5EY/Clickmare?page-id=124%3A2918&node-id=2609-36578&node-type=frame&viewport=1002%2C197%2C0.15&t=KiwyKbUNEeJ34PdL-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2610%3A18509"
                  target="_blank"
                  className="flex gap-2 items-center"
                >
                  Go to project
                  <LuArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Image
                src={image1}
                alt="cardphoto"
                className="absolute right-0 -bottom-10 mb:-bottom-28"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="px-7 py-[68px] h-[550px] mb:h-[450px] bg-Primary-950  rounded-2xl relatives overflow-hidden"
          >
            <div className="flex flex-col gap-6 ">
              <div className="flex flex-col gap-2 z-10">
                <h2 className="text-h-4 text-netu-50 font-bold">Learnio</h2>
                <p className="text-p text-netu-500 font-medium leading-[140%] mb:text-sm-cap">
                  Learnio offers tailored online courses with seamless,
                  user-friendly accessibility for skill and career advancement.
                </p>
              </div>
              <Button
                variant="default"
                size={"default"}
                className="z-10 w-fit"
                asChild
              >
                <a
                  href="https://www.figma.com/proto/xFCEUZ1IPdf8dXzo26KGYl/Online-Learning-Platform?page-id=0%3A1&node-id=31-1878&node-type=frame&viewport=1058%2C4972%2C0.25&t=2a9diolIqNnmho2w-1&scaling=scale-down-width&content-scaling=fixed"
                  target="_blank"
                  className="flex gap-2 items-center"
                >
                  Go to project
                  <LuArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Image
                src={image2}
                alt="cardphoto"
                className="absolute right-0 -bottom-10 mb:-bottom-28"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="px-7 py-[68px] h-[550px] mb:h-[450px] bg-Primary-950 rounded-2xl relative overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 z-10">
                <h2 className="text-h-4 text-netu-50 font-bold leading-tight">
                  School Bus Tracking
                </h2>
                <p className="text-p text-netu-500 font-medium leading-[140%] mb:text-sm-cap">
                  The School Bus Tracking System lets parents monitor their
                  children's transportation by using a driver app to send the
                  bus's location to a database.
                </p>
              </div>
              <Button
                variant="default"
                size={"default"}
                className="z-10 w-fit"
                asChild
              >
                <a
                  href="https://github.com/eslaamadel/School-Bus-Tracking-System-Website---Graduation---Project-.git"
                  target="_blank"
                  className="flex gap-2 items-center"
                >
                  Go to project
                  <LuArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Image
                src={image3}
                alt="cardphoto"
                className="absolute right-0 -bottom-10 mb:-bottom-28"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className="px-7 py-[68px] h-[550px] mb:h-[450px] bg-Primary-950 rounded-2xl relative overflow-hidden"
          >
            <div className="flex flex-col gap-6 ">
              <div className="flex flex-col gap-2 z-10">
                <h2 className="text-h-4 text-netu-50 font-bold">Summit</h2>
                <p className="text-p text-netu-500 font-medium leading-[140%] mb:text-sm-cap">
                  Summit Real Estate Website offers a user-friendly platform for
                  exploring property listings. Key features include property
                  search, categories, and highlighted featured listings.
                </p>
              </div>
              <Button
                variant="default"
                size={"default"}
                className="z-10 w-fit"
                asChild
              >
                <a
                  href="https://www.figma.com/proto/uNKZinKjptuHXbmg9l9wVv/Majisa-Task-(Real-State)?page-id=0%3A1&node-id=31-1878&node-type=frame&viewport=1363%2C7141%2C0.37&t=VnW0vpMESFhxlx4r-1&scaling=scale-down-width&content-scaling=fixed"
                  className="flex gap-2 items-center "
                  target="_blank"
                >
                  Go to project
                  <LuArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Image
                src={image4}
                alt="cardphoto"
                className="absolute right-0 -bottom-10 mb:-bottom-28"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="px-7 py-[68px] h-[550px] mb:h-[450px] bg-Primary-950 rounded-2xl relative overflow-hidden"
          >
            <div className="flex flex-col gap-6 ">
              <div className="flex flex-col gap-2 z-10">
                <h2 className="text-h-4 text-netu-50 font-bold">Bevatal</h2>
                <p className="text-p text-netu-500 font-medium leading-[140%] mb:text-sm-cap">
                  Dashboards that provide insights into customer behavior, such
                  as total users, total profit, and sales analytics.
                </p>
              </div>
              <Button
                variant="default"
                size={"default"}
                className="z-10 w-fit"
                asChild
              >
                <a
                  href="https://www.behance.net/gallery/184804345/Bevatel-Dashboard-(-Visual-Design-Principles)"
                  className="flex gap-2 items-center"
                  target="_blank"
                >
                  Go to project
                  <LuArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Image
                src={image5}
                alt="cardphoto"
                className="absolute right-0 -bottom-10 mb:-bottom-28"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1100"
            className="px-7 py-[68px] h-[550px] mb:h-[450px] bg-Primary-950 rounded-2xl relative overflow-hidden"
          >
            <div className="flex flex-col gap-6 ">
              <div className="flex flex-col gap-2 z-10">
                <h2 className="text-h-4 text-netu-50 font-bold">Sata Food</h2>
                <p className="text-p text-netu-500 font-medium leading-[140%] mb:text-sm-cap">
                  SataFood is a landing page for a food delivery service,
                  showcasing key features like easy restaurant browsing, fast
                  ordering, and smooth navigation. It offers a quick overview of
                  the platform’s capabilities.
                </p>
              </div>
              <Button
                variant="default"
                size={"default"}
                className="z-10 w-fit "
                asChild
              >
                <a
                  href="https://www.sata-food.com/en"
                  className="flex gap-2 items-center"
                  target="_blank"
                >
                  Go to project
                  <LuArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Image
                src={image6}
                alt="cardphoto"
                className="absolute right-0 -bottom-10 mb:-bottom-28"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myprojects;
