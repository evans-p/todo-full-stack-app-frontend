import { IoAdd, IoStarOutline } from "react-icons/io5";

import logo from "../assets/images/logo.png";

const Menu = () => {
  const renderlists = (): JSX.Element[] => {
    return [...Array(10).keys()].map(() => (
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
      <div className="w-full h-4/6 overflow-scroll">{renderlists()}</div>
      <button className="fixed bottom-16 w-80 h-16 flex justify-center items-center bg-gray-700 hover:bg-gray-500">
        <IoAdd className="mr-3 absolute left-6" />
        Add List
      </button>
      <button className="fixed bottom-0 w-80 h-16 flex justify-center items-center bg-gray-700 hover:bg-gray-500">
        <IoStarOutline className="mr-3 absolute left-6" />
        Favoutite Todos
      </button>
    </div>
  );
};

export default Menu;
