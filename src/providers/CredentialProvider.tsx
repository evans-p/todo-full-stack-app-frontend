import { PropsWithChildren, useState } from "react";
import CredentialContext from "../contexts/CredentialContext";
import { CredentialResponse } from "@react-oauth/google";

const CredentialProvider = ({ children }: PropsWithChildren<{}>) => {
  const [credential, setCredential] = useState<CredentialResponse>();

  return (
    <CredentialContext.Provider value={[credential, setCredential]}>
      {children}
    </CredentialContext.Provider>
  );
};

export default CredentialProvider;
