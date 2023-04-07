import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import * as styles from "../styles/buttonPage.module.css";

const btnList = [
  { title: "Standard", id: "3", outline: false, rounded: false },
  { title: "Rounded", id: "3", outline: false, rounded: false },
  { title: "Outline", id: "3", outline: false, rounded: false },
  { title: "Round-outline ", id: "3", outline: false, rounded: false },

  { title: "Plain", id: "plain", outline: false, rounded: false },
  { title: "Plain", id: "plain", outline: false, rounded: true },
  { title: "Plain", id: "plain", outline: true, rounded: false },
  { title: "Plain", id: "plain", outline: true, rounded: true },
 
  { title: "Primary", id: "primary", outline: false, rounded: false },
  { title: "Primary", id: "primary", outline: false, rounded: true },
  { title: "Primary", id: "primary", outline: true, rounded: false },
  { title: "Primary", id: "primary", outline: true, rounded: true },

  
  { title: "Secondary", id: "secondary", outline: false, rounded: false },
  { title: "Secondary", id: "secondary", outline: false, rounded: true },
  { title: "Secondary", id: "secondary", outline: true, rounded: false },
  { title: "Secondary", id: "secondary", outline: true, rounded: true },

  { title: "Success", id: "success", outline: false, rounded: false },
  { title: "Success", id: "success", outline: false, rounded: true },
  { title: "Success", id: "success", outline: true, rounded: false },
  { title: "Success", id: "success", outline: true, rounded: true },
  
  { title: "Warning", id: "warning", outline: false, rounded: false },
  { title: "Warning", id: "warning", outline: false, rounded: true },
  { title: "Warning", id: "warning", outline: true, rounded: false },
  { title: "Warning", id: "warning", outline: true, rounded: true },

  { title: "Danger", id: "danger", outline: false, rounded: false },
  { title: "Danger", id: "danger", outline: false, rounded: true },
  { title: "Danger", id: "danger", outline: true, rounded: false },
  { title: "Danger", id: "danger", outline: true, rounded: true },

  { title: "Info", id: "info", outline: false, rounded: false },
  { title: "Info", id: "info", outline: false, rounded: true },
  { title: "Info", id: "info", outline: true, rounded: false },
  { title: "Info", id: "info", outline: true, rounded: true },

  { title: "Dark", id: "dark", outline: false, rounded: false },
  { title: "Dark", id: "dark", outline: false, rounded: true },
  { title: "Dark", id: "dark", outline: true, rounded: false },
  { title: "Dark", id: "dark", outline: true, rounded: true },
];

const Butoon = () => {
  return (
    <Layout>
      <div className={styles.btnGroup}>
        {btnList.map((btn,idx) => {
           
          return <Button type={btn.id} title={btn.title} key={idx} outline={btn.outline} rounded={btn.rounded} />;
        })}
      </div>
      {/* <Button type='primary' rounded outline title='Primary'/> */}
    </Layout>
  );
};

{/* <Button primary outline rounded /> */}
export default Butoon;
