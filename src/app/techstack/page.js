'use client'
import React, {useState} from 'react';
import Image from "next/image";
import arrow from "../../../public/image/up-arrow.png";
import {useIntersectionObserver} from "@/app/_animation/animation";

const Page = ({theme}) => {
    const [animate,setAnimate] = useState(false)
    const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
        entries.forEach((entry) => {
            setAnimate(entry.isIntersecting)
        })
    })
    return (
      <div className={"w-full h-screen flex justify-center items-center relative sm:pb-0 pb-24 mt-40 sm:mt-0"} id='skill'>
          <div className={'w-full h-screen max-w-6xl flex flex-col justify-center items-center'}>
              <span
                className={`${theme === 'dark' && 'text-white'} font-semibold text-4xl mb-10 text-center pt-5 ${animate && 'animate-fade-up animate-once animate-duration-[1000ms] animate-delay-500'}'}`}
                ref={cbRef}>Professional SkillSet</span>
            <div className={'w-full h-80 grid grid-cols-3 gap-10 text-white'}>

              <div className={'border border-white flex flex-col justify-center items-center p-5'}>
                <div className={'text-xl'}>FrontEnd</div>
                <div data-tip="Html,Css" className="sm:ml-4 ml-4 tooltip">
                  <a href="https://skillicons.dev" aria-label="View HTML and Css icons">
                    <img src="https://skillicons.dev/icons?i=html,css" alt=""/>
                  </a>
                </div>
              </div>
              <div className={'border border-white flex justify-center p-5'}>
                <span className={'text-xl'}>BackEnd</span>
              </div>
              <div className={'border border-white flex justify-center p-5'}>
                <span className={'text-xl'}>Tools</span>
              </div>
            </div>
          </div>
      </div>
    );
};

export default Page;