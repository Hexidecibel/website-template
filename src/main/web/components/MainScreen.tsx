import React from "react";
import Decorator from "./Decorator";
import { useHistory } from "react-router-dom";
import styles from "../css/MainScreen.module.css";

export default function MainScreen(): JSX.Element {
  return (
    <div className={styles.pageRoot}>
      <Decorator />
      <div>Main Screen Area!!!</div>
    </div>
  );
}
