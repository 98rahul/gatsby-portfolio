import React from "react";
import * as styles from "../styles/Services.module.css";
import Button from "./Button";
import { SVG } from "../svg";
const arrContainer = [
  {
    icon: "icon",
    title: "Frontend Web Development",
    desc: "I can convert any psd or Figma file into mobile or tab responsive web application. Capable of doing project in clean code.",
  },

  {
    icon: "icon",
    title: "React JS Development",
    desc: "I have worked on 8 different React JS projcts. Also have a little working experience with Next JS.",
  },
  {
    icon: "icon",
    title: "Full Stack Development",
    desc: "With the Frontend I am skilled in Node JS, Express, JWT and Firebase. Proficient in implementing Mongo DB.",
  },
];

const MySkills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introBtn}>
        <Button title="Services" type="danger" outline rounded svg={SVG.services} />
      </div>
      <div className={styles.aboutMe}>
        <span>
          My
          <b style={{ color: "aqua", marginLeft: "10px" }}>Specializations</b>
        </span>
      </div>
      <div className={styles.cardContainer}>
        {arrContainer.map((item, id) => {
          return (
            <Card
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({icon = "icon", title = "title", desc = "desc"}) => {
  // console.log(icon, title, desc);
  return (
    <div className={styles.card}>
      <span>{icon}</span>
      <span className={styles.title}>{title}</span>
      <span>{desc}</span>
    </div>
  );
};

export default MySkills;
