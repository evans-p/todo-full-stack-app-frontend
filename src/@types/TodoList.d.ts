interface TodoList {
  todoListId: number | null;
  userId: string | null;
  title: string | null;
  created: Date | null;
  lastModified: Date | null;
  todos: Todo[];
}