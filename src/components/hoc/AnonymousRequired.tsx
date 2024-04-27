import { useEffect, useContext, PropsWithChildren } from "react";

import CredentialContext from "../../contexts/CredentialContext";
import { ICredentials } from "../../@types/ICredentials";
import { useNavigate } from "react-router-dom";
import RoutingConstants from "../../constants/RoutingConstants";

const AnonymousRequired = ({ children }: PropsWithChildren<{}>) => {
  const { credentials, profile } = useContext<ICredentials>(CredentialContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (credentials || profile) {
      navigate(RoutingConstants.LISTS);
    }
  });

  return <>{children}</>;
};

export default AnonymousRequired;
