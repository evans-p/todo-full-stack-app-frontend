import { Link } from "react-router-dom";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { IoArrowForward } from "react-icons/io5";

import RoutingConstants from "../constants/RoutingConstants";

import list from "../assets/images/list.png";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-screen bg-gradient-image bg-contain bg-no-repeat bg-bottom flex justify-center items-center">
      <section className="w-[700px] h-96 bg-white bg-opacity-40 backdrop-blur-xl rounded ring-2 ring-black/5 flex justify-around items-center">
        <section className="flex flex-col items-start justify-start">
          <h1 className="text-6xl text-gray-800 font-bold mb-4 dark:text-gray-100">
            TaskForge
          </h1>
          <h2 className=" text-gray-800 tracking-wide dark:text-gray-100">
            {t("home.subtitle.primary")}
            <span className="font-medium">{t("home.subtitle.secondary")}</span>
          </h2>
          <Link
            to={RoutingConstants.LOGIN}
            className="bg-blue-900 text-lg text-gray-100 shadow w-full mt-4 py-2 flex items-center justify-center rounded-full hover:bg-blue-800 hover:shadow-md group"
          >
            {t("home.getStartedButton")}
            <IoArrowForward className="ml-4 text-xl transition-all group-hover:translate-x-3" />
          </Link>
        </section>
        <img src={list} className="h-48 w-48 animate-floating" />
      </section>
    </div>
  );
};

export default memo(Home);
