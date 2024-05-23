import { createContext } from "react";
import initialData from "../data/initialData.json";

const data: IDataContext = {
  data: initialData,
  readAllLists: async () => {},
  clearData: () => {},
  addNewList: async () => {},
  updateList: async () => {},
  deleteList: async () => {},
  addNewTodo: async () => {},
  updateTodo: async () => {},
  deleteTodo: async () => {},
};

const DataContext = createContext<IDataContext>(data);

export default DataContext;
