'use client'
import React, {useState} from 'react';
import { useInView } from 'react-intersection-observer';
import {useIntersectionObserver} from "@/app/_animation/animation";
import Image from "next/image";
import arrow from "../../../public/image/up-arrow.png";
const Page = ({theme}) => {
    console.log(theme)
    const [animate,setAnimate] = useState(false)
    const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
        entries.forEach((entry) => {
            setAnimate(entry.isIntersecting)
        })
    })
    return (
        <div className={`relative w-full h-screen flex justify-center items-center sm:mb-56 mb-72 ${theme==='dark'?'text-white': 'text-black'}`} >
            <div className={'w-full h-screen max-w-6xl flex flex-col justify-center items-center'}>
                <span className={`font-semibold text-4xl mb-10 pt-5`}  id='experience'>My Journey</span>

                {/*TimeLine*/}
                <span>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-5">
                    <li>
                        <hr/>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill='currentColor'
                                 className={`w-5 h-5 `}>
                                <path fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                      clipRule="evenodd"/>
                            </svg>
                        </div>
                        <div
                            className={`${animate && 'animate-fade-right animate-once animate-duration-[500ms] animate-delay-300'} pb-12 timeline-start sm:text-right text-left timeline-snap-icon flex flex-col`}>
                            <div ref={cbRef}/>
                            <span className='italic'>2014-2020</span>
                            <span className='font-bold text-xl'>University Student</span>
                            <span className={'text-[#5F9DF7]'}>Mawlamyine Technology University</span>
                            <span>Studied Information Technology with a focus on Computer Science and programming. Delved into various languages and concepts, aiming to contribute to the dynamic tech field.</span>
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <hr/>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="w-5 h-5 ">
                                <path fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                      clipRule="evenodd"/>
                            </svg>
                        </div>
                        <div
                            className={`timeline-end text-left pb-12 timeline-snap-icon flex flex-col ${animate && 'animate-fade-left animate-once animate-duration-[500ms] animate-delay-300'}`}>
                            <span className='italic'>2022-2023</span>
                            <span className='font-bold text-xl'>Quality Assurance Engineer</span>
                            <span className={'text-[#5F9DF7]'}>Qualy Myanmar</span>
                            <span>QA Engineer at Qualy Myanmar, Mawlamyine. Ensuring top-notch software quality through rigorous testing and attention to detail, contributing to the company&apos;s reputation for excellence in the tech industry.</span>
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <hr/>
                        <div
                            className={`timeline-start sm:text-right text-left timeline-snap-icon flex flex-col ${animate && 'animate-fade-right animate-once animate-duration-[500ms] animate-delay-300'}`}>
                            <span className='italic'>2023-Present</span>
                            <span className='font-bold text-xl'>Web Developer</span>
                            <span className={'text-[#5F9DF7]'}>GIC Myanmar</span>
                            <span>As a web developer at GIC Myanmar, I&apos;m dedicated to crafting engaging and efficient online experiences. Leveraging cutting-edge technologies and innovative design principles, I strive to create websites that captivate audiences and drive business growth.</span>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="w-5 h-5">
                                <path fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                      clipRule="evenodd"/>
                            </svg>
                        </div>
                        <hr/>
                    </li>
                </ul>
                </span>

                {/*Button*/}
                <span className={`absolute right-0 bottom-0 mb-10 mr-5 animate-bounce rounded-full ${theme==='dark'?'bg-white':'bg-[#adb4bf]'}`}>
                <a href='#home'
                   className={`w-14 h-14 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-dark'} flex justify-center items-center`}>
                    <Image src={arrow} alt='arrow' width={0} height={0} className={'w-5 h-5'}/>
                </a>
          </span>
            </div>
        </div>
    );
};

export default Page;