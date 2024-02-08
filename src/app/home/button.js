import React from 'react'

const Button = ({theme}) => {
  return (
    <div>
      <div className={'mt-3'}>
        <button
          className={
            `${theme==='dark'&&"bg-white"} rounded-full mt-5 py-3 px-4 border border-black text-sm font-semibold transition delay-100 hover:scale-105`
          }
        >
          Download CV
        </button>
        <button
          className={
            `ml-5 ${theme==='dark'?'bg-transparent':'bg-black'} text-white rounded-full mt-5 py-3 px-4 border ${theme==='dark'?'border-white':'border-black'} text-sm font-semibold transition delay-100 hover:scale-105`
          }
        >
          Contact Info
        </button>
      </div>
    </div>
  )
}

export default Button