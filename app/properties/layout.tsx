import React, { ReactNode } from 'react'
import Navbar from '../../components/shared/Navbar'

function PropertiesLayout({children}: {children: ReactNode}) {
  return (
    
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default PropertiesLayout;