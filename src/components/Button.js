import React from "react";
import * as styles from "../styles/Button.module.css";
const Button = ({ title, btnType, key }) => {
  console.log(btnType);
  return (
    <div className={`${styles['btn']} ${styles[btnType]}`} key={key}>
      <button >{title}</button>
      {/* <input value={title} readOnly /> */}
    </div>
  );
};

export default Button;
