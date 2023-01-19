import React from "react";
import Decorator from "./Decorator";
import styles from "../css/MainScreen.module.css";

export default function BioScreen(): JSX.Element {
  return (
    <>
      <Decorator />
      <div className={styles.pageRoot}>Bio</div>
    </>
  );
}
