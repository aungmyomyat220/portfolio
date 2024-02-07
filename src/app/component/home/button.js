import React from 'react'

const Button = () => {
  return (
    <div>
      <div className={'mt-3'}>
        <button
          className={
            "rounded-full mt-5 py-3 px-4 border border-black text-sm font-semibold transition delay-150 hover:scale-105"
          }
        >
          Download CV
        </button>
        <button
          className={
            "ml-5 bg-black text-white rounded-full mt-5 py-3 px-4 border border-black text-sm font-semibold transition delay-150 hover:scale-105"
          }
        >
          Contact Info
        </button>
      </div>
    </div>
  )
}

export default Button