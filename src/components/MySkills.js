import React from "react";
import Button from "./Button";
import * as styles from "../styles/mySkills.module.css";

const frontendArr = [
  { title: "CSS", icon: "icon" },
  { title: "JavaScript", icon: "icon" },
  { title: "React Js", icon: "icon" },
  { title: "React Native", icon: "icon" },
  { title: "Tailwind CSS", icon: "icon" },
  { title: "Next Js", icon: "icon" },
  { title: "Gatsby", icon: "icon" },
];
const backendArr = [
  { title: "Node JS", icon: "icon" },
  { title: "Express", icon: "icon" },
  { title: "JWT Auth", icon: "icon" },
];
const toolsArr = [
  { title: "GitHub", icon: "icon" },
  { title: "MySql bench", icon: "icon" },
  { title: "Android Studio", icon: "icon" },
  { title: "Reat-Native flipper", icon: "icon" },
];
const databaseArr = [
  { title: "MySql", icon: "icon" },
  { title: "Mongo DB", icon: "icon" },
];

const MySkills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introBtn}>
        <Button title="icon My skills" type="danger" outline rounded />
      </div>
      <div className={styles.aboutMe}>
        <span>
          My
          <b style={{ color: "aqua", marginLeft: "10px" }}>Advantages</b>
        </span>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeading}>
          <span>icon</span>
          <span>Frontend</span>
        </div>
        <div className={styles.cardAll}>
          {frontendArr.map((item) => {
            return <Card title={item.title} img={item.icon} />;
          })}
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeading}>
          <span>icon</span>
          <span>Backend</span>
        </div>
        <div className={styles.cardAll}>
          {backendArr.map((item) => {
            return <Card title={item.title} img={item.icon} />;
          })}
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeading}>
          <span>icon</span>
          <span>Tools</span>
        </div>
        <div className={styles.cardAll}>
          {toolsArr.map((item) => {
            return <Card title={item.title} img={item.icon} />;
          })}
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeading}>
          <span>icon</span>
          <span>Database</span>
        </div>
        <div className={styles.cardAll}>
          {databaseArr.map((item) => {
            return <Card title={item.title} img={item.icon} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.box}>{img}</div>
      <p>{title}</p>
    </div>
  );
};
export default MySkills;
