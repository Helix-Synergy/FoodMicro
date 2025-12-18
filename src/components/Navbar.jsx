import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Styles/GoogleTranslate.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav_links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-Food-Micro-conclave" },
    { name: "Executive Panel", link: "/executive-panel-members/" },
    { name: "Tracks", link: "/Food-Micro-conference-tracks/" },
    { name: "Orators", link: "/Food-Micro-orators" },
    { name: "Schedule", link: "/Food-Micro-event-schedule" },
    { name: "Venue", link: "/venue" },
    { name: "Event Partners", link: "/event_partners" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 w-full shadow-sm">
      <div className="flex items-center justify-evenly px-2 py-2 md:py-2 transition-all duration-300">
        {/* <div
          className={`transition-all duration-300 ${
            scrolled ? "h-20" : "h-20"
          }`}
        >
          <img
            src={logo}
            alt="FoodMicro Logo"
            className=" w-40 h-40 rounded-full object-cover transition-all duration-300"
            loading="lazy"
            style={{
              height:
                isOpen && window.innerWidth < 1024
                  ? "5rem"
                  : scrolled
                  ? "5rem"
                  : "8rem",
              width:
                isOpen && window.innerWidth < 1024
                  ? "6rem"
                  : scrolled
                  ? "6rem"
                  : "8rem",
              marginTop:
                isOpen && window.innerWidth < 1024
                  ? "0.5rem"
                  : scrolled
                  ? "0rem"
                  : "1rem",

              // 🔥 Add black circular background
              backgroundColor: "black",
            }}
          />
        </div> */}
<div
  className={`transition-all duration-300 overflow-visible ${
    scrolled ? "h-28" : "h-28"
  }`}
>
  <img
    src={logo}
    alt="FoodMicro Logo"
    className="rounded-full object-cover transition-all duration-300 block"
    loading="lazy"
    style={{
      height:
        isOpen && window.innerWidth < 1024
          ? "5rem"
          : scrolled
          ? "5rem"
          : "8rem",
      width:
        isOpen && window.innerWidth < 1024
          ? "6rem"
          : scrolled
          ? "6rem"
          : "8rem",
      marginTop:
        isOpen && window.innerWidth < 1024
          ? "0.25rem"
          : scrolled
          ? "0rem"
          : "0.5rem",
      objectFit: "cover",
    }}
  />
</div>


        <nav
          className={`hidden lg:flex justify-between items-center text-lg font-bold-100 ${
            scrolled ? "gap-8 ml-4" : "gap-6 ml-0"
          }`}
        >
          {nav_links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`hover-underline-animation text-black hover:text-[#6D6D6D] transition ${
                location.pathname === item.link
                  ? "border-[#6D28D9]"
                  : "border-transparent"
              }`}
              style={{
                marginRight: scrolled ? "0px" : "4px",
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-1">
            <Link
              to="https://helixconferences.com/buy-a-ticket"
              className="py-2 px-8 text-white rounded-full bg-one animate-purpleGlow"
              target="blank"
            >
              Register
            </Link>
            <div className="flex flex-col items-start justify-center">
              <div
                id="google_translate_element"
                className="font-sm text-[#6D28D9]"
              ></div>
            </div>
          </div>
        </div>

        <div className="lg:hidden ml-auto z-300">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#6D28D9] px-4 pb-4 space-y-4 shadow-md">
          {nav_links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block text-sm text-white hover:text-black transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-2">
            <div id="google_translate_element" className="mt-2"></div>
            <Link
              to="https://helixconferences.com/buy-a-ticket"
              className="block w-full border border-white text-center py-2 rounded-full text-white hover:bg-white hover:text-[#6D28D9] transition"
            >
              Register
            </Link>
            <div
              id="google_translate_element"
              className="font-sm text-white"
            ></div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
