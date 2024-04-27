interface ITodo {
  todoId: number | null;
  todoListId: number | null;
  userId: string | null;
  title: string | null;
  favourite: boolean | null;
  body: string | null;
  created: Date | null;
  lastModified: Date | null;
}
