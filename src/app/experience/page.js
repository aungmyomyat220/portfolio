import React from 'react'
import { motion, useScroll } from "framer-motion"
import Image from 'next/image'
import mintheinkha from "../../../public/image/mintheinkhalogo.png";
const Page = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className={"w-full h-screen flex justify-center items-center"} id='experience'>
      <div className={'w-full h-screen max-w-6xl flex justify-center items-center'}>
        <motion.div style={{ scaleX: scrollYProgress }} className={'flex justify-center flex-col'}>
          <span className={'font-semibold text-4xl mb-10 text-center'}>My Latest Projects</span>

          {/*Projects*/}
          <div className={'grid grid-cols-3 grid-rows-2 gap-5'}>
            <div className={'group relative w-60 h-60 flex justify-center items-center'}>
              <Image src={mintheinkha} alt='test' className={'w-60 h-60 rounded-lg group-hover:opacity-30 group-hover:transition delay-100 overflow-hidden'}/>
              <div className={'absolute w-60 h-60 flex justify-center rounded-lg items-center opacity-0' +
                ' group-hover:transition delay-100 group-hover:opacity-50 bg-gradient-to-t from-sky-600 to-transparent'}>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Page