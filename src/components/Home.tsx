/** @format */

import Navbar from "../components/Navbar";
import Footbar from "./Footbar";
import { useEffect, useState } from "react";
import Tambahan from "./Tambahan";
import Promo1 from "./Promo1";
import Icon from "./Icon";
import WhatsAppIcon from "./WhatshappIcon";

function Home() {
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
    <>
      <div
        style={{ backgroundColor: scroll ? "white" : "black" }}
        className='fixed w-full bg-white opacity-80 z-10'
        data-aos='fade-down'
        data-aos-duration='2000'
        data-aos-delay='1'
        data-aos-easing='ease-in-sine'>
        <Navbar isScroll={scroll} />
      </div>
      <div
        className='flex justify-center items-center bg-cover bg-center p-10 h-screen   '
        style={{
          width: "100%",
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661869085660-3252fcd3e505?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}>
        <div className='flex lg:justify-start mt-[300px] ml-10  lg:h-full lg:items-start items-center flex-col w-full '>
          <div
            className='flex flex-wrap justify-center gap-5'
            data-aos='fade-right'
            data-aos-duration='2000'
            data-aos-delay='0'
            data-aos-easing='ease-in-sine'>
            <h1
              className='text-5xl font-bold text-white '
              style={{ textShadow: "2px 2px 4px #000000" }}>
              Wellcome To
            </h1>
            <h1
              className='text-5xl font-bold text-black'
              style={{ textShadow: "2px 2px 4px white" }}>
              Antar
            </h1>
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='3000'
            data-aos-delay='0'
            data-aos-easing='ease-in-sine'
            className='flex justify-center lg:items-start items-center flex-col'>
            <h1
              className='flex items-center lg:items-start md:items-center text-5xl font-bold text-black mt-0'
              style={{ textShadow: "2px 2px 4px white" }}>
              Jemput
            </h1>
            <p className='text-2xl flex items-start text-white  mt-2'>
              <span className='block transform '>We Provide Best Service</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className='about flex justify-center h-screen'>
          <Tambahan />
        </div>
        <div className='lg:flex mt-[700px] lg:w-full lg:mt-[550px] bg-white justify-center lg:flex-row absolute lg:top-[800px]  lg:items-center items-center w-full  h-64 '>
          <Icon />
        </div>
        <div
          id='about'
          className=' flex justify-center lg:h-screen lg:flex-row lg:mt-6 mt-32 flex-col  h-screen  '>
          <Promo1 />
        </div>
        <div className='flex relative justify-center items-center  '>
          <div className=' bottom-10 left-6 fixed '>
            <WhatsAppIcon />
          </div>
        </div>

        <div className=' flex justify-center lg:flex-row lg:mt-6 mt-32 flex-col  w-full '>
          <Footbar />
        </div>
      </div>
    </>
  );
}

export default Home;
