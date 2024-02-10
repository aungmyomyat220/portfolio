'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import mintheinkha from "../../../public/image/mintheinkhalogo.png";
import myblog from "../../../public/image/myblog.jpg";
import arrow from "../../../public/image/up-arrow.png";
import {useIntersectionObserver} from "@/app/_animation/animation";
import Link from "next/link";

const Page = ({theme}) => {
  const [animate,setAnimate] = useState(false)
  const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
    entries.forEach((entry) => {
      setAnimate(entry.isIntersecting)
    })
  })

  return (
    <div className={"w-full h-screen flex justify-center items-center"} id='project'>
      <div className={'w-full h-screen max-w-6xl flex justify-center items-center'}>
        <div className={'flex justify-center flex-col'}>
          <div ref={cbRef}/>
          <span className={`${theme==='dark' && 'text-white'} font-semibold text-4xl mb-10 text-center ${animate && 'animate-fade-up animate-once animate-duration-[1000ms] animate-delay-500'}'}`}>My Latest Projects</span>
          {/*Projects*/}
          <div
              className={`grid grid-cols-3 grid-rows-2 gap-7 ${animate && 'animate-fade-right animate-once animate-duration-900 animate-delay-900'}`}>
            <Link href='https://bay-din-app-two.vercel.app' className={'group relative w-60 h-60 flex justify-center items-center overflow-hidden rounded-lg'}>
              <Image src={mintheinkha} alt='lathtaukbaydin'
                     className={'w-60 h-60 rounded-lg group-hover:opacity-30 group-hover:transition delay-100 group-hover:scale-110'}/>
              <div
                  className={'absolute w-60 h-60 flex justify-center rounded-lg items-center opacity-0 group-hover:transition delay-100 group-hover:opacity-50 backdrop-opacity-10'}>
              </div>
            </Link>

            <Link href='https://myblog-two-lake.vercel.app' target='_blank' className={'group relative w-60 h-60 flex justify-center items-center overflow-hidden rounded-lg'}>
              <Image src={myblog} alt='myblog'
                     className={'w-60 h-60 rounded-lg group-hover:opacity-30 group-hover:transition delay-100 group-hover:scale-110'}/>
              <div
                  className={'absolute w-60 h-60 flex justify-center rounded-lg items-center opacity-0 group-hover:transition delay-100 group-hover:opacity-50 backdrop-opacity-10'}>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <span className={'flex justify-end items-end h-screen mb-16'}>
        <a href='#home' className={`w-14 h-14 rounded-full ${theme==='dark'?'bg-white':'bg-cyan-800'} flex justify-center items-center ${animate  && 'animate-bounce animate-infinite animate-duration-1000 animate-delay-300'}`}>
            <Image src={arrow} alt='arrow' width={0} height={0} className={'w-5 h-5'}/>
        </a>
      </span>
    </div>
  )
}

export default Page