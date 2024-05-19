import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CredentialContext from "../contexts/CredentialContext";
import RoutingConstants from "../constants/RoutingConstants";
import DataConstants from "../constants/DataConstants";
import { isIError } from "../utils/TypeGuards";
import initialData from "../data/initialData.json";

export default function useData(): IDataContext {
  const [data, _setData] = useState<IData | undefined>();
  const { credentials, profile } = useContext(CredentialContext);
  const navigate = useNavigate();

  const clearData = () => {
    _setData(undefined);
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
          },
        }
      );
      if (!response.ok) {
        console.log(response.status);
        throw new Error();
      }

      const responseData: IData = await response.json();
      _setData(responseData);
    } catch (e) {
      navigate(RoutingConstants.ERROR);
    }
  };
  return { data, readAllLists, clearData, addNewList };
}
