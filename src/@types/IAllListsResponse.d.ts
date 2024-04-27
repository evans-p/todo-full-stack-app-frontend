interface IAllListsResponse {
  _embedded: {
    todoListList: ITodoList[];
  };
  _links: {
    self: ILink;
  };
}
