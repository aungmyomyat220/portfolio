import React from 'react'

const Button = () => {
  return (
    <div>
      <div className={'mt-3'}>
        <button
          className={
            "rounded-full mt-5 py-3 px-4 border border-black text-sm font-semibold hover:scale-105 transition duration-150"
          }
        >
          Download CV
        </button>
        <button
          className={
            "ml-5 bg-black text-white rounded-full mt-5 py-3 px-4 border border-black text-sm font-semibold hover:scale-105 transition duration-150"
          }
        >
          Contact Info
        </button>
      </div>
    </div>
  )
}

export default Button