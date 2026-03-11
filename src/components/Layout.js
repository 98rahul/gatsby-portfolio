import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import Footer from "./Footer";
import { useThemeContext } from "../store/ThemeContext";
const layout='layout'
const Layout = ({ children }) => {
  const { theme ,switchTheme} = useThemeContext()
  return (
    <div className={`${theme}`}>
    <div className={` layout ` }>
      <Navbar/>
      <div className="content">{children}</div>
      {/* <Footer /> */}
    </div>
    </div>
  );
};

export default Layout;
