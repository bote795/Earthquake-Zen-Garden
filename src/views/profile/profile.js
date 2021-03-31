import React, { useEffect, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import DisplayKeys from "../../components/displaykeys/DisplayKeys";
import UserContext from "../../context/user";
import styles from "./profile.css";

export default function Profile() {
  const { user } = useContext(UserContext);
  useEffect(() => {
    document.title = `Profile - ${user?.firstName || ""}`;
  }, [user]);
  const keys = ["firstName", "lastName", "phone", "email", "bio"];
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  return (
    <main>
      <h2>Profile</h2>
      <div className={styles.profile}>
        <div className={styles.profile__item_avatar}>
          {!isEmpty(user) ? (
            <img
              className={styles.profile__avatar}
              src={user.avatarImage}
              alt={`${user.firstName} profile`}
            />
          ) : (
            <Skeleton
              className={styles.profile__avatar}
              variant="square"
              height={200}
              width={200}
            />
          )}
        </div>
        <div className={styles.profile__item_display_keys}>
          {!isEmpty(user) ? (
            <DisplayKeys keys={keys} values={user} />
          ) : (
            <Skeleton count={5} width={400} />
          )}
        </div>
      </div>
    </main>
  );
}
