import { memo } from "react";
import { useTranslation } from "react-i18next";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

import logo from "../assets/images/logo.png";
import { redirect } from "react-router-dom";

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
        <div className="flex justify-center items-center mt-6">
          <GoogleLogin
            onSuccess={(response: CredentialResponse) => {
              console.log(response.clientId);
            }}
            onError={() => {
              redirect("/");
            }}
            width={250}
            shape="square"
            size="large"
          />
        </div>
      </section>
    </div>
  );
};

export default memo(Login);
