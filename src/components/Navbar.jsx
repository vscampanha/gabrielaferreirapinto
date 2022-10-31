import React from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className=" w-full flex py-6 sm:pr-[4rem] lg:pr-[4rem] xl:pr-[19rem] justify-between items-center navbar">
      <ul className="list-none text-[1.2rem] sm:flex hidden justify-end items-center flex-1">
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
    </nav>
  );
};

export default Navbar;
