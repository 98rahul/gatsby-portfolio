import React from "react";
import * as styles from "../styles/profile.module.css";
import { graphql } from "gatsby";
import dp from '../images/rahulDp.jpeg'
const Profile = (props) => {
  console.log('img--',props)
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.name}>Rahul Raj</span>
        <div className={styles.jobDesc}>
          <span>Full Stack </span>
          <span>Web-Developer </span>
        </div>
      </div>
      <div className={styles.imgBox}>
        <img src={dp} alt="rahul-dp" style={{height:'12vw',width:'12vw',objectFit:'cover',borderRadius: '50%' }} />
      </div>
      <div className={styles.contact}>
        <span>17755nith@gmail.com</span>
        <span>Delhi,India</span>
      </div>
      <div className={styles.socialMedia}>
        <span
          className={styles.github}
          onClick={() => window.open("https://github.com/98rahul")}
          // href="https://google.com"
        >
          {/* <a href="https://google.com"> google</a> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M9.35 16.88c0 .07-.07.12-.17.12S9 17 9 16.88s.08-.12.17-.12s.18.05.18.12Zm-1-.15c0 .07 0 .15.14.17a.15.15 0 0 0 .2-.07c0-.07 0-.14-.14-.17s-.18 0-.2.07Zm1.42-.05c-.09 0-.15.08-.14.16s.09.11.19.09s.15-.09.14-.16s-.09-.1-.19-.09ZM11.9 4A7.83 7.83 0 0 0 4 12.07A8.29 8.29 0 0 0 9.47 20c.41.07.56-.19.56-.4v-2s-2.26.5-2.74-1c0 0-.36-1-.89-1.21c0 0-.74-.52.05-.51a1.67 1.67 0 0 1 1.24.85a1.69 1.69 0 0 0 2.36.69a1.83 1.83 0 0 1 .51-1.11c-1.8-.21-3.62-.47-3.62-3.66A2.54 2.54 0 0 1 7.7 9.7a3.21 3.21 0 0 1 .08-2.24c.68-.22 2.23.89 2.23.89a7.46 7.46 0 0 1 4.05 0s1.55-1.11 2.23-.89a3.14 3.14 0 0 1 .08 2.24a2.61 2.61 0 0 1 .83 1.95c0 3.2-1.9 3.45-3.7 3.66a2 2 0 0 1 .5 1.5v2.77a.42.42 0 0 0 .56.4A8.22 8.22 0 0 0 20 12.07A8 8 0 0 0 11.9 4ZM7.14 15.41v.17a.12.12 0 0 0 .17 0s0-.11 0-.18s-.13-.03-.17.01Zm-.35-.27s0 .1.07.13a.09.09 0 0 0 .14 0s0-.1-.07-.13s-.12-.03-.14 0Zm1 1.18v.21c0 .07.17.08.21 0s0-.14 0-.21s-.13-.05-.17 0Zm-.37-.49v.2c0 .08.14.11.19.08a.16.16 0 0 0 0-.21c-.05-.08-.13-.11-.19-.07Z" />
          </svg>
        </span>
        <span
          className={styles.linkdin}
          onClick={() =>
            window.open("https://www.linkedin.com/in/rahulmoh-98-63-51-ode/")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8 19H5V9h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085c-.779 0-1.273.388-1.521 1.165V19h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678c1.025 0 1.854.285 2.487 1.001c.637.717.954 1.679.954 3.03V19z" />
            <ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5" />
          </svg>
        </span>
        <span
          className={styles.facebook}
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100009497116839"
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M14.2 2.875A4.625 4.625 0 0 0 9.575 7.5v2.575H7.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V20.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 0 0-.218-.28h-3.347V7.5a.775.775 0 0 1 .775-.775h2.6c.124 0 .225-.1.225-.225V3.1c0-.124-.1-.225-.225-.225h-2.6Z" />
          </svg>
        </span>
        <span
          className={styles.whatsApp}
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send/?phone=9470284513&text&type=phone_number&app_absent=0"
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
          >
            <path
              fill-rule="evenodd"
              d="M24.504 7.504A11.875 11.875 0 0 0 16.05 4C9.465 4 4.1 9.36 4.1 15.945a11.882 11.882 0 0 0 1.594 5.973L4 28.109l6.336-1.664a11.958 11.958 0 0 0 5.71 1.457h.005c6.586 0 11.945-5.359 11.949-11.949c0-3.191-1.242-6.191-3.496-8.45zM16.05 25.883h-.004a9.93 9.93 0 0 1-5.055-1.383l-.363-.215l-3.762.985l1.004-3.665l-.234-.375a9.904 9.904 0 0 1-1.52-5.285c0-5.472 4.457-9.925 9.938-9.925a9.863 9.863 0 0 1 7.02 2.91a9.875 9.875 0 0 1 2.905 7.023c0 5.477-4.457 9.93-9.93 9.93zm5.445-7.438c-.297-.148-1.766-.87-2.039-.968c-.273-.102-.473-.149-.672.148c-.2.3-.77.973-.945 1.172c-.172.195-.348.223-.645.074c-.3-.148-1.261-.465-2.402-1.484c-.887-.79-1.488-1.77-1.66-2.067c-.176-.3-.02-.46.129-.61c.136-.132.3-.347.449-.523c.148-.171.2-.296.3-.496c.098-.199.048-.375-.027-.523c-.074-.148-.671-1.621-.921-2.219c-.243-.582-.489-.5-.672-.511c-.172-.008-.371-.008-.57-.008c-.2 0-.524.074-.798.375c-.273.297-1.043 1.02-1.043 2.488c0 1.469 1.07 2.89 1.22 3.09c.148.195 2.105 3.21 5.1 4.504a16.85 16.85 0 0 0 1.7.629c.715.226 1.367.195 1.883.12c.574-.085 1.765-.722 2.015-1.421c.247-.695.247-1.293.172-1.418c-.074-.125-.273-.2-.574-.352z"
            />
          </svg>
        </span>
        <span
          className={styles.email}
          // onClick={() => window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new")}
        >
          <a href="#email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M22 8.98V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1c0 1.48.65 2.79 1.67 3.71L12 11L4 6v2l8 5l5.3-3.32c.54.2 1.1.32 1.7.32c1.13 0 2.16-.39 3-1.02zM16 5c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3z" />
            </svg>
          </a>
        </span>
      </div>
      <button style={{cursor:'pointer'}}>Hire Me</button>
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
