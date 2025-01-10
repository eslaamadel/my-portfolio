"use client";
import { useEffect, useRef, useState } from "react";
import "../globals.css";
import { Pivot as Hamburger } from "hamburger-react";
import Logo from "../assets/Logo"; /* convert svg to react component from SVGR Playground Website and make the fill "currentColor" in component */
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
        <div className="flex px-[38px] py-[16px] bg-Primary-100/50 dark:bg-Primary-900 rounded-[80px] w-[888px] justify-between items-center tb:w-full mb:w-full">
          <a href="/" aria-label="Home">
            <Logo className="text-accent-default dark:text-white" />
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
          className={`flex-col text-h-3 dark:text-netu-100 text-netu-800 font-semibold gap-[10px] dark:bg-bg-dark-color/60 bg-bg-white-color/60  backdrop-blur-md h-full w-0 fixed top-0 left-0 mb:flex tb:flex sdk:flex justify-center overflow-hidden ${
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
