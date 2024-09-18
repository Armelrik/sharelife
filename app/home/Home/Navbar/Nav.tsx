
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { navLinks } from '@/constant/constant';
import { getKindeServerSession, LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Props = {
  openNav: () => void;
}

export async function Nav({openNav}: Props) {
  
    const [navBg, setNavBg] = useState(false);
    const {getUser} = getKindeServerSession ();
    const user = await getUser()

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
              <button type='button' onClick={openNav} className='sm:w-10 sm:h-10 w-6 h-6 bg-white rounded-md p-1 hover:bg-yellow-400 lg:hidden'>
                <Image src='./assets/icons/menu.svg' alt="Menu" width={38} height={38}/>
              </button>

               <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex shadow-lg items-center gap-x-3">
                        <MenuIcon className='w-6 h-6 lg:w-5 lg:h-5' />
                        <img src={user?.picture ?? '/assets/icons/logo-grey.svg'} alt='User image' className='rounded-full h-8 w-8 hidden lg:block' />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-[200px]'>
                    { user ? (
                    <>
                        <DropdownMenuItem>
                        <div className="w-full">
                            <p className="font-bold">{user.given_name}</p>
                            <p className="text-sm">{user.email}</p>
                        </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Mes Favoris</DropdownMenuItem>
                        <DropdownMenuItem>
                        <LogoutLink className='w-full'>Se deconnecter</LogoutLink>
                        </DropdownMenuItem>
                    </>
                    ) : (
                    <>
                        <DropdownMenuItem>
                        <RegisterLink className='w-full'>S'enregistrer</RegisterLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        <LoginLink className='w-full'>Se connecter</LoginLink>
                        </DropdownMenuItem>
                    </>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
              

            </div>
        </div>
    </div>
  )
}
