interface ITodoList {
  todoListId: number;
  userId: string | null;
  title: string | null;
  created: string | null;
  lastModified: string | null;
  todos: ITodo[];
  _links: {
    self: ILink;
    todoLists: ILink;
  };
}
