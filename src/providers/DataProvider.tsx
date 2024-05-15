import { PropsWithChildren, useState } from "react";
import DataContext from "../contexts/DataContext";
import initialData from "../samples/getAllLists.json";

const DataProvider = ({ children }: PropsWithChildren<{}>) => {
  const [data, _setData] = useState<IData>(initialData);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
