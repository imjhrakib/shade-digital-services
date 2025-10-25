import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <div className="bg-[#E3EEF8]">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
    </div>
  );
};

export default Header;
