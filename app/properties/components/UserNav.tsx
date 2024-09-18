import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { getKindeServerSession, LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { MenuIcon } from 'lucide-react'
import React from 'react'

export async function UserNav() {

  const {getUser} = getKindeServerSession ();
  const user = await getUser()


  return (
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
  )
}
