import { useContext, useRef, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  IoPersonOutline,
  IoGlobeOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import ThemeContext from "../contexts/ThemeContext";
import StringConstants from "../constants/StringConstants";
import RoutingConstants from "../constants/RoutingConstants";

const Nav = () => {
  const languageRef = useRef<HTMLButtonElement>(null);
  const loginRef = useRef<HTMLButtonElement>(null);
  const { theme, updateTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const updateLanguage = (language: string): void => {
    if (
      language == StringConstants.ENGLISH ||
      language == StringConstants.GREEK
    ) {
      localStorage.setItem(StringConstants.LANGUAGE, language);
      i18n.changeLanguage(language);
      languageRef.current?.blur();
    }
  };

  const navigateToLogin = () => {
    if (location.pathname != RoutingConstants.LOGIN) {
      navigate(RoutingConstants.LOGIN);
    }
    loginRef.current?.blur();
  };

  return (
    <nav className="fixed top-0 right-0 h-16 flex justify-end items-center z-10">
      <div className="flex justify-between items-center">
        <span
          className="cursor-pointer p-2 rounded-xl hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm"
          onClick={updateTheme}
        >
          {theme === StringConstants.DARK ? (
            <IoSunnyOutline className="text-gray-800 text-2xl dark:text-gray-100" />
          ) : (
            <IoMoonOutline className="text-gray-800 text-2xl dark:text-gray-100" />
          )}
        </span>
        <button
          className="w-24 flex items-center cursor-pointer p-2 rounded-xl group hover:bg-white hover:shadow focus:shadow focus:bg-white dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm dark:focus:bg-gray-600 dark:focus:shadow-gray-400 dark:focus:shadow-sm"
          ref={languageRef}
        >
          <IoGlobeOutline className="text-gray-800 text-2xl cursor-pointer ml-2 mr-2 dark:text-gray-100" />
          <p className="mr-1 dark:text-gray-100">
            {i18n.language === StringConstants.GREEK ? "EL" : "EN"}
          </p>
          <IoIosArrowDown className="text-gray-800 dark:text-gray-100" />
          <section className="fixed top-14 right-10 bg-white rounded-md hidden shadow group-focus:inline group-focus:shadow dark:bg-gray-600 dark:group-focus:shadow-gray-400">
            <span
              className={"rounded-md hover:bg-gray-300 w-36 h-16 flex justify-center items-center dark:text-gray-100 dark:hover:bg-gray-500".concat(
                i18n.language === StringConstants.GREEK ? " font-semibold" : ""
              )}
              onClick={() => updateLanguage(StringConstants.GREEK)}
            >
              Ελληνικά (EL)
            </span>
            <span
              className={"rounded-md hover:bg-gray-300 w-36 h-16 flex justify-center items-center dark:text-gray-100 dark:hover:bg-gray-500".concat(
                i18n.language === StringConstants.GREEK ? " " : " font-semibold"
              )}
              onClick={() => updateLanguage(StringConstants.ENGLISH)}
            >
              English (EN)
            </span>
          </section>
        </button>
        <button
          ref={loginRef}
          className="mr-6 p-2 rounded-xl hover:bg-white hover:shadow focus:shadow focus:bg-white group dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm dark:focus:bg-gray-600 dark:focus:shadow-gray-400 dark:focus:shadow-sm"
        >
          <IoPersonOutline className="text-gray-800 text-2xl dark:text-gray-100" />
          <section className="fixed top-14 right-2 bg-white rounded-md hidden shadow group-focus:inline group-focus:shadow dark:bg-gray-600 dark:group-focus:shadow-gray-400">
            <span
              onClick={navigateToLogin}
              className="z-50 rounded-md hover:bg-gray-300 w-36 h-16 flex justify-center items-center font-medium dark:text-gray-100 dark:hover:bg-gray-500"
            >
              {t("nav.login")}
            </span>
          </section>
        </button>
      </div>
    </nav>
  );
};

export default memo(Nav);
