'use client'
import HomePage from '@/app/home/page'
import NavBar from '@/app/_navbar/page'
import Project from '@/app/project/page'
import Experience from '@/app/experience/page'
import {createContext, useEffect, useState} from "react";
const ThemeContext = createContext("dark")
export default function Home() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = (data) => {
        if(data === 'light'){
            setTheme('light');
            localStorage.setItem('theme',"light")
        }else
            setTheme('dark')
            localStorage.setItem('theme',"dark")
    };

    useEffect(() => {
        const color = localStorage.getItem('theme')
        setTheme(color)
    }, []);

  return (
    <div id='home' className={`${theme === 'dark'?'bg-cyan-950' : 'bg-white'} w-full flex flex-col justify-center items-center font-poppin !scroll-smooth`}>
        <ThemeContext.Provider value={theme}>
            <NavBar theme={theme} onThemeChange={toggleTheme}></NavBar>
        </ThemeContext.Provider>
        <HomePage theme={theme}></HomePage>
        <Experience theme={theme}></Experience>
        <Project theme={theme}></Project>
    </div>
  );
}
