import { createCategoryPage } from '@/app/actions'
import SelectedCategories from '@/app/properties/components/SelectedCategories'
import { CreationSubmit } from '@/app/properties/components/SubmitButtons'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function StructureRoute({params}: {params: {id: string} }) {
  return (
    <>
        <div className='w-3/5 mx-auto' >
            <h2 className="text-3xl font-semibold tracking-tight transition-colors">
                Quelle est la meilleure description de votre maison?
            </h2>
        </div>

        <form action={createCategoryPage}>
            <input type="hidden" name="homeId" value={params.id} />
            <SelectedCategories />

            <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24">
                <div className="items-center flex justify-between mx-auto px-5 lg:px-10 h-full">
                    <Button variant='secondary' size='lg' asChild>
                        <Link href='/properties'>Annuler</Link>
                    </Button>
                    <CreationSubmit />
                    {/* <Button size='lg'>Enregistrer</Button> */}
                </div>
            </div>
        </form>

    </>
  )
}
