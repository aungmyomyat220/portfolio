'use client'
import React, { useState } from 'react'
import Love from '../../../public/image/i-love-you.png'
import Email from '../../../public/image/email.png'
import Rocket from '../../../public/image/startup.png'
import Image from 'next/image'

const Page = ({theme}) => {
  const [emailData , setEmailData] = useState({
      email : "",
      subject : "",
      content : ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleClick = () => {

  }


  return (
    <div className={`w-full h-full flex justify-center items-center relative sm:pb-0 pb-24 mt-40 sm:mt-0 ${theme==='dark'?'text-white':'text-cyan-950'}`} id='project'>
      <div className={'w-full h-screen max-w-6xl flex justify-center items-center'}>
          <div className={'grid grid-cols-2'}>
            <div className={'flex flex-col text-left justify-center'}>
              <span className={'text-5xl mb-3'}>Let&apos;s Chat.</span>
              <span className={'text-5xl mb-5'}>Tell me about your project</span>
              <span className={'flex'}>
                <span className={'text-orange-400'}>Let&apos;s create something together</span>
                <Image src={Love} alt='Love' width={0} height={0} className='w-5 h-5 ml-2'/>
              </span>
              <div className={'px-6 bg-white mt-10 py-5 w-96 rounded-xl flex flex-row drop-shadow-md'}>
                <span className={'mr-5 flex justify-center items-center'}>
                  <Image src={Email} alt='email' width={40} height={40}/>
                </span>
                <span className={'flex flex-col text-cyan-950'}>
                  <span>Mail me at</span>
                  <a href="mailto:aungmyomyat874@gmail.com">aungmyomyat874@gmail.com</a>
                </span>
              </div>
            </div>

            <div className={'flex justify-center items-center'}>
              <div className={`flex flex-col p-7 w-80 h-96 ${theme==='dark'?'bg-white text-cyan-950' : 'bg-cyan-950 text-white'} rounded-xl`}>
                <div className={'flex justify-start mb-5'}>
                  <span className={'text-xl justify-start'}>Send us a message</span>
                  <Image src={Rocket} alt='email' width={30} height={25}/>
                </div>
                <div>
                  <input type="email" name='email' onChange={handleChange} value={emailData.email}
                         className={'outline outline-0 border border-black py-2 px-3 rounded-md text-sm mb-5 w-full'}
                         placeholder={'Email Address'}/>
                  <input type="text" name='subject' onChange={handleChange} value={emailData.subject}
                         className={'outline outline-0 border border-black py-2 px-3 rounded-md text-sm mb-5 w-full'}
                         placeholder={'Subject'}/>
                  <textarea name="content" id="" cols="29" rows="4" onChange={handleChange} value={emailData.content}
                            className={'border border-black rounded-md p-2 resize-none placeholder:text-sm'}
                            placeholder={'Tell us more about your project'}></textarea>

                  <button id="send-btn" className={'mt-5'} onClick={handleClick}>
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Page