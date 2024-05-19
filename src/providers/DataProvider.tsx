import { PropsWithChildren } from "react";
import DataContext from "../contexts/DataContext";
import useData from "../hooks/useData";

const DataProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <DataContext.Provider value={{ ...useData() }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
