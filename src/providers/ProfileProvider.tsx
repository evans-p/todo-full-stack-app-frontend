import { PropsWithChildren, useState } from "react";
import ProfileContext from "../contexts/ProfileContext";
import { Profile } from "../@types/Profile";

const ProfileProvider = ({ children }: PropsWithChildren<{}>) => {
  const [profile, setProfile] = useState<Profile>();

  return (
    <ProfileContext.Provider value={[profile, setProfile]}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
