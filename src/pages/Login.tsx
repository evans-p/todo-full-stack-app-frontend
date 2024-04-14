import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";

import logo from "../assets/images/logo.png";

const Login = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen w-screen bg-gradient-image bg-contain bg-no-repeat bg-bottom flex justify-center items-center">
      <section className="w-96 h-96 bg-white bg-opacity-40 backdrop-blur-xl rounded ring-2 ring-black/5">
        <img src={logo} alt="Logo" className="h-16 mx-auto mt-8 mb-4" />
        <h2 className="text-3xl text-gray-800  tracking-wider text-center dark:text-gray-100">
          {t("login.title")}
        </h2>
        <h1 className="text-5xl text-gray-800 font-bold tracking-wide text-center dark:text-gray-100">
          TaskForge
        </h1>
        <button className="w-80 mx-auto mt-16 rounded-full bg-white hover:bg-gray-100 py-2 px-4 shadow hover:shadow-md flex items-center justify-center">
          <FcGoogle className="text-2xl mr-3" />
          <span className="text-xl text-gray-800 font-semibold">
            {t("login.googleButton")}
          </span>
        </button>
      </section>
    </div>
  );
};

export default Login;
