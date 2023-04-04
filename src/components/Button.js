import React from "react";
import * as styles from "../styles/Button.module.css";
const Button = ({ title, type, outline, rounded }) => {
  console.log(title, type, outline, rounded);
  return (
    <div
      className={`${styles["btn"]} ${styles[type]} ${
        rounded ? `${styles.rounded}` : ""
      }  ${outline ? `${styles.outline}` : ""}
      ${outline && rounded ? `${styles.roundOutline}` : ""}
      `}
    >
      {title}
      {/* <input value={title} readOnly /> */}
    </div>
  );
};

export default Button;
