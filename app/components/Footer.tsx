import Image from "next/image";
import Logo from "../assets/Logo.svg";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const navLinks = [
  { id: "Home", label: "Home" },
  { id: "Work", label: "Work" },
  { id: "Projects", label: "Projects" },
  { id: "Certificates", label: "Certificates" },
];
const Footer = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="flex flex-col pt-14 pb-10 gap-5 items-center"
      >
        <div className="flex justify-between gap-8 items-center w-full sdk:flex-col tb:flex-col mb:flex-col ">
          <a href="/">
            <Image src={Logo} alt="Logo" width={32} height={32} />
          </a>
          <ul className="flex text-p text-netu-100 font-medium items-center gap-[10px] ml-24 sdk:ml-0 tb:ml-0 tb:text-sm-cap mb:ml-0 mb:text-sm-cap">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="px-4 py-2 hover:text-accent-default transition-all duration-300 inline-block ease-in-out transform hover:-translate-y-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.facebook.com/eslaam3del/"
              target="_blank"
              title="Facebook"
            >
              <FaFacebook className="h-5 w-5 text-netu-600 hover:text-white transition-all duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/eslaam-adel/"
              target="_blank"
              title="Linkdin"
            >
              <FaLinkedin className="h-5 w-5 text-netu-600 hover:text-white transition-all duration-200" />
            </a>
            <a
              href="https://www.instagram.com/eslammadeel/"
              target="_blank"
              title="instgram"
            >
              <FaInstagram className="h-5 w-5 text-netu-600 hover:text-white transition-all duration-200" />
            </a>
            <a href="https://x.com/eslammadeel" target="_blank" title="Twitter">
              <FaXTwitter className="h-5 w-5 text-netu-600 hover:text-white transition-all duration-200" />
            </a>
            <a
              href="https://github.com/eslaamadel"
              target="_blank"
              title="Github"
            >
              <FaGithub className="h-5 w-5 text-netu-600 hover:text-white transition-all duration-200" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="w-full h-[1px] bg-netu-600"></div>
          <p className="text-netu-100 text-sm-cap">
            © 2024 Eslam. All right reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
