'use client'
import React from "react";
import Image from "next/image";
import AMM from "../../../../public/image/profile.jpg";
import { TypeAnimation } from 'react-type-animation';
import Icon from '@/app/[locale]/_icon/page.js'
import Buttons from './button'
import {useTranslations} from "next-intl";
const Page = ({theme}) => {
    const t = useTranslations('Index')
  return (
    <div
      id='home'
      className={"z-0 w-full h-screen max-w-6xl flex flex-col sm:flex-row justify-center items-center mb-36"}
    >
      <div>
        <Image src={AMM} alt="Profile" className={"rounded-full w-72 h-72 transition delay-100 hover:scale-105"} />
      </div>

      <div className={"flex flex-col sm:ml-24 text-center mt-5"}>
        <span className={`${theme==='dark' ? 'text-gray-400' : 'text-gray-600'} font-semibold`}>{t('intro')}</span>
        <span className={`${theme === 'dark'?'bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-transparent':'text-black'} py-2 font-bold sm:text-5xl text-4xl my-5`}>
          {t('name')}
        </span>
          <div className={`${theme==='dark' ? 'text-gray-400' : 'text-gray-600'} font-semibold`}>
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                1000,
                'NextJS Developer',
                1000,
                'Java Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>

        {/*Button*/}
        <Buttons theme={theme}></Buttons>

        {/*Icons*/}
        <Icon theme={theme}></Icon>
      </div>
    </div>
  );
};

export default Page;
