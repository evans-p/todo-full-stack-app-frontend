interface ITodoList {
  todoListId: number | null;
  userId: string | null;
  title: string | null;
  created: Date | null;
  lastModified: Date | null;
  todos: Todo[];
  _link: {
    self: ILink;
    todoLists: ILink;
  };
}
