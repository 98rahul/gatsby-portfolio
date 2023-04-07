import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import Footer from "./Footer";
const layout='layout'
const Layout = ({ children, theme = false, switchTheme }) => {
  return (
    <div className={ `${theme} :'layout ol' ? ' layout pp'`}>
      <Navbar theme={theme} switchTheme={switchTheme} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
