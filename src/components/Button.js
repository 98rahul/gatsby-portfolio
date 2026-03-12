import React from "react";
import * as styles from "../styles/Button.module.css";
import { SVG } from "../svg";
const Button = ({ title, type, outline, rounded ,svg=SVG.whatsApp}) => {
  // console.log(title, type, outline, rounded);
  console.log('typeof svg :>> ', typeof svg);
  return (
    <div
      style={{display:'flex',alignItems:'center', gap:'4px'}}
      className={`${styles["btn"]} ${styles[type]} ${
        rounded ? `${styles.rounded}` : ""
      }  ${outline ? `${styles.outline}` : ""}
      ${outline && rounded ? `${styles.roundOutline}` : ""}
      `}
    >
      <span style={{height:'24px'}}>{svg}</span>
      <span style={{color:'inherit'}}>{title}</span>
      
      {/* <input value={title} readOnly /> */}
    </div>
  );
};

export default Button;
