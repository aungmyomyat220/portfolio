'use client'
import MenuBar from '../../../public/image/menu.png'
import Image from 'next/image'
import Light from '../../../public/image/sun.png'
import Dark from '../../../public/image/night-mode.png'
import { useState } from 'react'
import Link from 'next/link'
const Page = ({theme,onThemeChange}) => {
    const handleClick = (data) => {
        onThemeChange(data);
    };
  return (
    <div className={`flex flex-row sm:justify-between w-full max-w-6xl mt-8 font-semibold text-lg cursor-pointer px-7 ${theme === 'dark'?'text-white':'text-black'}`}>
      <span>Aung Myo Myat</span>

      <div className={'flex flex-row items-center ml-32'}>
        <div>
          {
            theme==='light'?
              <Image src={Dark} alt='dark mode' className={'w-5 h-5 sm:mr-5'} onClick={()=>handleClick('dark')}/> :
              <Image src={Light} alt='light mode' className={'w-5 h-5 sm:mr-5'} onClick={()=>handleClick('light')}/>
          }
        </div>
        <div className={'hidden sm:block'}>
          <span className={'mr-6'}>About</span>
          <span className={'mr-6'}>
            <Link href='#experience'>Experience</Link>
          </span>
          <span className={'mr-6'}>
              <Link href='#project'>Projects</Link>
          </span>
          <span>Contact</span>
        </div>
      </div>

      <div className={'sm:hidden ml-3'}>
        <Image src={MenuBar} alt='menu bar' className={'w-7 h-7'}/>
      </div>
    </div>
  );
};

export default Page;