"use client"

import ScrollToTop from '@/app/home/Helper/ScrollToTop'
import Footer from '@/app/home/Home/Footer/Footer'
import Home from '@/app/home/Home/Home'
import ResponsiveNavbar from '@/app/home/Home/Navbar/ResponsiveNavbar'
// import Navbar from '@/components/shared/Navbar'
import NavBarShort from '@/components/shared/NavBarShort'
import React, { useState } from 'react'

const HomePage = () => {
  const openNavHandler = () => setShowNavbar(true)
  const [showNavbar, setShowNavbar]=useState(false)

  return (
    <div>
      <ResponsiveNavbar />
      <NavBarShort openNav = {openNavHandler} />
      {/* <Navbar /> */}
      <Home />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default HomePage