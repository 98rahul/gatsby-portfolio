import React from "react";
import * as styles from "../styles/rightSidebar.module.css";

const menuList = [
  { desc: "Home", icon: "Home" },
  { desc: "About", icon: "About" },
  { desc: "Services", icon: "Services" },
  { desc: "Skills", icon: "Skills" },
  { desc: "Projects", icon: "Projects" },
  { desc: "Contacts", icon: "Contacts" },
  { desc: "Resume", icon: "Resume" },
  { desc: "Activity", icon: "Activity" },
];

const RightSidebar = () => {
  return (
    <div className={styles.rightSidebar}>
      {menuList.map((elem, id) => (
        <div className={`${styles[`${elem.desc}`]}  `}>
          {elem.icon}
          <p
            className={`${styles[`${elem.desc}1`]}`}
            style={{ "--id": `${id}`, "--val": `${elem.desc}`,}}
          >
            {elem.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
