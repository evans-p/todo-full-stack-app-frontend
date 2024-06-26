interface IDataContext {
  data?: IData;
  readAllLists: () => Promise<void>;
  clearData: () => void;
  addNewList: (list: INewList) => Promise<IError | void>;
  updateList: (list: ITodoList) => Promise<IError | void>;
  deleteList: (todoListId: number) => Promise<void>;
  addNewTodo: (list: INewTodo) => Promise<IError | void>;
  updateTodo: (list: ITodo) => Promise<IError | void>;
  deleteTodo: (todoId: number) => Promise<void>;
}
