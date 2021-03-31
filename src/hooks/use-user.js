import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import getProfile from "./../services/user";

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUser() {
      const response = await getProfile();
      setActiveUser(response);
    }
    if (!user) {
      getUser();
    }
  }, [user]);

  return { user: activeUser };
}
