import { memo, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { isIError } from "../utils/TypeGuards";
import DataContext from "../contexts/DataContext";

const TodoPanel = (props: TodoPanelProps): JSX.Element => {
  const { t } = useTranslation();
  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();
  const [todoListId, setTodoListId] = useState<number>();
  const [errors, setErrors] = useState<IError>();
  const { data, addNewTodo, updateTodo } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(
      props
        ? props.todo
          ? props.todo.title
            ? props.todo.title
            : ""
          : ""
        : ""
    );

    setBody(
      props ? (props.todo ? (props.todo.body ? props.todo.body : "") : "") : ""
    );

    setTodoListId(props?.todoList?.todoListId);
  }, [props]);

  const handleSubmit = () => {
    if (props.todo) {
      handleUpdateTodo();
    } else {
      handleNewTodo();
    }
  };

  const handleUpdateTodo = () => {
    if (props.todo) {
      const todo: ITodo = JSON.parse(JSON.stringify(props.todo));
      todo.body = body ? body : "";
      todo.title = title ? title : "";
      todo.todoListId = todoListId ? todoListId : null;

      updateTodo(todo).then((e) => {
        if (isIError(e)) {
          setErrors(e as IError);
        } else {
          handleClose();
        }
      });
    }
  };

  const handleNewTodo = () => {
    addNewTodo({
      title: title ? title : "",
      todoListId: todoListId ? todoListId : undefined,
      body: body ? body : "",
    }).then((e) => {
      if (isIError(e)) {
        setErrors(e as IError);
      } else {
        handleClose();
      }
    });
  };

  const handleClose = () => {
    let path = location.pathname.split("/");
    navigate(path.slice(0, path.length - 1).join("/"));
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-300 bg-opacity-40 backdrop-blur flex justify-center items-center ring-4 ring-black/5 z-10">
      <div className="w-96 p-10 bg-gray-100 dark:bg-gray-800 rounded-sm">
        <section className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100">
            {props.todo
              ? t("main.todoPanel.edit.title")
              : t("main.todoPanel.new.title")}
          </h3>

          {props.todo ? (
            <span className="cursor-pointer p-2 rounded-xl hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm">
              <IoTrashOutline className="text-gray-800 text-2xl dark:text-gray-100" />
            </span>
          ) : null}
        </section>
        <label
          className="block text-gray-800 dark:text-gray-100 mb-1"
          htmlFor="title"
        >
          {props.todo
            ? t("main.todoPanel.edit.titleLabel")
            : t("main.todoPanel.new.titleLabel")}
        </label>
        <input
          type="text"
          id="title"
          className="w-full h-8 p-3 text-gray-800 rounded-sm"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setErrors(undefined);
          }}
        />
        {errors?.messages?.title ? (
          <p className="my-2 text-rose-600 text-xs">
            {errors?.messages?.title}
          </p>
        ) : (
          <div className="h-8" />
        )}

        <label
          className="block text-gray-800 dark:text-gray-100 mb-1"
          htmlFor="body"
        >
          {props.todo
            ? t("main.todoPanel.edit.description")
            : t("main.todoPanel.new.description")}
        </label>
        <textarea
          id="body"
          className="w-full h-24 p-3 text-gray-800 rounded-sm resize-none"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
            setErrors(undefined);
          }}
        />
        {errors?.messages?.body ? (
          <p className="my-2 text-rose-600 text-xs">{errors?.messages?.body}</p>
        ) : (
          <div className="h-8" />
        )}
        <label
          className="block text-gray-800 dark:text-gray-100 mb-1"
          htmlFor="listId"
        >
          {props.todo
            ? t("main.todoPanel.edit.listLabel")
            : t("main.todoPanel.new.listLabel")}
        </label>
        <select
          id="listId"
          className="w-full h-8 pl-3 text-gray-800 dark:text-gray-100 dark:bg-gray-700 bg-gray-300"
          value={todoListId}
          onChange={(e) => {
            setTodoListId(Number(e.target.value));
            setErrors(undefined);
          }}
        >
          <option value={undefined}></option>;
          {data?._embedded.todoListList.map((list: ITodoList) => {
            return <option value={list.todoListId}>{list.title}</option>;
          })}
        </select>
        {errors?.messages?.todoListId ? (
          <p className="my-2 text-rose-600 text-xs">
            {errors?.messages?.todoListId}
          </p>
        ) : (
          <div className="h-8" />
        )}
        <button
          className="w-full h-8 mb-1 rounded-sm text-gray-800 dark:text-gray-100 hover:text-gray-100 hover:dark:text-gray-800 dark:bg-gray-700 bg-gray-300 hover:dark:bg-gray-600 hover:bg-gray-400"
          onClick={handleSubmit}
        >
          {props.todo
            ? t("main.todoPanel.edit.save")
            : t("main.todoPanel.new.save")}
        </button>
        <button
          className="w-full h-8 rounded-sm text-gray-800 dark:text-gray-100 hover:text-gray-100 hover:dark:text-gray-800 dark:bg-gray-700 bg-gray-300 hover:dark:bg-gray-600 hover:bg-gray-400"
          onClick={handleClose}
        >
          {props.todo
            ? t("main.todoPanel.edit.cancel")
            : t("main.todoPanel.new.cancel")}
        </button>
      </div>
    </div>
  );
};

export default memo(TodoPanel);
