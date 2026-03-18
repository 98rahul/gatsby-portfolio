import React, { useState } from "react";
import * as styles from "../styles/contactMe.module.css";
import * as emailJs from "emailjs-com";
import { SVG } from "../svg";
import Button from "./Button";
let flag = false;
export const ContactMe = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    msg: "",
    nameErr: null,
    emailErr: null,
    msgErr: null,
  });

  const getInputVal = (field, value) => {
    setUserInfo((prevState) => {
      return { ...prevState, [field]: value };
    });
  };

  const foucsInput = (fieldErr) => {
    setUserInfo((prevState) => {
      return { ...prevState, [fieldErr]: null };
    });
    // switch (field) {
    //   case "name": {

    //     break;
    //   }
    //   case "email": {
    //     break;
    //   }
    //   case "msg": {
    //     break;
    //   }
    // }
    // return true;
  };
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validation = (field) => {
    switch (field) {
      case "name": {
        if (!userInfo.name?.trim() ) {
          setUserInfo((prevState) => {
            return { ...prevState, nameErr: "Please add your name" };
          });
        }
        return true;
        // flag = true;
        // break;
      }
      case "email": {
        if (!userInfo.email?.trim()) {
          setUserInfo((prevState) => {
              return { ...prevState, emailErr: "Please add your email" };
            });
        }else  if ( !emailRegex.test(userInfo.email?.trim())) {
            setUserInfo((prevState) => {
              return { ...prevState, emailErr: "Please add a valid email" };
            });
          }
        return true;
        // flag = true;
        // break;
      }
      case "msg": {
        if (!userInfo.msg?.trim()) {
          setUserInfo((prevState) => {
            return { ...prevState, msgErr: "Please add the message" };
          });
        }
        return true;
        // flag = true;
        // break;
      }
      default: {
        console.log("defalult");
        if (
          !userInfo.name ||
          userInfo.name.length < 3 ||
          !userInfo.email ||
          userInfo.msg.length < 10 ||
          !userInfo.msg
        ) {
          console.log("inside");
          return true;
        }
        return false;
      }
    }
    return false;
  };

  const handleSubmit = (e) => {
    //validation step---
    let checker = validation();
    console.log("checker", checker);

    if (!checker) {
      //api call
      console.log("call-api",process.env ,process.env.REACT_APP_USER_ID , process.env.REACT_APP_USER_ID);
      const service_id = "service_pb6og7w";
      const template_id = "template_f85fgrz";
      const user_id = "kylbCgzX77hGWZAPM"; // public key in admin/account
      const dataSend = {
        user_name: userInfo.name,
        from_email: userInfo.email,
        message: userInfo.msg,
      };

      emailJs.send(service_id, template_id, dataSend, user_id).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          if (response.status === 200) {
            console.log("done");
            setUserInfo({
              name: "",
              email: "",
              msg: "",
              nameErr: null,
              emailErr: null,
              msgErr: null,
            });
          }
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    }
  };
  return (
    <div className={styles.container} id='Contacts'>
      <div className={styles.introBtn}>
        <Button title="Contact Me"  type="dark" outline rounded svg={SVG.contact} />
      </div>
      <div className={styles.aboutMe}>
        <span>
          Let's Work
          <b style={{ color: "aqua", marginLeft: "10px" }}>Together</b>
        </span>
      </div>
      <form className={styles.formBox}>
        <div className={styles.formDiv}>
          <label>Full Name</label>
          <input
          className={styles.inputField}
            placeholder="Your Name"
            type="text"
            value={userInfo.name}
            onBlur={() => validation("name")}
            onFocus={() => foucsInput("nameErr")}
            onChange={(e) => getInputVal("name", e.target.value)}
          />
        {userInfo.nameErr && <p className={styles.errorMsg}>{userInfo.nameErr}</p>}
        </div>
        {/* {!userInfo.name && <p style={{ color: "red" }}>Name filed can't be blank</p>} */}
        <div className={styles.formDiv}>
          <label>Email</label>
          <input
          className={styles.inputField}
            placeholder="Your Email"
            type="email"
            value={userInfo.email}
            onBlur={() => validation("email")}
            onFocus={() => foucsInput("emailErr")}
            onChange={(e) => getInputVal("email", e.target.value)}
          />
        {userInfo.emailErr && (
          <p className={styles.errorMsg}>{userInfo.emailErr}</p>
        )}
        </div>
        <div className={styles.formDiv}>
          <label>Message</label>
          <textarea
          className={styles.inputField}
            placeholder="Your Message"
            type="text"
            value={userInfo.msg}
            onBlur={() => validation("msg")}
            onFocus={() => foucsInput("msgErr")}
            onChange={(e) => getInputVal("msg", e.target.value)}
          />
        {userInfo.msgErr && <p className={styles.errorMsg}>{userInfo.msgErr}</p>}
        </div>
      </form>
      <div className={styles.dashed}></div>
      <div className={styles.btn} onClick={handleSubmit}>
        <Button title="Send" type="success" rounded />
      </div>
    </div>
  );
};
