interface ITodo {
  todoId: number;
  todoListId: number | null;
  userId: string | null;
  title: string | null;
  favourite: boolean | null;
  body: string | null;
  created: string | null;
  lastModified: string | null;
  completed: boolean | null;
}
