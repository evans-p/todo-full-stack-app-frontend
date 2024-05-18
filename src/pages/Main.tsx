import { memo, useContext, useEffect } from "react";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";
import DataContext from "../contexts/DataContext";

const Main: React.FC = () => {
  const { data, readAllLists } = useContext(DataContext);

  useEffect(() => {
    if (data === undefined) {
      readAllLists();
    }
  });
  return (
    <div className="flex">
      <Menu />
      <Outlet />
    </div>
  );
};

export default memo(Main);
