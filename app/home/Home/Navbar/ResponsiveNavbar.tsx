"use client"

import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'

const ResponsiveNavbar = () => {

  const [showNavbar, setShowNavbar]=useState(false)
  const openNavHandler = () => setShowNavbar(true)
  const closeNavHandler = () => setShowNavbar(false)

  return (
    <div>
        {/* <Nav openNav = {openNavHandler} /> */}
        <Navbar openNav = {openNavHandler} />
        <MobileNavbar showNav = {showNavbar} closeNav = {closeNavHandler} />
    </div>
  )
}

export default ResponsiveNavbar