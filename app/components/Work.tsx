import Image from "next/image";
import Logo1 from "../assets/Sata Company Logo.png";
import Logo2 from "../assets/Techzone Company.png";
import Logo3 from "../assets/ebseg-logo.png";
import Logo4 from "../assets/Sata Company Logo-White.png";
import Logo5 from "../assets/Techzone Company-White.png";
import Logo6 from "../assets/ebseg-logo-White.png";

const workData = [
  {
    title: "UX/UI Designer at SATA Group, Nasr City",
    img: { light: Logo1, dark: Logo4 },
    date: "MAY 2023 - OCT 2023",
    description:
      "Optimized existing UI designs, crafted elements such as menus, tabs, and widgets, developed original graphic designs (e.g., images, sketches, tables), integrated motion for enhanced interactivity, adhered to style standards for fonts, colors, and images, and created UI mockups and prototypes illustrating site functionality and appearance.",
    aos: "fade-right",
    aosDuration: "700",
  },
  {
    title: "UX/UI Designer at Techzone Labs, (Remote)",
    img: { light: Logo2, dark: Logo5 },
    date: "Nov 2023 - Apr 2024",
    description:
      "Crafting intuitive digital experiences for products, I collaborate closely with cross-functional teams to translate user needs into seamless design solutions. My expertise includes wireframing, prototyping, and creating high-fidelity designs to enhance user engagement and satisfaction.",
    aos: "fade-left",
    aosDuration: "800",
  },
  {
    title: "UX/UI Developer at eBSEG, Almaadi",
    img: { light: Logo3, dark: Logo6 },
    date: "Nov 2024 - Present",
    description:
      "Developing wireframes and prototypes while transforming Figma designs into functional layouts using HTML, Tailwind CSS, and JavaScript frameworks. Focusing on responsive design and accessibility. Collaborating with cross-functional teams to implement user feedback and maintain consistent design standards across the platform.",
    aos: "fade-right",
    aosDuration: "900",
  },
];

const Work = () => {
  return (
    <>
      <div
        className="flex flex-col py-[100px] justify-center items-center gap-24 overflow-x-hidden edk:-mx-20 edk:px-20 px-12 -mx-12"
        id="Work"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h2 className="text-h-2 dark:text-netu-50 text-netu-900 font-bold tb:text-h-3 mb:text-h-3 h-[78px] text-center leading-none">
            Work Experience
          </h2>
          <p className="text-h-4 dark:text-netu-500 text-netu-700 font-normal text-center leading-[130%] mb:text-p tb:text-p">
            Highlighting my career journey, showcasing roles, achievements, and
            skills I've mastered.
          </p>
        </div>
        <div className="flex flex-col gap-8 relative w-full">
          <span className="block h-full w-px dark:bg-netu-500/30 bg-netu-500 border-netu-600 rounded-sm absolute inset-0 m-auto mb:hidden tb:hidden sdk:hidden dk:hidden"></span>
          {workData.map((work, index) => (
            <div
              key={index}
              data-aos={work.aos}
              data-aos-duration={work.aosDuration}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } w-full`}
            >
              <div className="flex flex-col dark:bg-Primary-900/50 bg-Primary-100/50 p-8 rounded-lg h-fit w-2/5 mb:w-full tb:w-full sdk:w-full dk:w-full gap-5 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="dark:text-netu-50 text-netu-950 text-p leading-[130%]">
                      {work.title}
                    </span>
                    <p className="text-sm-cap  mb:w-max dark:text-netu-500 text-netu-600">
                      {work.date}
                    </p>
                  </div>
                  <Image
                    className="mb:w-1/4 tb:w-[15%] sdk:w-[10%] dk:w-[10%] w-1/6 dark:block hidden"
                    src={work.img.light}
                    alt={`${work.title} Logo`}
                  />
                  <Image
                    className="mb:w-1/4 tb:w-[15%] sdk:w-[10%] dk:w-[10%] w-1/6 dark:hidden block"
                    src={work.img.dark}
                    alt={`${work.title} Logo`}
                  />
                </div>
                <p className="leading-[145%] font-normal text-p mt-2 dark:text-netu-500 text-netu-600 mb:text-sm-cap">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
