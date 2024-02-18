'use client'
import React, {useState} from 'react';
import mark_dark from "../../../public/image/guarantee.png"
import mark_white from "../../../public/image/guarantee_white.png"
import {useIntersectionObserver} from "@/app/_animation/animation";
import Image from "next/image";
import SkillSheet from '.././../../public/json/skillsheet.json'

const Page = ({theme}) => {
    let mark = theme === 'dark' ? mark_white : mark_dark
    const [animate,setAnimate] = useState(false)
    const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
        entries.forEach((entry) => {
            setAnimate(entry.isIntersecting)
        })
    })
    return (
      <div className={`w-full h-screen flex justify-center items-center relative sm:pb-0 pb-24 mt-40 sm:mt-0 ${theme === 'dark'?'text-white':'text-black'}`} id='skill'>
          <div className={'w-full h-screen max-w-6xl flex flex-col justify-center items-center'}>
              <span
                className={`${theme === 'dark' && 'text-white'} font-semibold text-4xl mb-2 text-center pt-5`}
                ref={cbRef}>Skills</span>
              <span className={`mb-10`}>My Technical Level</span>
              <div className={'w-full grid grid-cols-1 sm:grid-cols-3 gap-10 px-5'}>
                  <div className={`border border-white rounded-xl flex flex-col items-center py-5 h-80 ${animate && 'animate-fade-right animate-once animate-duration-[1000ms] animate-delay-500'}'}`}>
                      <div className={'mb-8 text-lg text-blue-500 font-bold'}>FrontEnd</div>
                      <div className={'grid grid-cols-2 gap-7'}>
                          {/*1st Column*/}
                          <div>
                              {/*1st Row*/}
                              <div className={'flex flex-row'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>HTML</span>
                                      <span className={'text-gray-300 text-xs'}>Advanced</span>
                                  </div>
                              </div>
                              {/*2nd Row*/}
                              <div className={'flex flex-row mt-6'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>CSS</span>
                                      <span className={'text-gray-300 text-xs'}>Intermediate</span>
                                  </div>
                              </div>
                              {/*3rd Row*/}
                              <div className={'flex flex-row mt-6'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>JavaScript</span>
                                      <span className={'text-gray-300 text-xs'}>Advanced</span>
                                  </div>
                              </div>
                          </div>

                          {/*2nd Column*/}
                          <div>
                              {/*1st Row*/}
                              <div className={'flex flex-row'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>Tailwind</span>
                                      <span className={'text-gray-300 text-xs'}>Advanced</span>
                                  </div>
                              </div>
                              {/*2nd Row*/}
                              <div className={'flex flex-row mt-6'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>NextJS</span>
                                      <span className={'text-gray-300 text-xs'}>Intermediate</span>
                                  </div>
                              </div>
                              {/*3rd Row*/}
                              <div className={'flex flex-row mt-6'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>React</span>
                                      <span className={'text-gray-300 text-xs'}>Advanced</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className={`border border-white rounded-xl flex flex-col items-center py-5 h-80 ${animate && 'animate-fade-up animate-once animate-duration-[1000ms] animate-delay-500'}'}`}>
                      <div className={'mb-8 text-lg text-blue-500 font-bold'}>BackEnd</div>
                      <div className={'grid grid-cols-2 gap-7'}>
                          {/*1st Column*/}
                          <div>
                              {/*1st Row*/}
                              <div className={'flex flex-row'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>ExpressJS</span>
                                      <span className={'text-gray-300 text-xs'}>Intermediate</span>
                                  </div>
                              </div>
                              {/*2nd Row*/}
                              <div className={'flex flex-row mt-6'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>Java</span>
                                      <span className={'text-gray-300 text-xs'}>Intermediate</span>
                                  </div>
                              </div>
                              {/*3rd Row*/}
                              <div className={'flex flex-row mt-6'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>NodeJs</span>
                                      <span className={'text-gray-300 text-xs'}>Intermediate</span>
                                  </div>
                              </div>
                          </div>

                          {/*2nd Column*/}
                          <div>
                              {/*1st Row*/}
                              <div className={'flex flex-row'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>Python</span>
                                      <span className={'text-gray-300 text-xs'}>Basic</span>
                                  </div>
                              </div>
                              {/*2nd Row*/}
                              <div className={'flex flex-row mt-6'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>MongoDB</span>
                                      <span className={'text-gray-300 text-xs'}>Intermediate</span>
                                  </div>
                              </div>
                              {/*3rd Row*/}
                              <div className={'flex flex-row mt-6'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>MySQL</span>
                                      <span className={'text-gray-300 text-xs'}>Intermediate</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className={`border border-white rounded-xl flex flex-col items-center py-5 h-80 ${animate && 'animate-fade-left animate-once animate-duration-[1000ms] animate-delay-500'}'}`}>
                      <div className={'mb-8 text-lg text-blue-500 font-bold'}>Tools</div>
                      <div className={'grid grid-cols-2 gap-7'}>
                          {/*1st Column*/}
                          <div>
                              {/*1st Row*/}
                              <div className={'flex flex-row'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>PostMan</span>
                                      <span className={'text-gray-300 text-xs'}>Intermediate</span>
                                  </div>
                              </div>
                              {/*2nd Row*/}
                              <div className={'flex flex-row mt-6'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>Docker</span>
                                      <span className={'text-gray-300 text-xs'}>Basic</span>
                                  </div>
                              </div>
                              {/*3rd Row*/}
                              <div className={'flex flex-row mt-6'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>Git</span>
                                      <span className={'text-gray-300 text-xs'}>Intermediate</span>
                                  </div>
                              </div>
                          </div>

                          {/*2nd Column*/}
                          <div>
                              {/*1st Row*/}
                              <div className={'flex flex-row'}>
                                  <div className={'mr-2 flex mt-1'}>
                                      <Image src={mark} alt='mark' className={'w-5 h-5'}/>
                                  </div>
                                  <div className={'flex flex-col'}>
                                      <span className={'font-bold text-xl'}>Python</span>
                                      <span className={'text-gray-300 text-xs'}>Basic</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
    );
};

export default Page;