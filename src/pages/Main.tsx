import {
  IoAdd,
  IoMenuOutline,
  IoFilterOutline,
  IoStarOutline,
} from "react-icons/io5";
import { BiSortAlt2 } from "react-icons/bi";
import { RiDraggable } from "react-icons/ri";

import logo from "../assets/images/logo.png";

const Main = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="fixed left-0 top-0 w-80 h-screen bg-gray-950 text-xl">
        <section className="w-full h-16 flex items-center justify-between">
          <img src={logo} alt="TaskForge" className="ml-6 w-10 h-auto" />
          <h1 className="text-gray-800 dark:text-gray-100">TaskForge</h1>
          <span className="cursor-pointer mr-6 p-2 rounded-full hover:bg-white hover:shadow focus:bg-white group dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm dark:focus:bg-gray-600">
            <IoMenuOutline className="text-gray-800 text-2xl  dark:text-gray-100" />
          </span>
        </section>
        <section className="px-6 py-3 text-gray-800 cursor-pointer dark:text-gray-100 hover:bg-gray-700">
          <h2 className="text-sm mb-1">Todo List</h2>
          <h3 className="text-xs">8 Todo(s)</h3>
        </section>
        <section className="w-full px-6 py-3 text-gray-800 cursor-pointer dark:text-gray-100 hover:bg-gray-700">
          <h2 className="text-sm mb-1">Todo List</h2>
          <h3 className="text-xs">8 Todos</h3>
        </section>
        <section className="px-6 py-3 text-gray-800 cursor-pointer dark:text-gray-100">
          <h2 className="text-sm mb-1">Todo List</h2>
          <h3 className="text-xs">8 Todos</h3>
        </section>
        <section className="px-6 py-3 text-gray-800 cursor-pointer dark:text-gray-100">
          <h2 className="text-sm mb-1">Todo List</h2>
          <h3 className="text-xs">8 Todos</h3>
        </section>
        <button className="mx-auto my-3 px-20 py-3 text-gray-800 dark:text-gray-100 flex justify-center items-center border-gray-100 rounded-full border-2">
          <IoAdd />
          Add List
        </button>
      </div>
      <div className="ml-80 w-full h-full">
        <div className="mx-6 mt-20 grid grid-cols-6 grid-rows-3 text-gray-800 dark:text-gray-100">
          <h2 className=" text-xl font-bold col-span-full row-span-1">
            Todo List
          </h2>

          <h3 className="col-span-3 row-span-1 my-auto">Todo</h3>
          <h3 className="col-span-1 row-span-1 flex justify-center items-center">
            Creation Date
          </h3>
          <h3 className="col-start-5 col-end-6 flex justify-center items-center">
            Favourite
          </h3>
          <section className="col-span-1 row-span-1 text-2xl flex justify-end items-center">
            <span className="cursor-pointer p-2 rounded-xl hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm">
              <BiSortAlt2 />
            </span>
            <span className="cursor-pointer p-2 rounded-xl hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm">
              <IoFilterOutline />
            </span>
          </section>
          <h4 className="col-span-3 row-span-1 my-auto">First Task</h4>
          <h4 className="col-span-1 row-span-1 flex justify-center items-center">
            27-02-1992
          </h4>
          <h4 className="col-span-1 row-span-1 flex justify-center items-center">
            <span className="cursor-pointer p-2 rounded-xl text-xl hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm">
              <IoStarOutline />
            </span>
          </h4>

          <h4 className="col-span-1 row-span-1 flex justify-end items-center">
            <span className="cursor-grab p-2 rounded-xl text-xl">
              <RiDraggable />
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Main;
