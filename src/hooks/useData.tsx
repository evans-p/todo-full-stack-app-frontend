import { useState, useContext } from "react";

import CredentialContext from "../contexts/CredentialContext";
import { useNavigate } from "react-router-dom";
import RoutingConstants from "../constants/RoutingConstants";
import DataConstants from "../constants/DataConstants";

export default function useData(): IDataContext {
  const [data, _setData] = useState<IData | undefined>();
  const { credentials } = useContext(CredentialContext);
  const navigate = useNavigate();

  const clearData = () => {
    _setData(undefined);
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

      const responseData: IData = await await response.json();
      _setData(responseData);
    } catch (e) {
      navigate(RoutingConstants.ERROR);
    }
  };
  return { data, readAllLists, clearData };
}
