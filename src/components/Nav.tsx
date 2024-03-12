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
      <div className="flex justify-between items-center">
        <span className="cursor-pointer p-2 rounded-xl hover:bg-white">
          <IoMoonOutline className="text-gray-800 text-2xl" />
        </span>
        <button className="flex items-center cursor-pointer p-2 rounded-xl hover:bg-white focus:bg-white group">
          <IoGlobeOutline className="text-gray-800 text-2xl cursor-pointer ml-2 mr-2" />
          <p className="mr-1">EL</p>
          <IoIosArrowDown className="text-gray-800" />
          <section className="fixed top-12 right-5 w-48 h-48 bg-white hidden group-focus:block"></section>
        </button>
        <span className="mr-6 cursor-pointer p-2 rounded-xl hover:bg-white">
          <IoPersonOutline className="text-gray-800 text-2xl" />
        </span>
      </div>
    </nav>
  );
};

export default Nav;
