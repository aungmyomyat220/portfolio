'use client'
import HomePage from '@/app/[locale]/home/page'
import NavBar from '@/app/[locale]/_navbar/page'
import Project from '@/app/[locale]/project/page'
import Experience from '@/app/[locale]/experience/page'
import TechStack from '@/app/[locale]/techstack/page'
import Contact from '@/app/[locale]/contact/page'
import Footer from '@/app/[locale]/_footer/page'
import {useEffect, useState} from "react";
import Close from '../../../public/image/close.png'
import Close_White from '../../../public/image/close-w.png'
import Link from 'next/link'
import Image from 'next/image'
import {useTranslations} from 'next-intl';
import {useParams} from "next/navigation";
export default function Home() {
    const {locale} = useParams()
    const t = useTranslations('Index');
    const [theme, setTheme] = useState('dark');
    const [panel, setPanel] = useState(false);

    const toggleTheme = (data) => {
        setTheme(data === 'dark' ? 'dark' : 'light');
        localStorage.setItem('Theme',data)
    };

    const showPanel = (data) => {
      setPanel(data)
    }

    useEffect(() => {
        const darkMode = localStorage.getItem("Theme")
        setTheme(darkMode === 'dark' ? 'dark' : 'light')
    }, []);

  return (
      <>
          {
              panel ?
                  <div
                      className={`w-full h-screen ${theme === 'dark' ? 'bg-cyan-950 text-white border' : 'bg-gray-50 text-black'} flex flex-col justify-center items-center`}>
            <span
                className={'absolute top-0 right-0 mt-6 mr-5 w-10 h-10 animate-fade-down animate-once animate-duration-[1000ms] animate-delay-300'}
                onClick={() => setPanel(false)}>
              {theme === 'dark' ?
                  <Image src={Close_White} alt='Close' width={0} height={0}></Image>
                  :
                  <Image src={Close} alt='Close' width={0} height={0}></Image>
              }
            </span>
                      <div className={'text-xl flex flex-col'}>
                          <Link href='#about'
                                className={`animate-fade-up animate-once animate-duration-[1000ms] animate-delay-300 border ${theme === 'dark' ? 'border-white' : 'border-black'} mb-5 px-20 py-2 text-center`}
                                onClick={() => setPanel(false)}>Home</Link>
                          <Link href='#skill'
                                className={`animate-fade-up animate-once animate-duration-[1000ms] animate-delay-500 border ${theme === 'dark' ? 'border-white' : 'border-black'} mb-5 px-20 py-2 text-center`}
                                onClick={() => setPanel(false)}>Skills</Link>
                          <Link href='#experience'
                                className={`animate-fade-up animate-once animate-duration-[1000ms] animate-delay-700 border ${theme === 'dark' ? 'border-white' : 'border-black'} mb-5 px-20 py-2 text-center`}
                                onClick={() => setPanel(false)}>Experiences</Link>
                          <Link href='#project'
                                className={`animate-fade-up animate-once animate-duration-[1000ms] animate-delay-1000 border ${theme === 'dark' ? 'border-white' : 'border-black'} mb-5 px-20 py-2 text-center`}
                                onClick={() => setPanel(false)}>Projects</Link>
                          <Link href='#contact'
                                className={`animate-fade-up animate-once animate-duration-[1000ms] animate-delay-1000 border ${theme === 'dark' ? 'border-white' : 'border-black'} mb-5 px-20 py-2 text-center`}
                                onClick={() => setPanel(false)}>Contact</Link>
                      </div>
                  </div> :
                  <div id='home'
                       className={`${theme === 'dark' ? 'bg-cyan-950' : 'bg-white'} w-full flex flex-col justify-center items-center font-poppin scroll-smooth`}>
                      <NavBar theme={theme} panel={showPanel} onThemeChange={toggleTheme} language={locale}></NavBar>
                      <HomePage theme={theme}></HomePage>
                      <TechStack theme={theme}></TechStack>
                      <Experience theme={theme}></Experience>
                      <Project theme={theme}></Project>
                      <Contact theme={theme}></Contact>
                      <Footer theme={theme}></Footer>
                  </div>
          }
      </>
  );
}
