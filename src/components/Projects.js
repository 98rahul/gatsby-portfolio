import React from 'react'
import * as styles from "../styles/projectsCard.module.css";
import Button from "./Button";
import { SVG } from "../svg";
import img from "../images/frontend/png";
import classNames from "classnames";
import Portfolio2 from '../images/featured/Portfolio-2.png'
import miStoreBanner from '../images/featured/miStore-banner.png';
const projects = [
  {title:'Realsatisfied',link:'',bgImg:Portfolio2, about:'loream 0010',logo:'',img:'',techStack:['Reactjs,','Nextjs,','Tailwind CSS,','CSS']},
    {title:'Mi Clone',link:'',bgImg:miStoreBanner, about:'loream 0010',logo:'',img:'',techStack:['Reactjs,','CSS','']},
    {title:'Portfolio',link:'',bgImg:Portfolio2, about:'loream 0010',logo:'',img:'',techStack:['Gatsby,','CSS','']},
    {title:'Portfolio',link:'',bgImg:Portfolio2, about:'loream 0010',logo:'',img:'',techStack:['Gatsby,','CSS','']},
]

const Projects = () => {
  return (
    <div className={styles.container} id="Projects">
      <div className={styles.projectsBtn} role="button">
        <img src={img.project} alt="" srcset="" />
        <span>Projects</span>
      </div>
      {/* <div className={styles.aboutMe}>
        <span>
          My
          <b style={{ color: "aqua", marginLeft: "10px" }}>Specializations</b>
        </span>
      </div> */}
      <div className={styles.cardContainer}>
        {projects.map((item, id) => <ProjectCard {...item} id={id+1} />)}
      </div>
    </div>
  )
}
const ProjectCard = (item) => {
  return (
    <div className={classNames(styles.card_box_wrapper,item.id % 2 === 0 ? styles.rightSwing : styles.leftSwing)}>
        <img src={item.bgImg} alt="" srcset="" className={classNames(styles.card_boxImg,item.id % 2>0 ? styles.rightSwing : styles.leftSwing)} />
      <div className={styles.textContent}>
         <div className="className">{`item.logo` }</div>
          <div className="className">{ item.title}</div>
          <div className="className">{ item.about}</div>
          <div className={styles.stack_list}>
            {item.techStack.map((st) => <span>{st}</span>)}
          </div>
      </div>
    </div>
  )
}
export default Projects