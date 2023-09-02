import React from "react";
import Button from "./Button";
import * as styles from "../styles/mySkills.module.css";
// import { StaticImage } from "gatsby-plugin-image";
import { SVG } from "../svg";

import img from "../images/frontend/png/index";
const frontendArr = [
  { title: "CSS", icon: `${img.css}` },
  { title: "JavaScript", icon: `${img.js}` },
  { title: "React Js", icon: `${img.react}` },
  { title: "React Native", icon: `${img.react}` },
  { title: "Tailwind CSS", icon: `${img.tailwind}` },
  // { title: "Next Js", icon: "icon" },
  { title: "Gatsby", icon: `${img.gatsby}` },
];
const backendArr = [
  { title: "Node JS", icon: `${img.node}` },
  // { title: "Express", icon: `${img.css}` },
  { title: "JWT Auth", icon: `${img.jwt}` },
];
const toolsArr = [
  { title: "GitHub", icon: `${img.github}` },
  { title: "MySql bench", icon: `${img.mysql}` },
  { title: "Android Studio", icon: `${img.studio}` },
  // { title: "Reat-Native flipper", icon: "icon" },
];
const databaseArr = [
  { title: "MySql", icon: `${img.mysql}` },
  { title: "Mongo DB", icon: `${img.mongo}` },
];

const MySkills = () => {
  return (
    <div className={styles.container} id="Skills">
      <div className={styles.introBtn}>
        <Button title="My skills" type="danger" outline rounded svg={SVG.skills} />
      </div>
      <div className={styles.aboutMe}>
        <span>
          My
          <b style={{ color: "aqua", marginLeft: "10px" }}>Advantages</b>
        </span>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeading}>
          <span>{SVG.frontend}</span>
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
          <span>{SVG.backend}</span>
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
          <span>{SVG.tools}</span>
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
          <span>{SVG.database}</span>
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
  // console.log(img);
  return (
    <div className={styles.card}>
      <div className={styles.box}>
        <img
          src={img}
          height="56px"
          width="56px"
          style={{ objectFit: "contain" }}
          alt="imag"
        />
      </div>
      {/* <StaticImage src={img} alt="A dinosaur" /> */}

      <p>{title}</p>
    </div>
  );
};
export default MySkills;
