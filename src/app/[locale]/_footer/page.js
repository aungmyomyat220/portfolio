import React from 'react';
import Image from "next/image";
import GitHub from "../../../../public/image/github.png"
import Linkin from "../../../../public/image/linkedin.png"
import '../../../../public/css/top.css'
import Link from "next/link";
const MyComponent = ({theme}) => {
    return (
        <div className={`flex justify-center w-full h-full ${theme === 'dark' ? 'text-white bg-cyan-950' : 'text-white bg-cyan-950'}`}>
            <div className="w-full max-w-5xl">
                <div className="flex sm:flex-row flex-col justify-between items-center pb-10 sm:pb-0">
                    <div className="py-8 sm:mr-0 sm:ml-0 mr-4 ml-4 text-center">
                        Copyright © 2024. All rights are reserved
                    </div>
                    <div className="flex">
                        <a className="cursor-pointer" href={'https://github.com/aungmyomyat220'} target={"_blank"}>
                            <Image src={GitHub} alt="" className="w-7 h-7"/>
                        </a>
                        <a className="sm:ml-6 ml-6 cursor-pointer" href={'https://www.linkedin.com/in/aung-myo-myat-33b4941a4/'} target={"_blank"}>
                            <Image src={Linkin} alt="" className="w-7 h-7"/>
                        </a>
                        <div className="sm:ml-6 ml-6 cursor-pointer">
                            <Link className="Btn" href="#about">
                                <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
                                    <path
                                        d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
                                </svg>
                                <p className="text">Back to Top</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
