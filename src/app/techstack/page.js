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
        <div className={'relative w-full h-screen flex justify-center items-center mb-10'} id='skill'>
            <div>
                Hello this is tech
            </div>
            <span className={`absolute right-0 bottom-0 mb-10 mr-5 rounded-full animate-bounce ${theme==='dark'?'bg-white':'bg-blue-600'}`}>
            <a href='#home'
               className={`w-14 h-14 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-dark'} flex justify-center items-center`}>
                <Image src={arrow} alt='arrow' width={0} height={0} className={'w-5 h-5'}/>
             </a>
          </span>
        </div>
    );
};

export default Page;