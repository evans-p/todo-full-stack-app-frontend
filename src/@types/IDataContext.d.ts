interface IDataContext {
  data?: IData;
  readAllLists: () => Promise<void>;
  clearData: () => void;
  addNewList: (list: INewList) => Promise<IError | void>;
}
