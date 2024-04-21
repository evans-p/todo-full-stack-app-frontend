import { memo } from "react";
import { useTranslation } from "react-i18next";
import { IoTrashOutline } from "react-icons/io5";

const TodoPanel = (props: TodoPanelProps): JSX.Element => {
  const { t } = useTranslation();

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
          className="block text-gray-800 dark:text-gray-100 mb-2"
          htmlFor="title"
        >
          {props.todo
            ? t("main.todoPanel.edit.titleLabel")
            : t("main.todoPanel.new.titleLabel")}
        </label>
        <input
          type="text"
          id="title"
          className="w-full h-8 p-3 text-gray-800 rounded-sm mb-2"
        />

        <label
          className="block text-gray-800 dark:text-gray-100 mb-2"
          htmlFor="body"
        >
          {props.todo
            ? t("main.todoPanel.edit.description")
            : t("main.todoPanel.new.description")}
        </label>
        <textarea
          id="body"
          className="w-full h-24 p-3 text-gray-800 rounded-sm mb-2 resize-none"
        />
        <label
          className="block text-gray-800 dark:text-gray-100 mb-2"
          htmlFor="listId"
        >
          {props.todo
            ? t("main.todoPanel.edit.listLabel")
            : t("main.todoPanel.new.listLabel")}
        </label>
        <select
          id="listId"
          className="w-full h-8 pl-3 text-gray-800 dark:text-gray-100 dark:bg-gray-700 bg-gray-300"
        >
          <option value="1">First List</option>
          <option value="1">Second List</option>
        </select>
        <button className="w-full h-8 mt-5 mb-1 rounded-sm text-gray-800 dark:text-gray-100 hover:text-gray-100 hover:dark:text-gray-800 dark:bg-gray-700 bg-gray-300 hover:dark:bg-gray-600 hover:bg-gray-400">
          {props.todo
            ? t("main.todoPanel.edit.save")
            : t("main.todoPanel.new.save")}
        </button>
        <button className="w-full h-8 rounded-sm text-gray-800 dark:text-gray-100 hover:text-gray-100 hover:dark:text-gray-800 dark:bg-gray-700 bg-gray-300 hover:dark:bg-gray-600 hover:bg-gray-400">
          {props.todo
            ? t("main.todoPanel.edit.cancel")
            : t("main.todoPanel.new.cancel")}
        </button>
      </div>
    </div>
  );
};

export default memo(TodoPanel);
