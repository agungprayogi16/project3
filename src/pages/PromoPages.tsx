/** @format */

import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Why from "../components/Why";
import "react-multi-carousel/lib/styles.css";
import ImagePromo from "../components/ImagePromo";

function PromoPages() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div>
      <div
        style={{ backgroundColor: scroll ? "white" : "black" }}
        data-aos='fade-down'
        data-aos-duration='2000'
        data-aos-delay='0'
        data-aos-easing='ease-in-sine'
        data-aos-once
        className='  w-full fixed z-50 '>
        <Navbar isScroll={scroll} />
      </div>
      <div className='flex bg-gray-900 w-full  h-screen flex-col text-white'>
        <Why />
      </div>
      <div>
        <ImagePromo />
      </div>
    </div>
  );
}

export default PromoPages;
