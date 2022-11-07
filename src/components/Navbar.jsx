import { useState } from "react";
import { navLinks } from "../constants";
import { menu, close } from "/assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex sm:pr-[4rem] lg:pr-[4rem] xl:pr-[19rem] justify-between items-center navbar">
      <ul className="list-none py-2 text-[1.2rem] sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`vertical font-normal cursor-pointer text-[1.3rem] 
            ${
              index === 0
                ? "underline underline-offset-8 decoration-main"
                : "hover:underline hover:underline-offset-8 decoration-main"
            }
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden fixed top-[5%] right-[10%] z-50 bg-primary">
        <div className="border-2 border-main p-[5px]">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
      </div>

      <ul
        className={`sm:hidden h-[100vh] w-[100vw] bg-secondary fixed top-0 z-40 list-none flex flex-col justify-center items-center 
        ${toggle ? "sidebar_on" : "sidebar_off"}`}
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="font-normal cursor-pointer text-[2rem] text-black mb-10"
          >
            <a href={`#${nav.id}`} onClick={() => setToggle((prev) => !prev)}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
