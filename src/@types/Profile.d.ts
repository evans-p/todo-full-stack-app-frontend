import { JwtPayload } from "jwt-decode";
interface Profile extends JwtPayload {
  azp: string;
  email: string;
  email_verified: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
}
