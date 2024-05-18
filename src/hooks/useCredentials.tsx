import { useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { Profile } from "../@types/Profile";
import { CredentialResponse, googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import DataContext from "../contexts/DataContext";
import RoutingConstants from "../constants/RoutingConstants";
import { ICredentials } from "../@types/ICredentials";
import StringConstants from "../constants/StringConstants";

export default function useCredentials(): ICredentials {
  const navigate = useNavigate();
  const { clearData } = useContext(DataContext);
  const [credentials, _setCredentials] = useState<
    CredentialResponse | undefined
  >(fetchFromSessionStorage<CredentialResponse>(StringConstants.CREDENTIALS));
  const [profile, _setProfile] = useState<Profile | undefined>(
    fetchFromSessionStorage<Profile>(StringConstants.PROFILE)
  );

  const loginSuccess = (response: CredentialResponse): void => {
    if (!response) {
      return;
    }

    _setCredentials(() => {
      if (response.credential) {
        const p: Profile = jwtDecode<Profile>(response.credential);
        storeProfileToSS(p);
        _setProfile(p);
      }
      storeCredentialToSS(response);
      return response;
    });

    navigate(RoutingConstants.LISTS);
  };

  const loginError = () => {
    navigate(RoutingConstants.LOGIN);
  };

  const logout = (): void => {
    googleLogout();
    clearData();
    _setCredentials(() => {
      deleteFromSessionStorage(StringConstants.PROFILE);
      _setProfile(undefined);
      deleteFromSessionStorage(StringConstants.CREDENTIALS);
      return undefined;
    });
    navigate(RoutingConstants.ROOT);
  };

  return { credentials, profile, loginSuccess, loginError, logout };
}

function storeProfileToSS(profile: Profile) {
  window.sessionStorage.setItem(
    StringConstants.PROFILE,
    JSON.stringify(profile)
  );
}

function storeCredentialToSS(credential: CredentialResponse) {
  window.sessionStorage.setItem(
    StringConstants.CREDENTIALS,
    JSON.stringify(credential)
  );
}

function deleteFromSessionStorage(key: string) {
  window.sessionStorage.removeItem(key);
}

function fetchFromSessionStorage<P = CredentialResponse | Profile>(
  key: string
): P | undefined {
  const value = window.sessionStorage.getItem(key);
  return value ? JSON.parse(value) : undefined;
}
