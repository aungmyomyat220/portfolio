'use client'
import MenuBar from '../../../../public/image/menu.png'
import Image from 'next/image'
import Light from '../../../../public/image/sun.png'
import Dark from '../../../../public/image/night-mode.png'
import { useState } from 'react'
const Page = ({theme,onThemeChange}) => {
    const handleClick = () => {
      onThemeChange(!theme);
    };
  return (
    <div className={`flex flex-row sm:justify-between w-full max-w-6xl mt-8 font-semibold text-lg cursor-pointer px-7 ${theme === 'dark'?'text-white':'text-black'}`}>
      <span>Aung Myo Myat</span>

      <div className={'flex flex-row items-center ml-32'}>
        <div>
          {
            theme==='light'?
              <Image src={Dark} alt='dark mode' className={'w-5 h-5 sm:mr-5'} onClick={handleClick}/> :
              <Image src={Light} alt='light mode' className={'w-5 h-5 sm:mr-5'} onClick={handleClick}/>
          }
        </div>
        <div className={'hidden sm:block'}>
          <span className={'mr-6'}>About</span>
          <span className={'mr-6'}>Experience</span>
          <span className={'mr-6'}>Projects</span>
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