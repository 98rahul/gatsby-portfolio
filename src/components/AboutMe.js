import React from "react";
import Button from "./Button";
import { SVG } from "../svg";
import * as styles from "../styles/aboutMe.module.css";
const AboutMe = () => {
  return (
    <div className={styles.container} id='About'>
      <div className={styles.introBtn}>
        <Button title="About Me" type="success" outline rounded svg={SVG.about} />
      </div>
      <div className={styles.aboutMe}>
        <span>Every great design start with </span>
        <span>
          even a <b style={{ color: "aqua" }}> better story</b>
        </span>
      </div>
      <div className={styles.desc}>
        I started web programming out of self interest and found out I enjoy
        designing and developing web application. It gives me the enlightenment
        of creating something that I can own. For more than 1 year I have been
        learning web development. I have excelled in frontend development
        technology and then backend as well. I have worked on 12 different
        projects of my own. I like to read books, go on tours and watch sci-fi
        movies.
      </div>
      <div>
        <span>Icon</span>
        <span>Get My CV</span>
      </div>
    </div>
  );
};

export default AboutMe;
