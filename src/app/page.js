'use client'
import HomePage from '@/app/home/page'
import NavBar from '@/app/_navbar/page'
import Project from '@/app/project/page'
import Experience from '@/app/experience/page'
import TechStack from '@/app/techstack/page'
import {createContext, useEffect, useState} from "react";
export default function Home() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = (data) => {
        setTheme(data === 'dark' ? 'dark' : 'light');
        localStorage.setItem('Theme',data)
    };

    useEffect(() => {
        const darkMode = localStorage.getItem("Theme")
        setTheme(darkMode === 'dark' ? 'dark' : 'light')
    }, []);

  return (
    <div id='home' className={`${theme === 'dark'?'bg-cyan-950' : 'bg-white'} w-full flex flex-col justify-center items-center font-poppin scroll-smooth`}>
        <NavBar theme={theme} onThemeChange={toggleTheme}></NavBar>
        <HomePage theme={theme}></HomePage>
        <TechStack theme={theme}></TechStack>
        <Experience theme={theme}></Experience>
        <Project theme={theme}></Project>
    </div>
  );
}
