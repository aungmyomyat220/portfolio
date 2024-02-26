'use client'
import MenuBar from '../../../public/image/menu.png'
import MenuBarWhite from '../../../public/image/menu-w.png'
import Image from 'next/image'
import Light from '../../../public/image/sun.png'
import Dark from '../../../public/image/night-mode.png'
import eng from '../../../public/image/eng.png'
import jp from '../../../public/image/japan.png'
import Link from 'next/link'
import {useTranslations} from 'next-intl';
import {useRouter} from "next/navigation";
import {useState} from "react";

const Page = ({theme,onThemeChange,panel,language}) => {
    const router = useRouter()
    const t = useTranslations('Index')

    const languageIcon = language === 'en' ?  eng : jp
    const handleClick = (data) => {
      onThemeChange(data);
    };

    const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
    const toggleLanguageDropdown = () => {
        setLanguageDropdownVisible(!languageDropdownVisible);
    };

    const handlePanel = () => {
      panel(true)
    }

    const changeLanguage = () => {
        language === "en" ?
            router.push('/jp') : router.push('/en')
    }

  return (
    <div className={`z-10 ${theme==='dark'?'bg-cyan-950':'bg-white'} fixed justify-between top-0 overflow-hidden flex flex-row w-full max-w-6xl pt-5 pb-2 font-semibold text-lg cursor-pointer px-7 ${theme === 'dark'?'text-white':'text-black'}`}>
          <div>
              <span className={'hover:text-blue-500 hover:transition delay-75 cursor-pointer'}>Aung Myo Myat</span>
              <span className={'text-blue-500 ml-2'}>Dev</span>
          </div>

        <div className={'flex flex-row items-center'}>
            <div>
                {
                    theme === 'light' ?
                        <Image src={Dark} alt='dark mode' className={'w-5 h-5 sm:mr-5'} onClick={()=>handleClick('dark')}/> :
              <Image src={Light} alt='light mode' className={'w-5 h-5 sm:mr-5'} onClick={()=>handleClick('light')}/>
                }
            </div>
            <div className={'hidden sm:block'}>
                <div className={'flex flex-row'}>
                      <span className={'mr-6'}>
                        <Link href='#about' className={'hover:text-blue-500 delay-75'}>{t('Home')}</Link>
                      </span>
                      <span className={'mr-6'}>
                            <Link href='#skill' className={'hover:text-blue-500 delay-75'}>{t('Skills')}</Link>
                      </span>
                      <span className={'mr-6'}>
                        <Link href='#experience' className={'hover:text-blue-500 delay-75'}>{t('Experience')}</Link>
                      </span>
                      <span className={'mr-6'}>
                        <Link href='#project' className={'hover:text-blue-500 delay-75'}>{t('Projects')}</Link>
                      </span>
                      <span className={'mr-6'}>
                        <Link href='#contact' className={'hover:text-blue-500 delay-75'}>{t('Contact')}</Link>
                      </span>

                    <span
                        onClick={changeLanguage}
                        className={'relative mr-6 flex flex-row justify-center items-center'}>
                          <Image src={languageIcon} alt="language" className={'w-4 h-4 mr-1'}/>
                          <span className={'delay-75 flex flex-row items-center justify-center'}>
                            {t('selectLanguage')}
                        </span>
                      </span>

                </div>
            </div>
            {theme === 'dark' ?
                <div className={'sm:hidden ml-3'}>
                <Image src={MenuBarWhite} alt='menu bar' className={'w-7 h-7'} onClick={handlePanel}/>
                </div>
                :
                <div className={'sm:hidden ml-3'}>
                    <Image src={MenuBar} alt='menu bar' className={'w-7 h-7'} onClick={handlePanel}/>
                </div>
            }
        </div>
    </div>
  );
};

export default Page;