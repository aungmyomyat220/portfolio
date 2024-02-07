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
      className={"w-full max-w-6xl h-screen flex justify-center items-center"}
    >
      <div>
        <Image src={AMM} alt="Profile" className={"rounded-full w-72 h-72 transition delay-150 hover:scale-105"} />
      </div>

      <div className={"flex flex-col ml-24 text-center"}>
        <span className={"text-gray-600 font-semibold"}>Hello I&apos;m</span>
        <span className={"text-black font-bold text-5xl my-5"}>
          Aung Myo Myat
        </span>
        <TypeAnimation
          className={"text-gray-600 text-3xl font-semibold"}
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
