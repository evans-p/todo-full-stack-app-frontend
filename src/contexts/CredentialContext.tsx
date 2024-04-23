import { createContext } from "react";
import { CredentialContextType } from "../@types/CredentialContextType";

const CredentialContext = createContext<CredentialContextType | undefined>(
  undefined
);

export default CredentialContext;
