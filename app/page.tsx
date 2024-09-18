
import ScrollToTop from '@/app/home/Helper/ScrollToTop'
import Footer from '@/app/home/Home/Footer/Footer'
import Home from '@/app/home/Home/Home'
import ResponsiveNavbar from '@/app/home/Home/Navbar/ResponsiveNavbar'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <ResponsiveNavbar />
      <Home />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default HomePage