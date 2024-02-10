/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { styles } from "../styles";
import { navLinks } from "../constants/index.ts";
import { Cross as Hamburger } from "hamburger-react";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl m-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Olabayoji <span className=" sm:inline hidden"> Oladepo</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                link.title === active ? "text-white" : "text-secondary"
              } cursor-pointer font-medium text-[18px] hover:text-white duration-500`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* Mobile navbar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            className=" relative z-20 focus:outline-none"
          >
            <Hamburger toggled={menuOpen} />
          </button>
          <div
            className={`${
              menuOpen ? "flex w-2/4  " : "w-0 overflow-hidden"
            } black-gradient absolute  top-0 right-0 h-screen flex flex-col items-center justify-start  gap-10 duration-300`}
          >
            <ul className="list-none flex sm:hidden flex-col gap-10 relative top-20">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    link.title === active ? "text-white" : "text-secondary"
                  } cursor-pointer font-medium text-[18px] hover:text-white duration-500 z-40`}
                  onClick={() => {
                    setActive(link.title);
                    setMenuOpen(!menuOpen);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
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
