import { createMyHome } from '@/app/actions';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { getKindeServerSession, LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export async function UserNav() {

  const {getUser} = getKindeServerSession ();
  const user = await getUser()

  const createHomeWithId = createMyHome.bind(null, {
    userId: user?.id as string
  })

  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex shadow-lg items-center gap-x-3">
                <MenuIcon className='w-6 h-6 lg:w-5 lg:h-5' />
                <Image src={user?.picture ?? '/assets/icons/logo-grey.svg'} alt='User image' className='rounded-full h-8 w-8 hidden lg:block' />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-[200px]'>
            { user ? (
              <>
                <DropdownMenuItem>
                  <div className="w-full">
                    <p className="font-bold line-clamp-1">{user.given_name}</p>
                    <p className="text-sm line-clamp-1">{user.email}</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <form className='w-full' action={createHomeWithId}>
                    <button type='submit' className='w-full text-start'>
                      Ajouter votre maison
                    </button>
                  </form>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href='/properties' className='w-full'>Propriétés</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href='/my-homes' className='w-full'>Mes Propriétés</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href='/favorites' className='w-full'>Mes Favoris</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href='/reservations' className='w-full'>Mes réservations</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogoutLink className='w-full font-semibold'>Se déconnecter</LogoutLink>
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem>
                  <RegisterLink className='w-full'>Créer un compte</RegisterLink>
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
