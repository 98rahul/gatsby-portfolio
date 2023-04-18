import React from "react";
import * as styles from "../styles/introduction.module.css";
import Button from "./Button";
import { SVG } from "../svg";
const Introduction = () => {
  return (
    <div className={styles.container} id='Home'>
      <div className={styles.introBtn}>
       <Button title='Introduction ' type='dark' outline rounded svg={SVG.home}/>
      </div>
      
      <div className={styles.heading}>
        <span className={styles.first}>
          Hey! I'm <b style={{ color: "aqua" }}>Rahul</b>,
        </span>
        <span className={styles.second}> Full-Stack Web Developer</span>
        <span className={styles.third}>
          I am a MERN Stack developer who loves to create dynamic and responsive
          web applications.
        </span>
      </div>
      <div className={styles.number}>
        <div className={styles.one}>
          <span className={styles.twoPLus}>1.5+</span>
          <span className={styles.common}>YEARS OF EXPERIENCE</span>
        </div>
        <div className={styles.two}>
          <span className={styles.twoPLus}>10+</span>
          <span className={styles.common}>Projects<br/>Completed</span>
        </div>
        <div className={styles.three}>
          <span>My Projects</span>
          <span>down arrow</span>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
