import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import Footer from "./Footer";
const layout='layout'
const Layout = ({ children, theme = false, switchTheme }) => {
  console.log('props', switchTheme,theme)
  const active = theme ? 'dark' : 'light'
  return (
    <div className={` layout ${active}` }>
      <Navbar theme={theme} switchTheme={switchTheme} />
      <div className="content">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
