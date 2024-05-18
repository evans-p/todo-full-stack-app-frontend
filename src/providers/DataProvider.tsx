import { PropsWithChildren } from "react";
import DataContext from "../contexts/DataContext";
import useData from "../hooks/useData";

const DataProvider = ({ children }: PropsWithChildren<{}>) => {
  const { data, readAllLists } = useData();

  return (
    <DataContext.Provider value={{ data, readAllLists }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
