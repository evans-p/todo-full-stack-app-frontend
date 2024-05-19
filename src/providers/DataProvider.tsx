import { PropsWithChildren } from "react";
import DataContext from "../contexts/DataContext";
import useData from "../hooks/useData";

const DataProvider = ({ children }: PropsWithChildren<{}>) => {
  const { data, readAllLists, clearData, addNewList } = useData();

  return (
    <DataContext.Provider value={{ data, readAllLists, clearData, addNewList }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
