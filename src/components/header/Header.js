import React, { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import useSite from "./../../hooks/use-site";
import styles from "./header.css";
import * as ROUTES from "./../../constants/routes";
import UserContext from "../../context/user";

export default function Header() {
  const { user } = useContext(UserContext);
  const { site } = useSite();
  let username = user?.firstName;
  return (
    <nav className={styles.nav}>
      {site ? (
        <Link to={ROUTES.EARTHQUAKES}>
          <img
            className={styles.nav__logo}
            src={site.logoImage}
            alt="Realtor logo"
          />
        </Link>
      ) : (
        <Skeleton
          className={styles.nav__logo}
          variant="rect"
          height={50}
          width={50}
        />
      )}

      <h1>{site?.title || <Skeleton width={200} />}</h1>
      <Link to={ROUTES.PROFILE}>
        <span> Welcome {username || <Skeleton width={50} />}</span>
      </Link>
    </nav>
  );
}
