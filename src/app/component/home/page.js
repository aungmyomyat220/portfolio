'use client'
import React from "react";
import Image from "next/image";
import AMM from "../../../../public/image/aungmyomyat.jpg";
import { TypeAnimation } from 'react-type-animation';
import Icon from '../icon/page.js'
import Buttons from './button'
const Page = ({theme}) => {
  return (
    <div
      className={"w-full max-w-6xl h-screen flex flex-col sm:flex-row justify-center items-center"}
    >
      <div>
        <Image src={AMM} alt="Profile" className={"rounded-full w-72 h-72 transition delay-100 hover:scale-105"} />
      </div>

      <div className={"flex flex-col sm:ml-24 text-center mt-16"}>
        <span className={"${theme==='dark' ? 'text-gray-400' : 'text-gray-600'} text-gray-600 font-semibold"}>Hello I&apos;m</span>
        <span className={`${theme === 'dark'?'text-white':'text-black'} font-bold sm:text-5xl text-4xl my-5`}>
          Aung Myo Myat
        </span>
          <div className={`${theme==='dark' ? 'text-gray-400' : 'text-gray-600'} font-semibold`}>
            <TypeAnimation
              sequence={[
                'FullStack Developer',
                1000,
                'React Developer',
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
        <Icon></Icon>
      </div>
    </div>
  );
};

export default Page;
