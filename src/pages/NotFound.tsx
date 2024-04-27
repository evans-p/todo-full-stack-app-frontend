import { memo } from "react";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import notFound from "../assets/animations/notFound.json";

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <Lottie
        height={400}
        width={400}
        options={{
          loop: true,
          autoplay: true,
          animationData: notFound,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
      />
      <h1 className="text-center text-gray-800 text-2xl dark:text-gray-100">
        {t("notFound.title")}
      </h1>
    </div>
  );
};

export default memo(NotFound);
