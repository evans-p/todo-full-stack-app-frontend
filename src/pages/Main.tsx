import { IoMenuOutline } from "react-icons/io5";

import logo from "../assets/images/logo.png";

const Main = () => {
  return (
    <div className="h-screen w-screen">
      <div className="fixed left-0 top-0 w-80 h-screen bg-gray-950 text-xl">
        <section className="w-full h-16 flex items-center justify-between">
          <img src={logo} alt="TaskForge" className="ml-6 w-10 h-auto" />
          <h1 className="text-gray-800 dark:text-gray-100">TaskForge</h1>
          <span className=" cursor-pointer mr-6 p-2 rounded-full hover:bg-white hover:shadow focus:bg-white group dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm dark:focus:bg-gray-600">
            <IoMenuOutline className="text-gray-800 text-2xl  dark:text-gray-100" />
          </span>
        </section>
        <section className="w-full h-10 flex items-center ml-6 text-gray-800 text-lg dark:text-gray-100">
          <h2>Lists</h2>
        </section>
      </div>
    </div>
  );
};

export default Main;
