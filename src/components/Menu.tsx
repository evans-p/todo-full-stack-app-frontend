import { IoAdd } from "react-icons/io5";

import logo from "../assets/images/logo.png";

const Menu = () => {
  const renderlists = (): JSX.Element[] => {
    return [...Array(6).keys()].map(() => (
      <section className="pl-6 py-2 cursor-pointer hover:bg-gray-700">
        <h2 className="text-sm mb-1">Todo List</h2>
        <h3 className="text-xs">8 Todo(s)</h3>
      </section>
    ));
  };
  return (
    <div className="fixed left-0 top-0 w-80 h-screen bg-gray-950 text-xl text-gray-100">
      <div className="w-full flex items-center justify-start mt-3 mb-6">
        <img src={logo} alt="TaskForge" className="ml-6 w-10 h-auto" />
        <h1 className="text-gray-100 ml-12">TaskForge</h1>
      </div>
      <div className="w-full h-2/5 overflow-scroll">{renderlists()}</div>
      <button className="mx-auto my-6 px-10 py-2 border-2 border-gray-100 rounded-md flex justify-center items-center hover:bg-gray-700">
        <IoAdd />
        Add List
      </button>
    </div>
  );
};

export default Menu;
