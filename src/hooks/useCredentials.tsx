import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Profile } from "../@types/Profile";
import { CredentialResponse, googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import RoutingConstants from "../constants/RoutingConstants";
import { ICredentials } from "../@types/ICredentials";

export default function useCredentials(): ICredentials {
  const [credentials, _setCredentials] = useState<CredentialResponse>();
  const [profile, _setProfile] = useState<Profile>();
  const navigate = useNavigate();

  const loginSuccess = (response: CredentialResponse): void => {
    if (!response) {
      return;
    }

    _setCredentials(() => {
      if (response.credential) {
        _setProfile(jwtDecode<Profile>(response.credential));
      }

      return response;
    });

    navigate(RoutingConstants.LISTS);
  };

  const loginError = () => {
    navigate(RoutingConstants.LOGIN);
  };

  const logout = (): void => {
    googleLogout();
    _setCredentials(() => {
      _setProfile(undefined);
      return undefined;
    });
    navigate(RoutingConstants.ROOT);
  };

  return { credentials, profile, loginSuccess, loginError, logout };
}
