'use client'
import React from "react";
import Image from "next/image";
import AMM from "../../../../public/image/aungmyomyat.jpg";
import { TypeAnimation } from 'react-type-animation';
import Icon from '../icon/page.js'
import Buttons from './button'
const Page = () => {
  return (
    <div
      className={"w-full max-w-6xl h-screen flex flex-col sm:flex-row justify-center items-center"}
    >
      <div>
        <Image src={AMM} alt="Profile" className={"rounded-full w-72 h-72 transition delay-100 hover:scale-105"} />
      </div>

      <div className={"flex flex-col sm:ml-24 text-center mt-16"}>
        <span className={"text-gray-600 font-semibold"}>Hello I&apos;m</span>
        <span className={"text-black font-bold sm:text-5xl text-4xl my-5"}>
          Aung Myo Myat
        </span>
        <TypeAnimation
          className={"text-gray-600 sm:text-3xl text-lg font-semibold"}
          sequence={[
            'FrontEnd Developer',
            1000,
            'BackEnd Developer',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />

        {/*Button*/}
        <Buttons></Buttons>

        {/*Icons*/}
        <Icon></Icon>
      </div>
    </div>
  );
};

export default Page;
