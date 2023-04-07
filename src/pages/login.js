import React, { useState } from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/login.module.css";
const Login = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
    nameErr: null,
    passwordErr: null,
  });

  const handleInput = (filed, value) => {
    console.log("filed", filed, value);
    setForm((prevState) => {
      return { ...prevState, [filed]: value };
    });
  };

//   const handleBlur = (field) => {
//     switch (field) {
//       case "name": {
//         console.log("name");
//         setForm((prevState) => {
//           return { ...prevState, [field]: "name field err" };
//         });
//         break;
//       }
//       case "password": {
//         console.log("password");
//         setForm((prevState) => {
//           return { ...prevState, [field]: "password field err" };
//         });
//         break;
//       }
//     }
//   };
  return (
    <Layout>
      <form name="signin" className={styles.container}>
        <h3 className={styles.header}>Sign In</h3>
        <div className={styles.form}>
          <label style={{ margin: "3px 0" }}> Username</label>
          <input
            placeholder="name"
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => handleInput("name", e.target.value)}
          />
        </div>
        <form className={styles.form}>
          <label style={{ margin: "3px 0" }}>
            Password
          </label>
          <input
            placeholder="password"
            type="password"
            name="password"
            value={form.password}
            autocomplete="current-password"
            // className={form.passwordErr ? styles.hidePassword : styles.password}
            onChange={(e) => handleInput("password", e.target.value)}
            // onBlur={() => handleBlur("password")}
          />
        </form>
        <span style={{ margin: "9px 0" }}>Forgot Password</span>
        <div className={styles.bottom}>
          <input type="submit" className={styles.btn} />
          {/* <input type='file' accept=".png,.jpeg,.jpg" /> */}
          {/* <input type='file' accept="image/*" /> */}
          {/* <input type="file" accept="image/*" multiple /> */}
        </div>
      </form>
    </Layout>
  );
};

export default Login;
