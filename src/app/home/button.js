import React from 'react'
import Link from 'next/link'
import {useTranslations} from "next-intl";

const Button = ({theme}) => {
    const t = useTranslations('Index')
  return (
    <div className={'mt-8'}>
      <div>
        <Link
          href='https://drive.google.com/file/d/1GCx00ooykx07UB3G2Gh8IrWF90owbMTD/view?usp=sharing'
          target='_blank'
          className={
            `${theme==='dark'&&"bg-white"} rounded-full mt-5 py-3 px-4 border border-black text-sm font-semibold transition delay-100 hover:scale-105`
          }
        >
            {t('download')}
        </Link>
        <Link
          href='#contact'
          className={
            `ml-5 ${theme==='dark'?'bg-transparent':'bg-black'} text-white rounded-full mt-5 py-3 px-4 border ${theme==='dark'?'border-white':'border-black'} text-sm font-semibold transition delay-100 hover:scale-105`
          }
        >
            {t('Contact')}
        </Link>
      </div>
    </div>
  )
}

export default Button