import React from "react";
import useSite from "./../../hooks/use-site";
import styles from "./header.css";
import Skeleton from "react-loading-skeleton";

export default function Header() {
  const { site } = useSite();
  let username;
  return (
    <nav className={styles.nav}>
      {site ? (
        <img className={styles.nav__logo} src={site.logoImage} alt="Realtor logo" />
      ) : (
        <Skeleton
          className={styles.nav__logo}
          variant="rect"
          height={50}
          width={50}
        />
      )}

      <h1>{site?.title || <Skeleton width={200} />}</h1>
      <span> Welcome {username || <Skeleton width={50} />}</span>
    </nav>
  );
}
