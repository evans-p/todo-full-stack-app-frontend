import { memo } from "react";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <div className="flex">
      <Menu />
      <Outlet />
    </div>
  );
};

export default memo(Main);
