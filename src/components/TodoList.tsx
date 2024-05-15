import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoFilterOutline, IoStarOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import { BiSortAlt2 } from "react-icons/bi";
import { RiDraggable } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { Outlet, Link } from "react-router-dom";

const TodoList = (props: ITodoList) => {
  const [completedMenuOpen, setCompletedMenuOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const toogleCompletedMenu = () => {
    setCompletedMenuOpen(!completedMenuOpen);
  };

  const renderTodos = (): JSX.Element[] => {
    return props.todos.map((todo) => {
      return (
        <Link to={String(todo.todoId)}>
          <div
            key={todo.todoId}
            className="mx-6 mt-1 grid grid-cols-6 grid-rows-1 cursor-pointer dark:bg-gray-700 bg-gray-300 rounded-sm"
          >
            <h4 className="col-span-3 row-span-1 pl-3 text-sm flex items-center justify-start">
              {todo.title}
            </h4>
            <h4 className="col-span-1 row-span-1 flex justify-center items-center text-sm">
              {todo.created?.split("T")[0].split("-").reverse().join("-")}
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
        </Link>
      );
    });
  };

  const renderCompletedTodos = (): JSX.Element[] => {
    return [...Array(20).keys()].map((x) => (
      <div
        key={x + 30}
        className=" dark:bg-gray-600 bg-gray-200 mt-1 w-full h-8 grid grid-cols-6 grid-rows-1 cursor-pointer"
      >
        <h2 className="col-span-3 row-span-1 ml-3 flex justify-start items-center">
          Todo
        </h2>
        <h4 className="col-span-1 row-span-1 flex justify-center items-center text-sm">
          27-02-1992
        </h4>
        <section className="col-span-1 row-span-1 flex justify-center items-center">
          <span className="cursor-pointer p-1 rounded-full hover:bg-white hover:shadow dark:hover:bg-gray-400 dark:hover:shadow-gray-400 dark:hover:shadow-sm">
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

  const renderHeader = (): JSX.Element => {
    return (
      <div className="mx-6 h-36 flex flex-col items-start justify-end">
        <section className="ml-3 flex justify-center items-center">
          <h2 className="text-xl font-bold">{props.title}</h2>
          <Link
            to="edit"
            className="ml-3 cursor-pointer p-2 rounded-xl hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm"
          >
            <CiEdit className="text-gray-800 text-2xl dark:text-gray-100" />
          </Link>
        </section>
        <section className="w-full grid grid-cols-6 grid-rows-1">
          <h3 className="col-span-3 row-span-1 my-auto ml-3">
            {t("main.list.todo")}
          </h3>
          <h3 className="col-span-1 row-span-1 flex justify-center items-center">
            {t("main.list.creationDate")}
          </h3>
          <h3 className="col-start-5 col-end-6 flex justify-center items-center">
            {t("main.list.favourite")}
          </h3>
          <section className="col-span-1 row-span-1 text-2xl flex justify-end items-center pr-2">
            <span className="cursor-pointer p-2 rounded-full hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm">
              <BiSortAlt2 />
            </span>
            <span className="cursor-pointer p-2 rounded-full hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm">
              <IoFilterOutline />
            </span>
          </section>
        </section>
      </div>
    );
  };

  return (
    <div className="ml-80 w-screen h-screen text-gray-800 dark:text-gray-100">
      <Outlet />
      {renderHeader()}
      <div className="h-[calc(50%-4.5rem)] overflow-scroll no-scrollbar">
        {renderTodos()}
      </div>
      <div className="mx-6 py-3 h-[calc(50%-4.5rem)]">
        <button
          className="w-full dark:bg-gray-700 bg-gray-300 flex justify-between items-center"
          onClick={toogleCompletedMenu}
        >
          <h3 className="pl-3">{t("main.list.completed")}</h3>
          <span className="text-2xl mr-3 p-1 cursor-pointer rounded-full hover:bg-white dark:hover:bg-gray-600">
            <IoIosArrowDropdown />
          </span>
        </button>
        <section
          className={
            completedMenuOpen
              ? "w-full h-[calc(100%-2rem)] overflow-scroll no-scrollbar dark:bg-gray-700 bg-gray-300 rounded-b-sm"
              : "w-full h-[calc(100%-2rem)] overflow-scroll no-scrollbar dark:bg-gray-700 bg-gray-300 rounded-b-sm hidden"
          }
        >
          {renderCompletedTodos()}
        </section>
      </div>
    </div>
  );
};

export default memo(TodoList);
