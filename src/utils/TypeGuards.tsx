function isIError(data: any): boolean {
  return (
    data && typeof data.message != "undefined" && data.message != "undefined"
  );
}

export { isIError };
