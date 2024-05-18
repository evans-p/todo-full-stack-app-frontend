interface IDataContext {
  data?: IData;
  readAllLists: () => Promise<void>;
  clearData: () => void;
}
