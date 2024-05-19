import { memo } from "react";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import internalServerError from "../assets/animations/internalServerError.json";

const ServerError: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Lottie
        height={400}
        width={400}
        options={{
          loop: false,
          autoplay: true,
          animationData: internalServerError,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
      />
      <h1 className="text-center text-gray-800 text-2xl dark:text-gray-100 px-52">
        {t("serverError.title")}
      </h1>
    </div>
  );
};

export default memo(ServerError);
