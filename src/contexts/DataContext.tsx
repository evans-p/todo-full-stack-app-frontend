import { createContext } from "react";
import data from "../samples/getAllLists.json";

const DataContext = createContext<IData>(data);

export default DataContext;
