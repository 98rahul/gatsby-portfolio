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

  const validation = (field) => {
    switch (field) {
      case "name": {
        if (!userInfo.name || userInfo.name.length < 3) {
          setUserInfo((prevState) => {
            return { ...prevState, nameErr: "name is invalid!" };
          });
        }
        return true;
        // flag = true;
        // break;
      }
      case "email": {
        if (!userInfo.email) {
          setUserInfo((prevState) => {
            return { ...prevState, emailErr: "email is invalid!" };
          });
        }
        return true;
        // flag = true;
        // break;
      }
      case "msg": {
        if (!userInfo.msg || userInfo.msg.trim().length < 10) {
          setUserInfo((prevState) => {
            return { ...prevState, msgErr: "message shouldn't too short!" };
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
    <div className={styles.container} id='email'>
      <div className={styles.introBtn}>
        <Button title="contact me" type="success" outline rounded svg={SVG.contact} />
      </div>
      <div className={styles.aboutMe}>
        <span>
          Let's Work
          <b style={{ color: "aqua", marginLeft: "10px" }}>Together</b>
        </span>
      </div>
      <form className={styles.desc}>
        <div className={styles.formDiv}>
          <label>Full Name</label>
          <input
            placeholder="Your Name"
            type="text"
            value={userInfo.name}
            onBlur={() => validation("name")}
            onFocus={() => foucsInput("nameErr")}
            onChange={(e) => getInputVal("name", e.target.value)}
          />
        </div>
        {userInfo.nameErr && <p style={{ color: "red" }}>{userInfo.nameErr}</p>}
        {/* {!userInfo.name && <p style={{ color: "red" }}>Name filed can't be blank</p>} */}
        <div className={styles.formDiv}>
          <label>Email</label>
          <input
            placeholder="Your Email"
            type="email"
            value={userInfo.email}
            onBlur={() => validation("email")}
            onFocus={() => foucsInput("emailErr")}
            onChange={(e) => getInputVal("email", e.target.value)}
          />
        </div>
        {userInfo.emailErr && (
          <p style={{ color: "red" }}>{userInfo.emailErr}</p>
        )}
        <div className={styles.formDiv}>
          <label>Message</label>
          <input
            placeholder="Your Message"
            type="text"
            value={userInfo.msg}
            onBlur={() => validation("msg")}
            onFocus={() => foucsInput("msgErr")}
            onChange={(e) => getInputVal("msg", e.target.value)}
          />
        </div>
        {userInfo.msgErr && <p style={{ color: "red" }}>{userInfo.msgErr}</p>}
      </form>
      <div className={styles.dashed}></div>
      <div className={styles.btn} onClick={handleSubmit}>
        <Button title="Send" type="success" rounded />
      </div>
    </div>
  );
};
