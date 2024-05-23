import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CredentialContext from "../contexts/CredentialContext";
import RoutingConstants from "../constants/RoutingConstants";
import DataConstants from "../constants/DataConstants";
import { isIError } from "../utils/TypeGuards";
import initialData from "../data/initialData.json";
import { useTranslation } from "react-i18next";

export default function useData(): IDataContext {
  const [data, _setData] = useState<IData | undefined>();
  const { i18n } = useTranslation();
  const { credentials, profile } = useContext(CredentialContext);
  const navigate = useNavigate();

  const clearData = () => {
    _setData(undefined);
  };

  const deleteList = async (todoListId: number): Promise<void> => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_BASE_URL +
          DataConstants.LISTS +
          todoListId,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + credentials?.credential,
            "Accept-Language": i18n.language,
          },
        }
      );

      if (!response.ok) throw new Error();

      if (data) {
        _setData({
          ...data,
          _embedded: {
            todoListList: data._embedded.todoListList.filter(
              (list) => list.todoListId !== todoListId
            ),
          },
        });
      }
    } catch {
      navigate(RoutingConstants.ERROR);
    }
  };

  const updateList = async (list: ITodoList): Promise<IError | void> => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_BASE_URL + DataConstants.LISTS,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + credentials?.credential,
            "Accept-Language": i18n.language,
          },
          body: JSON.stringify(list),
        }
      );

      if (response.status !== 422 && !response.ok) throw new Error();

      const d = await response.json();

      if (isIError(d)) {
        return d as IError;
      }

      const res: ITodoList = d as ITodoList;
      let dt: ITodoList[];
      if (data) {
        const index = data._embedded.todoListList.findIndex(
          (list) => list.todoListId === res.todoListId
        );

        if (index >= 0) {
          dt = [
            ...data._embedded.todoListList.slice(0, index),
            res,
            ...data._embedded.todoListList.slice(index + 1),
          ];
        } else {
          dt = [...data._embedded.todoListList, res];
        }
      } else {
        dt = [res];
      }

      _setData(
        data
          ? { ...data, _embedded: { todoListList: dt } }
          : { ...initialData, _embedded: { todoListList: dt } }
      );
    } catch {
      navigate(RoutingConstants.ERROR);
    }
  };

  const addNewList = async (list: INewList): Promise<IError | void> => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_BASE_URL + DataConstants.LISTS,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + credentials?.credential,
            "Accept-Language": i18n.language,
          },
          body: JSON.stringify({ userId: profile?.sub, title: list.title }),
        }
      );

      if (response.status !== 422 && !response.ok) throw new Error();

      const d = await response.json();

      if (isIError(d)) {
        return d as IError;
      }
      let dt = data ? [...data._embedded.todoListList, d] : [d];

      _setData(
        data
          ? { ...data, _embedded: { todoListList: dt } }
          : { ...initialData, _embedded: { todoListList: dt } }
      );
    } catch {
      navigate(RoutingConstants.ERROR);
    }
  };

  const readAllLists = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_BASE_URL + DataConstants.LISTS,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + credentials?.credential,
            "Accept-Language": i18n.language,
          },
        }
      );
      if (!response.ok) {
        throw new Error();
      }

      const responseData: IData = await response.json();
      _setData(responseData);
    } catch (e) {
      navigate(RoutingConstants.ERROR);
    }
  };

  const addNewTodo = async (todo: INewTodo): Promise<IError | void> => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_BASE_URL + DataConstants.TODOS,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + credentials?.credential,
            "Accept-Language": i18n.language,
          },
          body: JSON.stringify({
            userId: profile?.sub,
            title: todo.title,
            body: todo.body,
            todoListId: todo.todoListId,
          }),
        }
      );

      if (response.status !== 422 && !response.ok) throw new Error();

      const d: ITodo | IError = await response.json();

      if (isIError(d)) {
        return d as IError;
      }

      const todoResponse = d as ITodo;

      const _data: IData | undefined = JSON.parse(JSON.stringify(data));

      if (todoResponse.todoListId) {
        const todoList = _getTodoListById(todoResponse.todoListId, _data);
        if (todoList) {
          todoList.todos.push(todoResponse);
        }
      }

      _setData(_data);
    } catch {
      navigate(RoutingConstants.ERROR);
    }
  };

  const _getTodoListById = (
    todoListId: number,
    data: IData | undefined
  ): ITodoList | void => {
    const todoList = data?._embedded.todoListList.filter(
      (list) => list.todoListId === todoListId
    );
    if (todoList) {
      return todoList[0];
    }
  };

  return {
    data,
    readAllLists,
    clearData,
    addNewList,
    updateList,
    deleteList,
    addNewTodo,
  };
}
