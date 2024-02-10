'use client'
import React, {useState} from 'react';
import { useInView } from 'react-intersection-observer';
import {useIntersectionObserver} from "@/app/_animation/animation";
const Page = ({theme}) => {
    const [animate,setAnimate] = useState(false)
    const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
        entries.forEach((entry) => {
            setAnimate(entry.isIntersecting)
        })
    })
    return (
        <div className={`w-full h-full flex justify-center items-center sm:mb-56 mb-72 ${theme==='dark'?'text-white': 'text-black'}`} >
            <div className={'w-full h-screen max-w-6xl flex flex-col justify-center items-center'}>
                <span className={`font-semibold text-4xl mb-10 pt-5`} id='experience'>My Journey</span>
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
                            <span>Mawlamyine Technology University</span>
                            <span>My university life has been a wonderful journey of learning, discovery, and growth. I have met many amazing people, explored new ideas, and developed valuable skills that will help me in my future endeavors. I have also enjoyed the freedom and flexibility of managing my own time and schedule, while also facing various challenges and opportunities.</span>
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
                            <span>Qualy Myanmar</span>
                            <span>As a dedicated Quality Assurance (QA) Engineer, I possess a proven track record of ensuring the delivery of high-quality software products through comprehensive testing methodologies and meticulous attention to detail. With a keen eye for identifying potential issues and a commitment to delivering exceptional user experiences, I consistently contribute to the success of projects across various domains.</span>
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <hr/>
                        <div
                            className={`timeline-start sm:text-right text-left timeline-snap-icon flex flex-col ${animate && 'animate-fade-right animate-once animate-duration-[500ms] animate-delay-300'}`}>
                            <span className='italic'>2023-Present</span>
                            <span className='font-bold text-xl'>Web Developer</span>
                            <span>GIC Myanmar</span>
                            <span>As a skilled and creative Web Developer, I specialize in crafting elegant and functional web solutions that meet the unique needs of clients and users alike. With a strong foundation in front-end and back-end development technologies, coupled with a passion for creating intuitive user experiences, I consistently deliver high-quality websites and web applications that drive engagement and achieve business objectives.</span>
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
            </div>
        </div>
    );
};

export default Page;