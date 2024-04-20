interface Todo {
  todoId: number | null;
  todoListId: number | null;
  userId: string | null;
  title: string | null;
  body: string | null;
  created: Date | null;
  lastModified: Date | null;
  favourite: boolean | null;
}
