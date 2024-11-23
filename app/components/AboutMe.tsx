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
          <h2 className="text-h-2 text-netu-50 font-bold tb:text-h-3 mb:text-h-3">
            About Me
          </h2>
        </div>
        <div className="flex flex-col gap-24  w-full dk:flex-row edk:flex-row">
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="flex flex-col gap-12 dk:w-2/5 edk:w-2/5"
          >
            <div className="pt-4 pl-4 border-2 border-solid border-netu-500/30 rounded-2xl bg-Primary-900/20 w-full">
              <Image src={Me} alt="Photo of me" />
            </div>
            <p className="text-h-3 leading-tight text-netu-300 font-normal tb:text-h-4 mb:text-p">
              ““Designing isn’t just work—it’s my way of making a positive
              impact.””
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            className="flex flex-col gap-10 flex-1"
          >
            <h2 className="text-h-2 leading-tight tb:text-h-3 mb:text-h-4">
              Experience, Empathy, and Passion Shape My Work.
            </h2>
            <div className="flex flex-col">
              <h4 className="text-h-3 font-semibold text-neutral-200 tb:text-p mb:text-h-4">
                Hey there 👋🏻
              </h4>
              <p className="text-h-4 leading-snug font-light text-netu-400 tb:text-sm-cap mb:text-sm-cap">
                I'm <span className="text-accent-default">Eslam Adel</span>, a
                Product Design Lead based in Cairo with over 5 years of
                experience crafting user-centered solutions that drive business
                success.
                <br />
                <br />
                My love for design began with a realization: one day, I watched
                my grandfather struggle with taking his medications on time and
                I thought—"Why isn’t this easier?" From that moment, I knew I
                wanted to create things that everyone could use effortlessly.
                <br />
                <br />
                What started as a hobby has grown into a passion for creating
                user-centered designs that drive growth.
                <br />
                <br />
                That curiosity never left me, and today, I bring the same spirit
                of exploration and problem-solving to my design work. I combine
                form and function to develop intuitive user experiences that
                solve real problems and bring joy.
                <br />
                <br />
                As a leader, I believe in fostering collaboration, leading by
                example, and mentoring junior designers to reach their full
                potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
