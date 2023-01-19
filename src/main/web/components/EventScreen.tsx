import React from "react";
import Decorator from "./Decorator";
import styles from "../css/MainScreen.module.css";

export default function EventScreen(): JSX.Element {
  return (
    <>
      <Decorator />
      <div className={styles.pageRoot}>Events</div>
    </>
  );
}
