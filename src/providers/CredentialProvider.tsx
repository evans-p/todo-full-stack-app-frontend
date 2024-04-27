import { PropsWithChildren } from "react";
import CredentialContext from "../contexts/CredentialContext";
import useCredentials from "../hooks/useCredentials";

const CredentialProvider = ({ children }: PropsWithChildren<{}>) => {
  const { credentials, profile, loginSuccess, loginError, logout } =
    useCredentials();

  return (
    <CredentialContext.Provider
      value={{ credentials, profile, loginSuccess, loginError, logout }}
    >
      {children}
    </CredentialContext.Provider>
  );
};

export default CredentialProvider;
