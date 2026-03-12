import React from "react";
import * as styles from "../styles/profile.module.css";
import { graphql } from "gatsby";
// import dp from '../images/rahulDp.jpeg'
import dp from '../images/rahulNewDp.jpeg'
import { SVG } from "../svg";
const Profile = (props) => {
  console.log('img--',props)
  return (
    <div className={styles.profile_container}>
      <div className={styles.heading}>
        <span className={styles.name}>Full Stack Developer</span>
        {/* <div className={styles.jobDesc}>
          <span>Full Stack Developer</span>
        </div> */}
      </div>
      <div className={styles.mid_wrapper}>
      <div className={styles.imgBox}>
        <img src={dp} alt="rahul-dp" className={styles.img} />
      </div>
      <div className={styles.contact}>
        <span>17755nith@gmail.com</span>
        <span style={{fontSize:'15px'}}>Delhi,India</span>
      </div>

      </div>
      <div className={styles.socialMedia}>
        <span
          className={styles.github}
          onClick={() => window.open("https://github.com/98rahul")}
          // href="https://google.com"
        >
          {/* <a href="https://google.com"> google</a> */}
          {SVG.github}
        </span>
        <span
          className={styles.linkdin}
          onClick={() =>
            window.open("https://www.linkedin.com/in/rahulmoh-98-63-51-ode/")
          }
        >
          {SVG.linkedlen}
        </span>
        <span
          className={styles.facebook}
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100009497116839"
            )
          }
        >
          {SVG.facebook}
        </span>
        <span
          className={styles.whatsApp}
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send/?phone=9470284513&text&type=phone_number&app_absent=0"
            )
          }
        >
          {SVG.whatsApp}
        </span>
        <span
          className={styles.email}
          onClick={() => window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new")}
        >
          <a href="#email">
            {SVG.email}
          </a>
        </span>
      </div>
        <a className={styles.hireMe_btn} href="#Contacts" >Hire Me</a>
    </div>
  );
};

export default Profile;

export const Imgquery = graphql`
  query qry {
    file(relativePath: { eq: "rahulDp.jpeg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
