import React, { Children, ReactNode } from 'react'
import Navbar from './components/Navbar'

function PropertiesLayout({children}: {children: ReactNode}) {
  return (
    
    <div>
      <Navbar />
      {children}
      
    </div>
  )
}

export default PropertiesLayout;