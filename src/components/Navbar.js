import React, { useEffect, useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { SVG } from "../svg/index";
import * as styles from '../styles/navbar.module.css'
import { useThemeContext } from "../store/ThemeContext";
const Navbar = () => {
  const { theme, switchTheme } = useThemeContext();
  const [active, setActive] = useState(SVG.darkMode);
  // query site added here query should not be same
  const data = useStaticQuery(graphql`
    query site {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;
  console.log(data);
  const changeTheme = () => {
    console.log('changeee');
    switchTheme(!theme);
  };
  

  return (
    <nav className={styles.navbar}>
      <h1>{SVG.logo} </h1>
      <div className={styles.links}>
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/about">About</Link> */}
        {/* <Link to="/#about">About</Link> */}
        {/* <Link to="/project">Portfolio Projects</Link>
        <Link to="/button">Button List</Link> */}

        <span onClick={changeTheme} >
          {theme ? SVG.darkMode : SVG.lightMode}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
