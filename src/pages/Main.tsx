import { IoFilterOutline, IoStarOutline } from "react-icons/io5";
import { BiSortAlt2 } from "react-icons/bi";
import { RiDraggable } from "react-icons/ri";
import Menu from "../components/Menu";

const Main = () => {
  return (
    <div className="flex">
      <Menu />
      <div className="ml-80 w-full h-full">
        <div className="mx-6 mt-20 grid grid-cols-6 grid-rows-2 text-gray-800 dark:text-gray-100">
          <h2 className="text-xl font-bold col-span-full row-span-1">
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
        </div>
      </div>
    </div>
  );
};

export default Main;
