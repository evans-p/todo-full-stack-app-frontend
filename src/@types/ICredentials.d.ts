import { CredentialResponse } from "@react-oauth/google";
import { Profile } from "./Profile";

interface ICredentials {
  credentials: CredentialResponse | undefined;
  profile: Profile | undefined;
  loginSuccess: (response: CredentialResponse) => void;
  loginError: () => void;
  logout: () => void;
}
