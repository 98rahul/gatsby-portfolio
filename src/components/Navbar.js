import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
const Navbar = ({ switchTheme, theme }) => {
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
    switchTheme(!theme);
  };
  return (
    <nav style={{zIndex:100}}>
      <h1>{title} </h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link> */}
        <Link to="/#about">About</Link>
        <Link to="/project">Portfolio Projects</Link>
        <Link to="/button">Button List</Link>
        <span
          style={{ marginLeft: "14px", cursor: "pointer" ,display:'none'}}
          onClick={changeTheme}
        >
          Theme
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
