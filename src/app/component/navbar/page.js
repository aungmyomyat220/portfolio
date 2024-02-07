'use client'
import MenuBar from '../../../../public/image/menu.png'
import Image from 'next/image'
import Light from '../../../../public/image/brightness.png'
import Dark from '../../../../public/image/night-mode.png'
import { useState } from 'react'
const Page = () => {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div className={'flex flex-row sm:justify-between w-full max-w-6xl mt-8 font-semibold text-lg cursor-pointer px-7'}>
      <span>Aung Myo Myat</span>

      <div className={'flex flex-row items-center ml-36'}>
        <div>
          {
            darkMode?
              <Image src={Light} alt='light mode' className={'w-5 h-5 sm:mr-5'} onClick={()=>setDarkMode(!darkMode)}/> :
              <Image src={Dark} alt='light mode' className={'w-5 h-5 sm:mr-5'} onClick={()=>setDarkMode(!darkMode)}/>
          }
        </div>
        <div className={'hidden sm:block'}>
          <span className={'mr-6'}>About</span>
          <span className={'mr-6'}>Experience</span>
          <span className={'mr-6'}>Projects</span>
          <span>Contact</span>
        </div>
      </div>

      <div className={'sm:hidden ml-4'}>
        <Image src={MenuBar} alt='menu bar' className={'w-7 h-7'}/>
      </div>
    </div>
  );
};

export default Page;