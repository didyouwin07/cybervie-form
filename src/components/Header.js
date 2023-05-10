import React from "react";
import styles from "./styles/headerStyles.module.css";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <img
          src="https://learn.cybervie.com/assets/img/logo.gif"
          alt="Logo"
          className={styles.logoImage}
        />
      </div>
    </div>
  );
}
