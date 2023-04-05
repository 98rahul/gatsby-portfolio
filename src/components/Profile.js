import React from "react";
import * as styles from "../styles/profile.module.css";
const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.name}>Rahul Raj</span>
        <div className={styles.jobDesc}>
          <span>Full Stack </span>
          <span>Web-Developer </span>
        </div>
      </div>
      <div className={styles.imgBox}>Image box</div>
      <div className={styles.contact}>
        <span>17755nith@gmail.com</span>
        <span>Delhi,India</span>
      </div>
      <div className={styles.socialMedia}>
        <span>gitub</span>
        <span>linkdlen</span>
        <span>facebook</span>
        <span>whatsapp</span>
      </div>
      <button>Hire Me</button>
    </div>
  );
};

export default Profile;
