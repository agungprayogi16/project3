/** @format */

import Navbar from "./Navbar";
import Footbar from "./Footbar";
import antar1 from "../assets/image/antar51.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WhatsAppIcon from "./WhatshappIcon";

function Contact() {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();

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
  const handdleSubmit = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <div
          style={{ backgroundColor: scroll ? "white" : "transparent" }}
          data-aos='fade-down'
          data-aos-duration='1000'
          data-aos-delay='0'
          data-aos-easing='ease-in-sine'
          className=' fixed bg-white w-full  block'>
          <Navbar isScroll={scroll} />
        </div>
        <div className=' flex bg-gray-900 w-full  h-screen flex-col  py-64'>
          <div className='flex justify-center items-center w-full '>
            <div
              className=' flex  flex-col w-96'
              data-aos='fade-up'
              data-aos-duration='500'
              data-aos-delay='0'
              data-aos-easing='ease-in-sine'>
              <h1 className='text-6xl font-bold text-white'>Need Some </h1>
              <h1 className='flex text-6xl font-bold text-white justify-start'>
                help ?
              </h1>
            </div>
          </div>
          <div className='flex  items-end justify-between lg:flex-row  w-full '>
            <img
              src={antar1}
              className='lg:flex bg-cover mt-20 '
              alt=''
            />
            <img
              src={antar1}
              className='lg:flex hidden bg-cover'
              alt=''
            />
          </div>
        </div>
        <div
          className='flex lg:items-center w-full bg-cover bg-center  flex-row  justify-center overflow-y-hidden lg:p-16'
          style={{
            width: "100%",

            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1661869085660-3252fcd3e505?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}>
          <div className='flex flex-col lg:p-5 w-full lg:justify-center lg:items-centerh-1/2 lg:w-1/2'>
            <form className='flex flex-col gap-2 w-full p-7'>
              <div>
                <h1 className='text-3xl font-bold text-black'>Contact Us</h1>
                <h6 className='text-black  '>Send us a message</h6>
              </div>
              <div className='flex flex-col '>
                <label
                  htmlFor='name'
                  className='w-full'>
                  Name
                </label>
                <input
                  type='text'
                  className='h-10 rounded-lg p-3 '
                  placeholder='Name'
                />
              </div>
              <div className='flex flex-col '>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  placeholder='Email'
                  className='h-10 rounded-lg p-3 '
                />
              </div>
              <div className='flex flex-col '>
                <label>No Hp</label>
                <input
                  type='number'
                  className='h-10 rounded-lg p-3 '
                  placeholder='No Hp'
                />
              </div>
              <div className='flex flex-col '>
                <label htmlFor='message'>Message</label>
                <textarea
                  name='message'
                  placeholder='Message'
                  id=''
                  cols={30}
                  className='rounded-lg p-2 h-20 resize-none'
                  rows={10}></textarea>
              </div>
              <button
                className='bg-black text-white rounded-md p-2 hover:bg-slate-500'
                onClick={handdleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className='flex relative justify-center items-center  '>
          <div className=' bottom-10 left-6 fixed '>
            <WhatsAppIcon />
          </div>
        </div>
        <div>
          <Footbar />
        </div>
      </div>
    </>
  );
}

export default Contact;
