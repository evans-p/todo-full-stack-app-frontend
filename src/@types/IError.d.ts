interface IError {
  message: string | null;
  messages: {
    title: string | null;
    userId: string | null | undefined;
  };
}
