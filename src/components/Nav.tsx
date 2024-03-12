import {
  IoPersonOutline,
  IoGlobeOutline,
  IoMoonOutline,
} from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/images/logo.png";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen h-16 flex justify-between items-center z-50">
      <img src={logo} alt="TaskForge" className="w-12 h-auto ml-8" />
      <div className="flex justify-between items-center">
        <span className="cursor-pointer p-2 rounded-xl hover:bg-white hover:shadow">
          <IoMoonOutline className="text-gray-800 text-2xl" />
        </span>
        <button className="flex items-center cursor-pointer p-2 rounded-xl hover:bg-white hover:shadow focus:shadow focus:bg-white group">
          <IoGlobeOutline className="text-gray-800 text-2xl cursor-pointer ml-2 mr-2" />
          <p className="mr-1">EL</p>
          <IoIosArrowDown className="text-gray-800" />
          <section className="fixed top-14 right-10 bg-white rounded-md hidden shadow group-focus:inline group-focus:shadow">
            <span className="w-full p-6 block rounded-md hover:bg-gray-100">
              <p>Ελληνικά (EL)</p>
            </span>
            <span className="w-full p-6 block rounded-md hover:bg-gray-100">
              <p>English (EN)</p>
            </span>
          </section>
        </button>
        <button className="mr-6 p-2 rounded-xl hover:bg-white hover:shadow focus:shadow focus:bg-white group">
          <IoPersonOutline className="text-gray-800 text-2xl" />
          <section className="fixed top-14 right-2 bg-white rounded-md hidden shadow group-focus:inline group-focus:shadow w-60 h-60"></section>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
