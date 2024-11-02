"use client";

import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
// import Navbar from '@/components/shared/Navbar'

const ResponsiveNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  // const openNavHandler = () => setShowNavbar(true)
  const closeNavHandler = () => setShowNavbar(false);

  return (
    <div>
      {/* <Navbar openNav = {openNavHandler} /> */}
      {/* <Navbar /> */}
      <MobileNavbar showNav={showNavbar} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNavbar;
