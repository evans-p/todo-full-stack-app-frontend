import { IoAdd, IoMenuOutline, IoFilterOutline } from "react-icons/io5";
import { BiSortAlt2 } from "react-icons/bi";

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
        <div className="mx-6 mt-20">
          <h2 className="text-gray-800 dark:text-gray-100 text-xl font-bold">
            Todo List
          </h2>
          <section className="grid grid-cols-6">
            <h3 className="col-start-1 col-end-4 text-gray-800 dark:text-gray-100 mt-3">
              Todo
            </h3>
            <h3 className="col-start-4 col-end-5 text-gray-800 dark:text-gray-100 mt-3">
              Creation Date
            </h3>
            <h3 className="col-start-5 col-end-6 text-gray-800 dark:text-gray-100 mt-3">
              Favourite
            </h3>
            <section className="col-start-6 col-end-7 flex justify-end mr-6">
              <span className="cursor-pointer p-2 rounded-xl hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm">
                <BiSortAlt2 className="text-gray-800 text-2xl dark:text-gray-100" />
              </span>
              <span className=" cursor-pointer p-2 rounded-xl hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm">
                <IoFilterOutline className="text-gray-800 text-2xl dark:text-gray-100" />
              </span>
            </section>
          </section>
          <section className="grid grid-cols-6 h-12 bg-gray-900 cursor-pointer">
            <h3 className="col-start-1 col-end-4 text-gray-800 dark:text-gray-100 my-auto">
              Todo
            </h3>
            <h3 className="co4-start-1 col-end-5 text-gray-800 dark:text-gray-100 my-auto">
              Todo
            </h3>

            <h3 className="co4-start-5 col-end-6 text-gray-800 dark:text-gray-100 my-auto">
              Todo
            </h3>
            <h3 className="co4-start-6 col-end-7 text-gray-800 dark:text-gray-100 mt-3 flex justify-end mr-6">
              Todo
            </h3>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Main;
