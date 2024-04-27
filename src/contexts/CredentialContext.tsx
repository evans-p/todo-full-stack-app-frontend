import { createContext } from "react";
import { ICredentials } from "../@types/ICredentials";

const initialization: ICredentials = {
  credentials: undefined,
  profile: undefined,
  loginSuccess: () => {},
  loginError: () => {},
  logout: () => {},
};

const CredentialContext = createContext<ICredentials>(initialization);

export default CredentialContext;
