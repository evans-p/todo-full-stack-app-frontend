import { IoFilterOutline, IoStarOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import { BiSortAlt2 } from "react-icons/bi";
import { RiDraggable } from "react-icons/ri";
import Menu from "../components/Menu";

const Main = () => {
  const renderTodos = (): JSX.Element[] => {
    return [...Array(20).keys()].map(() => (
      <div className="mx-6 mt-1 grid grid-cols-6 grid-rows-1 cursor-pointer dark:bg-gray-700 bg-gray-300 rounded-sm">
        <h4 className="col-span-3 row-span-1 pl-3 text-sm flex items-center justify-start">
          Task
        </h4>
        <h4 className="col-span-1 row-span-1 flex justify-center items-center text-sm">
          27-02-1992
        </h4>
        <section className="col-span-1 row-span-1 flex justify-center items-center">
          <span className="cursor-pointer p-1 rounded-full hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm">
            <IoStarOutline />
          </span>
        </section>
        <section className="col-span-1 row-span-1 text-2xl flex justify-end items-center mr-3">
          <span className="cursor-grab p-1">
            <RiDraggable />
          </span>
        </section>
      </div>
    ));
  };
  return (
    <div className="flex">
      <Menu />
      <div className="ml-80 w-full h-full text-gray-800 dark:text-gray-100">
        <div className="mx-6 mt-20 grid grid-cols-6 grid-rows-2">
          <h2 className="text-xl font-bold col-span-full row-span-1 ml-3">
            Todo List
          </h2>
          <h3 className="col-span-3 row-span-1 my-auto ml-3">Todo</h3>
          <h3 className="col-span-1 row-span-1 flex justify-center items-center">
            Creation Date
          </h3>
          <h3 className="col-start-5 col-end-6 flex justify-center items-center">
            Favourite
          </h3>
          <section className="col-span-1 row-span-1 text-2xl flex justify-end items-center pr-2">
            <span className="cursor-pointer p-2 rounded-full hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm">
              <BiSortAlt2 />
            </span>
            <span className="cursor-pointer p-2 rounded-full hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm">
              <IoFilterOutline />
            </span>
          </section>
        </div>
        <div className="h-40 overflow-scroll">{renderTodos()}</div>
        <div className="mx-6 my-6 rounded-sm  dark:bg-gray-700 bg-gray-300">
          <button className="w-full group">
            <section className="flex items-center justify-between">
              <h3 className="pl-3">Completed Todos</h3>
              <span className="text-2xl mr-2 p-2 cursor-pointer rounded-full hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm">
                <IoIosArrowDropdown />
              </span>
            </section>
            <section className="w-full h-48 overflow-scroll hidden group-focus:grid">
              {renderTodos()}
            </section>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
