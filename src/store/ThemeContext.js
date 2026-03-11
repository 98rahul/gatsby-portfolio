import React, { Children, useContext, useState } from 'react';
import { createContext } from 'react';

const ThemeContext = createContext('light');
let themeContextValue = {
  theme: 'dark',
  setTheme: () => { },
  switchTheme:()=>{}
}
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // light, dark
  
  function switchTheme() {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  }
  themeContextValue = {
    theme,
    setTheme,
    switchTheme
  }
  console.log('themeProvider :>> ', );
  return (
    <ThemeContext.Provider value={themeContextValue} >
    {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
export const useThemeContext = () => useContext(ThemeContext);
