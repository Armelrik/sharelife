
import { FacebookIcon, Instagram, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-gray-800'>
        <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">

          {/* First part */}
          <div className="">
            {/* LOGO */}
            <div className="flex items-center space-x-2">
              <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-yellow-700 text-white font-bold flex items-center justify-center flex-col">
                S&L
              </div>
              <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">
                ShareLife
              </h1>
            </div>
            <p className="text-gray-300 mt-6">
              Le meilleur du logement
            </p>
            <p className="font-semibold text-gray-300 mt-4">info@sharelife.fr</p>
            <p className="text-semibold text-gray-300 mt-2">+33 07 23 24 09</p>
          

            {/* Social links */}
            <div className="flex items-center space-x-4 mt-4">
              <FacebookIcon className='w-6 h-6 text-blue-600'/>
              <Twitter className='w-6 h-6 text-sky-500'/>
              <Youtube className='w-6 h-6 text-red-700'/>
              <Instagram className='w-6 h-6 text-pink-600'/>
            </div>
          </div>

          {/* Second part */}
          <div className="md:mx-auto">
            <h1 className="footer_heading">Recherches populaire</h1>
              <p className="footer_link">Apartements a louer</p>
              <p className="footer_link">Apartements a faible cout</p>
              <p className="footer_link">Bureaux a louer</p>
              <p className="footer_link">Espace pour Restaurant</p>
          </div>

          {/* Third part */}
          <div className="lg:mx-auto">
            <h1 className="footer_heading">Liens rapide</h1>
              <p className="footer_link">Mentions legales</p>
              <p className="footer_link">Confidentialite</p>
              <p className="footer_link">Plan de payement</p>
              <p className="footer_link">Nos services</p>
              <p className="footer_link">Support client</p>
              <p className="footer_link">Carierre</p>
          </div>

          {/* Fourth part */}
          <div className="md:mx-auto">
            <h1 className="footer_heading">Decouvrez</h1>
              <p className="footer_link">Paris</p>
              <p className="footer_link">Clamart</p>
              <p className="footer_link">Villeneuve</p>
              <p className="footer_link">Toulouse</p>
              <p className="footer_link">Cotonou</p>
          </div>
        </div>

        <p className="text-center mt-4 text-base text-white opacity-70">2024 ©Tout droit reserve. Design Par <Link href='armelrik.site'>Armelrik</Link></p>
    </div>
  )
}

export default Footer