import React from "react";
import Decorator from "./Decorator";
import styles from "../css/MainScreen.module.css";

export default function MusicScreen(): JSX.Element {
  return (
    <>
      <Decorator />
      <div className={styles.pageRoot}>Music</div>
    </>
  );
}
