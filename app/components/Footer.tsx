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
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="text-accent-default dark:text-white"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.9692 3.99248C25.8792 4.4856 25.5278 4.87887 25.2924 5.31466C25.0563 5.7523 24.811 6.17824 24.5545 6.60602C24.0485 7.4511 23.5658 8.33255 22.9556 9.06545C17.4752 9.02908 11.5874 9.14373 6.07674 9.00381C5.9738 7.47452 5.97504 5.52177 6.07674 3.99248C12.6395 3.86181 19.2054 3.90002 25.9692 3.99248Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.9692 13.8925C25.9532 14.34 25.5901 14.6402 25.3848 14.9989C25.1876 15.3441 25.0409 15.7016 24.8313 16.0443C24.2359 17.0189 23.6725 18.0797 22.9864 18.9963C21.5595 19.1054 20.1498 18.9439 18.7438 18.9963C15.3455 19.1239 11.8789 18.9963 8.10593 18.9963C7.41741 18.9963 6.7104 19.0986 6.07674 18.9346C5.9738 17.3955 5.97504 15.4316 6.07674 13.8925C12.5619 13.7698 19.341 13.7957 25.9692 13.8925Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26 24.0686C25.9211 24.4945 25.5735 24.7824 25.3848 25.1448C25.2948 25.3181 25.2634 25.5264 25.1697 25.6984C24.8504 26.2833 24.4424 26.8227 24.0935 27.3892C23.744 27.9569 23.4407 28.5696 22.9864 29.0491C17.4616 29.0799 11.6163 29.141 6.10756 29.0183C5.90846 28.27 6.0601 27.3916 6.04592 26.528C6.03174 25.678 5.92079 24.7781 6.10756 24.0378C10.1357 23.9139 14.3088 23.9762 18.4978 23.9762C21.0688 23.9762 23.6004 23.904 26 24.0686Z"
              />
            </svg>
          </a>
          <ul className="flex mb:flex-col mb:gap-1 text-p text-netu-100 font-medium items-center gap-[10px] ml-24 sdk:ml-0 tb:ml-0 tb:text-sm-cap mb:ml-0 mb:text-sm-cap">
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
