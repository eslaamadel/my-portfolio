import { MdOutlineLightbulb } from "react-icons/md";
import { IoBrushOutline } from "react-icons/io5";
import { HiOutlineCodeBracket } from "react-icons/hi2";

const servicesData = [
  {
    title: "Product Design",
    description:
      "Crafting innovative and user-centric product solutions that align with business goals and drive digital success.",
    icon: <MdOutlineLightbulb className="w-6 h-6 text-accent-default" />,
    list: [
      "User Research and Personas",
      "UX Strategy and Information Architecture",
      "UX Design and Prototyping",
      "UX Testing and Validation",
    ],
    aosDuration: "800",
  },
  {
    title: "Visual Design",
    description:
      "Designing captivating visuals that merge aesthetics with functionality to enhance brand identity and user engagement.",
    icon: <IoBrushOutline className="w-6 h-6 text-accent-default" />,
    list: [
      "Brand Identity Design",
      "UI Design",
      "Interaction Design",
      "Visual Asset Creation",
    ],
    aosDuration: "900",
  },
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance websites with clean, modern code using HTML, CSS, Tailwind, and Next.js for seamless user experiences across all devices.",
    icon: <HiOutlineCodeBracket className="w-6 h-6 text-accent-default" />,
    list: [
      "Responsive Design",
      "Front-End Development",
      "Next.js Integration",
      "Tailwind CSS",
    ],
    aosDuration: "1000",
  },
];

const Services = () => {
  return (
    <>
      <div className="flex flex-col py-[100px] justify-center items-center gap-24">
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex flex-col justify-center items-center gap-4"
        >
          <h2 className="text-h-2 text-netu-50 font-bold tb:text-h-3 mb:text-h-3">
            My Services
          </h2>
          <p className="text-h-4 text-netu-500 font-normal text-center leading-[130%] mb:text-p tb:text-p">
            See how my expertise and passion translate into impactful design and
            development solutions.
          </p>
        </div>
        <div className="grid w-full edk:grid-cols-3 dk:grid-cols-3 sdk:grid-cols-2 grid-cols-1 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration={service.aosDuration}
              className="flex flex-col gap-3 px-5 py-7 w-full bg-Primary-900 rounded-2xl justify-between"
            >
              <div className="p-2 bg-Primary-400/10 w-fit rounded-md">
                {service.icon}
              </div>
              <div className="flex flex-col">
                <h4 className="text-h-4 font-bold">{service.title}</h4>
                <p className="text-p font-normal text-netu-500 leading-[130%]">
                  {service.description}
                </p>
              </div>
              <ul className="list-disc list-inside text-sm-cap font-normal text-netu-400">
                {service.list.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span className="relative -left-[10px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
