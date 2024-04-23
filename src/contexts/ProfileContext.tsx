import { createContext } from "react";
import { ProfileContextType } from "../@types/ProfileContextType";

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export default ProfileContext;
