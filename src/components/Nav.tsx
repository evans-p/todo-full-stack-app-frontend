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
        <span className="cursor-pointer p-2 rounded-xl hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm">
          <IoMoonOutline className="text-gray-800 text-2xl dark:text-gray-100" />
        </span>
        <button className="flex items-center cursor-pointer p-2 rounded-xl group hover:bg-white hover:shadow focus:shadow focus:bg-white dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm dark:focus:bg-gray-600 dark:focus:shadow-gray-400 dark:focus:shadow-sm">
          <IoGlobeOutline className="text-gray-800 text-2xl cursor-pointer ml-2 mr-2 dark:text-gray-100" />
          <p className="mr-1 dark:text-gray-100">EL</p>
          <IoIosArrowDown className="text-gray-800 dark:text-gray-100" />
          <section className="fixed top-14 right-10 bg-white rounded-md hidden shadow group-focus:inline group-focus:shadow dark:bg-gray-600 dark:group-focus:shadow-gray-400">
            <span className="rounded-md hover:bg-gray-100 w-36 h-16 flex justify-center items-center dark:text-gray-100 dark:hover:bg-gray-500">
              Ελληνικά (EL)
            </span>
            <span className="rounded-md hover:bg-gray-100 w-36 h-16 flex justify-center items-center dark:text-gray-100 dark:hover:bg-gray-500">
              English (EN)
            </span>
          </section>
        </button>
        <button className="mr-6 p-2 rounded-xl hover:bg-white hover:shadow focus:shadow focus:bg-white group dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm dark:focus:bg-gray-600 dark:focus:shadow-gray-400 dark:focus:shadow-sm">
          <IoPersonOutline className="text-gray-800 text-2xl dark:text-gray-100" />
          <section className="fixed top-14 right-2 bg-white rounded-md hidden shadow group-focus:inline group-focus:shadow dark:bg-gray-600 dark:group-focus:shadow-gray-400">
            <span className="rounded-md hover:bg-gray-100 w-36 h-16 flex justify-center items-center font-medium dark:text-gray-100 dark:hover:bg-gray-500">
              Login
            </span>
          </section>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
