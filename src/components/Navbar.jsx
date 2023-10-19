import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constant";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full font-poppins  bg-indigo-950 fixed z-[99]">
      <div className=" flex container  mx-auto px-6 py-4 items-center justify-between  md:px-0">
        <a href="#about">
          <img src={logo} alt="logo" />
        </a>
        <ul className="hidden sm:flex items-center gap-4">
          {navLinks.map((nav, index) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className="text-white font-thin hover:text-indigo-400"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile menu */}
        <div className=" flex flex-1 justify-end items-center sm:hidden">
          {/* mobile menu icon */}
          <img
            // {/* if toggle is turn on then show close icon otherwise show menu*/}
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[20px]  object-contain"
            // setToggle prev and then not prev
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : " hidden"
            } p-6 bg-indigo-950 absolute top-20 right-0 mx-6 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end p-2 mx-auto flex-col flex-1 ">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-secondary hover:text-darkpurple `}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
