interface IData {
  _embedded: {
    todoListList: ITodoList[];
  };
  _links: {
    self?: ILink;
  };
}
