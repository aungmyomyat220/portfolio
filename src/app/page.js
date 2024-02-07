'use client'
import HomePage from '../app/component/home/page'
import NavBar from '../app/component/navbar/page'
import {createContext, useState} from "react";
const ThemeContext = createContext("dark")
export default function Home() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = (data) => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
  return (
    <div className={`${theme === 'dark'?'bg-black' : 'bg-white'} w-full h-screen flex flex-col justify-center items-center font-poppin`}>
        <ThemeContext.Provider value={theme}>
            <NavBar theme={theme} onThemeChange={toggleTheme}></NavBar>
        </ThemeContext.Provider>
      <HomePage theme={theme}></HomePage>
    </div>
  );
}
