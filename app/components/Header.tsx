"use client";
import { useEffect, useRef, useState } from "react";
import "../globals.css";
import { Pivot as Hamburger } from "hamburger-react";
import { Button } from "@/components/ui/button";
import { LuArrowUpRight } from "react-icons/lu";

const navLinks = [
  { id: "Home", label: "Home" },
  { id: "Work", label: "Work" },
  { id: "Projects", label: "Projects" },
  { id: "Certificates", label: "Certificates" },
];

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null); // Specify the type of the ref

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!menuRef.current) return; // Check if menuRef.current is not null

    const focusableElements = menuRef.current.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    // Handle tab key
    if (event.key === "Tab") {
      if (event.shiftKey) {
        // If shift + tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus(); // Loop back to the last element
        }
      } else {
        // If tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus(); // Loop back to the first element
        }
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      if (menuRef.current) {
        const firstFocusableElement = menuRef.current.querySelector(
          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) as HTMLElement;

        firstFocusableElement.focus();

        // Add event listener to trap focus
        document.addEventListener("keydown", handleKeyDown);
      }
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex mb:flex-col tb:flex-col justify-center py-5 w-full">
        <div className="flex px-[38px] py-[16px] bg-netu-100 dark:bg-Primary-900 rounded-[80px] w-[888px] justify-between items-center tb:w-full mb:w-full">
          <a href="/" aria-label="Home">
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
          <div className="hidden tb:block mb:block sdk:block text-accent-default dark:text-netu-100 hamburger-wrapper">
            <Hamburger
              label="Hamburger menu"
              rounded
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
          <div className="flex gap-4 mb:hidden tb:hidden sdk:hidden items-center">
            <ul className="flex text-p dark:text-netu-100 text-netu-800 font-medium items-center gap-[10px]">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="px-4 py-2 hover:text-accent-default transition-all duration-300 inline-block ease-in-out transform hover:-translate-y-2"
                    tabIndex={0}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="default" size={"lg"} asChild>
              <a
                href="mailto:eslamadelwahba@gmail.com"
                className="flex gap-2 items-center"
              >
                <LuArrowUpRight className="h-5 w-5" /> Get in touch
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <ul
          ref={menuRef}
          className={`flex-col text-h-3 dark:text-netu-100 text-netu-800 font-semibold gap-[10px] bg-bg-color/80 backdrop-blur-md h-full w-0 fixed top-0 left-0 mb:flex tb:flex sdk:flex justify-center overflow-hidden ${
            isOpen ? "mb:w-full tb:w-full sdk:w-full" : "mb:w-0 tb:w-0 sdk:w-0 "
          } transition-all duration-300 ease-in-out dk:transition-none edk:transition-none`}
          onClick={() => setOpen(false)} // Close menu when ul is clicked
        >
          <li className="text-accent-default dark:text-netu-100 fixed z-50 top-[36px] right-[80px]">
            <Hamburger
              label="Hamburger menu"
              rounded
              toggled={isOpen}
              toggle={setOpen}
            />
          </li>

          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="w-fit ml-8 my-2 px-[48px] text-neutral-800 dark:text-netu-100 transition-all duration-300 ease-in-out inline-block hover:text-accent-default hover:-translate-y-2 focus:outline-none focus:text-accent-default focus:-translate-y-2"
                tabIndex={isOpen ? 0 : -1} // Disable tab when ul is closed
              >
                {link.label}
              </a>
            </li>
          ))}

          <Button
            variant="default"
            size={"lg"}
            className="gap-2 ml-20 my-2 w-fit"
            tabIndex={isOpen ? 0 : -1} // Disable tab when ul is closed
            asChild
          >
            <li>
              <a href="mailto:eslamadelwahba@gmail.com" className="flex gap-2">
                <LuArrowUpRight className="h-5 w-5" /> Get in touch
              </a>
            </li>
          </Button>
        </ul>
      </div>
    </>
  );
};

export default Header;
