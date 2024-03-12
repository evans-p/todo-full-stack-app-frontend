import {
  IoPersonOutline,
  IoGlobeOutline,
  IoMoonOutline,
} from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/images/logo.png";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen h-16 flex justify-between items-center">
      <img src={logo} alt="TaskForge" className="w-10 h-auto ml-8" />
      <section className="flex justify-between items-center">
        <IoMoonOutline className="text-gray-800 text-2xl cursor-pointer ml-2 " />
        <span className="flex ml-3 mr-3 items-center cursor-pointer">
          <IoGlobeOutline className="text-gray-800 text-2xl cursor-pointer ml-2 mr-2" />
          <p className="mr-1">EL</p>
          <IoIosArrowDown className="text-gray-800" />
        </span>
        <IoPersonOutline className="text-gray-800 text-2xl mr-8 cursor-pointer" />
      </section>
    </nav>
  );
};

export default Nav;
