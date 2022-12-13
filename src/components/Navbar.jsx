import { useState } from "react";
import { navLinks } from "../constants";
import { SlArrowDown } from "react-icons/sl";
import { arrow } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(0);

  return (
    <nav className="w-full flex sm:pr-[4rem] lg:pr-[4rem] xl:pr-[19rem] xl2:pr-[30rem] justify-between items-center navbar">
      <ul className="list-none py-2 sm:flex hidden justify-end items-center flex-1 xs:text-[1.5rem] md:text-[1.3rem] ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`vertical font-normal cursor-pointer 
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

      <div className="sm:hidden w-[25%] fixed top-[5%] right-[0] z-50">
        {/* <div className="border-2 border-main p-[5px]"> */}
        <div className="progress bg-secondary shadow-md">
          <div className="px-4 py-2">
            <SlArrowDown
              className={`w-[28px] h-[28px] text-main font-bold icon ${
                toggle % 2 === 0 ? "nav_icon" : "nav_icon_ch"
              }`}
              onClick={() => setToggle(toggle + 1)}
            />
          </div>
        </div>
      </div>

      <ul
        className={`sm:hidden h-[100vh] w-[100vw] bg-secondary fixed top-0 z-40 list-none flex flex-col justify-center items-center 
        ${
          toggle === 0
            ? "hidden"
            : toggle % 2 === 0
            ? "sidebar_off"
            : "sidebar_on"
        }`}
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="w-[100vw] px-[15%] cursor-pointer text-black my-8"
          >
            <a
              className="grid grid-cols-[50%_40%] items-center border-b-2 border-black w-[100vw] text-[2.5rem]"
              href={`#${nav.id}`}
              onClick={() => setToggle(toggle + 1)}
            >
              {nav.title}
              {navLinks.length === index + 1 && (
                <img
                  src={arrow}
                  alt={nav.title}
                  className={`w-[50%] ${toggle % 2 === 0 ? null : "arrow"}`}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
