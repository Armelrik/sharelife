"use client"

import { navLinks } from '@/constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { UserIcon } from 'lucide-react'

type Props = {
  openNav: () => void;
}

const NavBarShort = ({openNav}: Props) => {

  const [navBg, setNavBg] = useState(false);

  useEffect(()=>{
    const handler = ()=>{
      if(window.scrollY >= 90) setNavBg(true);
      if(window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return ()=>{
      window.removeEventListener("scroll", handler);
    }
  }, [])

  return (
    <div className={`fixed ${navBg ? 'bg-gray-800' : '' } h-[10vh] z-[100] w-full transition-all duration-200 shadow-lg`}>
        <div className="flex items-center justify-between h-full w-[95%] sm:w-[90%] xl:w-[80%] mx-auto" >
            {/* LOGO */}
            <Link href='/'>
              <div className="flex items-center space-x-2">
                <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-yellow-700 text-white font-bold flex items-center justify-center flex-col">
                  S&L
                </div>
                <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">
                  ShareLife
                </h1>
              </div>
            </Link>

            {/* NAVLINKS */}
            <div className="lg:flex items-center text-white gap-4 hidden">
              {navLinks.map((item) => {
                return (
                  <Link key={item.id} href={item.url}>
                    <p className='font-medium hover:text-yellow-400'>{item.label}</p>
                  </Link>
                )})
              }
            </div>

            {/* LOGIN AND MENU */}
            <div className="flex items-center space-x-4">

              <div className="flex items-center cursor-pointer rounded-full text-white space-x-2 hover:text-yellow-400 transition-all duration-200">
                <UserIcon />
                <p className="font-bold text-xs sm:text-base">Compte</p>
              </div>

              <button type='button' onClick={openNav} className='sm:w-10 sm:h-10 w-6 h-6 bg-white rounded-md p-1 hover:bg-yellow-400 lg:hidden'>
                <Image src='./assets/icons/menu.svg' alt="Menu" width={38} height={38}/>
              </button>

              {/* <UserNav /> */}
            </div>
        </div>
    </div>
  )
}

export default NavBarShort  