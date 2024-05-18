import { memo, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IoAdd, IoStarOutline } from "react-icons/io5";
import DataContext from "../contexts/DataContext";

import logo from "../assets/images/logo.png";
import RoutingConstants from "../constants/RoutingConstants";

const Menu = () => {
  const { t } = useTranslation();
  const { data } = useContext(DataContext);

  const renderlists = (): JSX.Element[] | null => {
    if (data) {
      return data._embedded.todoListList.map((list) => {
        return (
          <Link
            to={RoutingConstants.LISTS + list.todoListId}
            key={list.todoListId}
          >
            <section
              key={list.todoListId}
              className="pl-6 py-2 cursor-pointer hover:bg-gray-700"
            >
              <h2 className="text-sm mb-1">{list.title}</h2>
              <h3 className="text-xs">
                {String(list.todos.length) +
                  " " +
                  (list.todos.length != 1
                    ? t("main.menu.multipleTodos")
                    : t("main.menu.singleTodo"))}
              </h3>
            </section>
          </Link>
        );
      });
    }
    return null;
  };

  return (
    <div className="fixed left-0 top-0 w-80 h-screen bg-gray-950 text-xl text-gray-100">
      <div className="w-full h-16 flex items-center justify-start mb-4">
        <img src={logo} alt="TaskForge" className="ml-6 w-10 h-auto" />
        <h1 className="text-gray-100 ml-12">TaskForge</h1>
      </div>
      <div className="w-full h-[calc(100%-13rem)] overflow-scroll no-scrollbar">
        {renderlists()}
      </div>
      <Link
        to={"new"}
        className="fixed bottom-16 w-80 h-16 grid grid-cols-6 grid-rows-1 bg-gray-700 hover:bg-gray-500"
      >
        <IoAdd className="col-span-1 row-span-1 mx-auto my-auto" />
        <span className="col-span-5 row-span-1 my-auto mr-auto">
          {t("main.menu.addListButton")}
        </span>
      </Link>
      <button className="fixed bottom-0 w-80 h-16 grid grid-cols-6 grid-rows-1 bg-gray-700 hover:bg-gray-500">
        <IoStarOutline className="col-span-1 row-span-1 mx-auto my-auto" />
        <span className="col-span-5 row-span-1 my-auto mr-auto">
          {t("main.menu.favouriteTodosButton")}
        </span>
      </button>
    </div>
  );
};

export default memo(Menu);
