import { IoMenuOutline } from "react-icons/io5";

import logo from "../assets/images/logo.png";

const Main = () => {
  return (
    <div className="h-screen w-screen">
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
      </div>
    </div>
  );
};

export default Main;
