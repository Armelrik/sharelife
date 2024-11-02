"use client";

import ScrollToTop from "@/app/home/Helper/ScrollToTop";
import Footer from "@/app/home/Home/Footer/Footer";
import Home from "@/app/home/Home/Home";
import NavBarShort from "@/components/shared/NavBarShort";
import React, { useState } from "react";
import MobileNavbar from "./home/Home/Navbar/MobileNavbar";

const HomePage = () => {
  const openNavHandler = () => setShowNavbar(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const closeNavHandler = () => setShowNavbar(false);

  return (
    <div>
      {/* <ResponsiveNavbar /> */}
      <NavBarShort openNav={openNavHandler} />
      <MobileNavbar showNav={showNavbar} closeNav={closeNavHandler} />
      {/* <Navbar /> */}
      <Home />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
