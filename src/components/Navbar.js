import React, { useEffect, useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { SVG } from "../svg/index";
const Navbar = ({ switchTheme, theme }) => {
  // const [active, setActive] = useState(SVG.darkMode);
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
  console.log('navbar-theme', theme);
  // useEffect(() => {
  //   if(theme){
  //     setActive(SVG.darkMode)
  //   }else{
  //     setActive(SVG.lightMode)
  //   }
  // }, [theme,switchTheme]);

  return (
    <nav style={ {zIndex: 100,background: theme ? '#242B2E': 'hsl(250, 93%, 20%)'} }>
      <h1>{SVG.logo} </h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link> */}
        {/* <Link to="/#about">About</Link> */}
        <Link to="/project">Portfolio Projects</Link>
        <Link to="/button">Button List</Link>

        <span onClick={changeTheme} style={{marginLeft:'25px',cursor:'pointer'}}>
          {theme ? SVG.darkMode : SVG.lightMode}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
