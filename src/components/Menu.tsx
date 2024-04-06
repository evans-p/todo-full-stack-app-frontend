import { IoAdd } from "react-icons/io5";

import logo from "../assets/images/logo.png";

const Menu = () => {
  return (
    <div className="fixed left-0 top-0 w-80 h-screen bg-gray-950 text-xl">
      <section className="w-full h-16 flex items-center justify-start">
        <img src={logo} alt="TaskForge" className="ml-6 w-10 h-auto" />
        <h1 className="text-gray-800 dark:text-gray-100 ml-12">TaskForge</h1>
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
  );
};

export default Menu;
