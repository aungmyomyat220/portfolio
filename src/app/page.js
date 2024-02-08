'use client'
import HomePage from '@/app/home/page'
import NavBar from '@/app/navbar/page'
import Experience from '@/app/experience/page'
import {createContext, useState} from "react";
const ThemeContext = createContext("dark")
export default function Home() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = (data) => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
  return (
    <div className={`${theme === 'dark'?'bg-cyan-950' : 'bg-white'} w-full flex flex-col justify-center items-center font-poppin`}>
        <ThemeContext.Provider value={theme}>
            <NavBar theme={theme} onThemeChange={toggleTheme}></NavBar>
        </ThemeContext.Provider>
      <HomePage theme={theme}></HomePage>
      <Experience theme={theme}></Experience>
    </div>
  );
}
