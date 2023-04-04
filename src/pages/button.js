import React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import * as styles from '../styles/buttonPage.module.css'
const btnList = [
  { title: "Plain", id: "plain" },
  { title: "Primary", id: "primary" },
  { title: "Secondary", id: "secondary" },
  { title: "Success", id: "success" },
  { title: "Warning", id: "warning" },
  { title: "Danger", id: "danger" },
];

const Butoon = () => {
  return (
    <Layout>
      <div className={styles.btnGroup}>
        {btnList.map((btn) => {
          return (
            <Button btnType={btn.id} title={btn.title} key={btn.id}/>
          );
        })}
      </div>
    </Layout>
  );
};

export default Butoon;
