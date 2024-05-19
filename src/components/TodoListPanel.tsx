import { memo, useState, useContext, ChangeEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import DataContext from "../contexts/DataContext";
import { isIError } from "../utils/TypeGuards";
import RoutingConstants from "../constants/RoutingConstants";

const TodoListPanel = (props: TodoListPanelProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>();
  const [errors, setErrors] = useState<IError>();
  const { addNewList, updateList, deleteList } = useContext(DataContext);

  useEffect(() => {
    setTitle(
      props.todoList ? (props.todoList.title ? props.todoList.title : "") : ""
    );
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrors(undefined);
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    if (props.todoList) {
      handleUpdateList();
    } else {
      handleNewList();
    }
  };

  const handleUpdateList = () => {
    if (props.todoList) {
      const newList: ITodoList = JSON.parse(JSON.stringify(props.todoList));
      // TODO: newList.lastModified = now;
      newList.title = title ? title : "";

      updateList(newList).then((value) => {
        if (isIError(value)) {
          const e = value as IError;
          setErrors(e);
        } else {
          handleClose();
        }
      });
    }
  };

  const handleNewList = () => {
    const newList: INewList = {
      title: title ? (title.length > 0 ? title : "") : "",
    };

    addNewList(newList).then((value) => {
      if (isIError(value)) {
        const e = value as IError;
        setErrors(e);
      } else {
        handleClose();
      }
    });
  };

  const handleClose = () => {
    let path = location.pathname.split("/");
    navigate(path.slice(0, path.length - 1).join("/"));
  };

  const handleDeleteList = () => {
    if (props.todoList) {
      deleteList(props.todoList.todoListId).then(() => {
        navigate(RoutingConstants.LISTS);
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-300 bg-opacity-40 backdrop-blur flex justify-center items-center ring-4 ring-black/5 z-10">
      <div className="w-96 p-10 bg-gray-100 dark:bg-gray-800 rounded-sm">
        <section className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100">
            {props.todoList
              ? t("main.todoListPanel.edit.title")
              : t("main.todoListPanel.new.title")}
          </h3>
          {props.todoList ? (
            <span
              className="cursor-pointer p-2 rounded-xl hover:bg-white hover:shadow dark:hover:bg-gray-600 dark:hover:shadow-gray-400 dark:hover:shadow-sm"
              onClick={handleDeleteList}
            >
              <IoTrashOutline className="text-gray-800 text-2xl dark:text-gray-100" />
            </span>
          ) : null}
        </section>
        <label
          className="block text-gray-800 dark:text-gray-100 mb-2"
          htmlFor="title"
        >
          {props.todoList
            ? t("main.todoListPanel.edit.label")
            : t("main.todoListPanel.new.label")}
        </label>
        <input
          type="text"
          id="title"
          className="w-full h-8 p-3 text-gray-800 rounded-sm"
          onChange={handleChange}
          value={title}
        />
        {errors?.messages?.title ? (
          <p className="my-2 text-rose-600">{errors?.messages?.title}</p>
        ) : (
          <div className="h-10" />
        )}

        <button
          className="w-full h-8 mb-1 rounded-sm text-gray-800 dark:text-gray-100 hover:text-gray-100 hover:dark:text-gray-800 dark:bg-gray-700 bg-gray-300 hover:dark:bg-gray-600 hover:bg-gray-400"
          onClick={handleSubmit}
        >
          {props.todoList
            ? t("main.todoListPanel.edit.save")
            : t("main.todoListPanel.new.save")}
        </button>
        <button
          className="w-full h-8 rounded-sm text-gray-800 dark:text-gray-100 hover:text-gray-100 hover:dark:text-gray-800 dark:bg-gray-700 bg-gray-300 hover:dark:bg-gray-600 hover:bg-gray-400"
          onClick={handleClose}
        >
          {props.todoList
            ? t("main.todoListPanel.edit.cancel")
            : t("main.todoListPanel.new.cancel")}
        </button>
      </div>
    </div>
  );
};

export default memo(TodoListPanel);
