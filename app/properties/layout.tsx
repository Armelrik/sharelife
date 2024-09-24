import React, { ReactNode } from 'react'
import Navbar from '../../components/shared/Navbar'
import Footer from '../home/Home/Footer/Footer';

function PropertiesLayout({children}: {children: ReactNode}) {
  return (
    
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default PropertiesLayout;