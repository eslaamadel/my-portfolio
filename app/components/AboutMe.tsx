import Me from "../assets/Me.png";
import Image from "next/image";
const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col py-[100px] justify-center items-center gap-24 overflow-x-hidden edk:-mx-20 edk:px-20 px-12 -mx-12">
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h2 className="text-h-2 dark:text-netu-50 text-netu-900 font-bold tb:text-h-3 mb:text-h-3">
            About Me
          </h2>
        </div>
        <div className="flex flex-col gap-24  w-full dk:flex-row edk:flex-row">
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="flex flex-col gap-12 dk:w-2/5 edk:w-2/5"
          >
            <div className="pt-4 pl-4 border-2 border-solid border-netu-500/30 rounded-2xl dark:bg-Primary-900 bg-Primary-100/50 w-full">
              <Image src={Me} alt="Photo of me" />
            </div>
            <p className="text-h-3 leading-tight dark:text-netu-300 text-netu-600 font-normal tb:text-h-4 mb:text-p">
              ““Designing isn’t just work—it’s my way of making a positive
              impact.””
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            className="flex flex-col gap-10 flex-1"
          >
            <h2 className="text-h-2 leading-tight tb:text-h-3 mb:text-h-4 dark:text-white text-netu-950">
              Experience, Empathy, and Passion Shape My Work.
            </h2>
            <div className="flex flex-col">
              <h2 className="text-h-3 font-semibold dark:text-netu-200 text-netu-900 tb:text-p mb:text-h-4">
                Hey there <span className="hidden dark:inline">👋🏻</span>
                <span className="inline dark:hidden">👋🏾</span>
              </h2>
              <p className="text-h-4 leading-snug font-light dark:text-netu-400 text-netu-700 tb:text-sm-cap mb:text-sm-cap">
                I'm{" "}
                <span className="text-accent-default font-semibold">
                  Eslam Adel
                </span>
                , a creative UX/UI Developer skilled in designing and developing
                intuitive, user-friendly interfaces for web and mobile
                applications.
                <br />
                <br />
                <br />
                With experience at SATA Group, Techzone Labs, and eBSEG, excels
                in creating responsive designs, enhancing user satisfaction, and
                collaborating with cross-functional teams. Proficient in tools
                like Figma, Adobe XD, and Rive, he combines design expertise
                with front-end development to deliver innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
