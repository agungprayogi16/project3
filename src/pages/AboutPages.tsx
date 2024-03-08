/** @format */

import { useEffect } from "react";
import Navbar from "../components/Navbar";
// import Antar1 from "../assets/image/m12.png";
// import Antar2 from "../assets/image/m13.png";
// import Antar3 from "../assets/image/m14.png";
// import Antar4 from "../assets/image/m15.png";
import About from "../components/About";

import Footbar from "../components/Footbar";
import { useState } from "react";

function AboutPages() {
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
      <div>
        <div
          style={{ backgroundColor: scroll ? "white" : "transparent" }}
          data-aos='fade-down'
          data-aos-duration='2000'
          data-aos-delay='0'
          data-aos-easing='ease-in-sine'
          className='  w-full fixed  z-50 '>
          <Navbar isScroll={scroll} />
        </div>

        <div className=' lg:h-[590px] h-[1000px]    overflow-x-hidden'>
          <video
            className='absolute top-0 left-0 bg-cover lg:h-[700px] o h-screen lg:absolute w-full  object-cover '
            autoPlay
            loop
            muted
            playsInline>
            <source
              src='https://assets.grab.com/wp-content/uploads/media/videos/hero_banner_sg_q50.webm'
              type='video/mp4'
            />
          </video>
          {/* Content */}
          <div className='relative top-[200px] left-10 w-full  text-white'>
            <About />
          </div>
        </div>
        <div className='lg:flex mt-[400px] lg:w-full lg:mt-[270px] justify-center p-2 lg:flex-col gap-10 lg:p-10 px-10 absolute lg:top-[350px] lg:h-[150px]  lg:items-start items-center w-full bg-gray-600 h-32 '>
          <h1 className='lg:flex text-3xl lg:justify-start flex justify-center items-center lg:items-start  font-bold text-white'>
            About Us
          </h1>
          <h6 className='text-white'>
            Antar is Southeast Asia’s leading on-demand platform and a pioneer
            of the multi-service ecosystem model, providing access to a wide
            range of services including transportation, food delivery, logistics
            and more.
          </h6>
        </div>
        <div className='flex justify-center  items-center w-full mt-[300px] flex-col lg:mt-[200px] '>
          <div className='flex justify-center flex-row items-center w-full '>
            <h1 className='text-5xl font-bold text-black '>
              The Antar pillars of Antar
            </h1>
          </div>
          <div className='flex justify-center lg:flex-row flex-col items-center w-full gap-10 mt-20'>
            <div className='flex'></div>
            <div className='flex bg-red-300 lg:flex-col flex-col p-10 rounded-lg h-80 relative w-72 '>
              <img
                src={`project/3.png`}
                className='flex bg-cover h-30 top-[-70px] left-0 absolute'
                alt=''
              />
              <div className='flex flex-col justify-center mt-40'>
                <h1 className='text-3xl font-bold'>Innovation</h1>
                <h6>Solve Problem at scale</h6>
              </div>
            </div>
            <div className='flex bg-yellow-300 flex-col p-10 rounded-lg h-80 relative w-72 '>
              <img
                src={`project/0.png`}
                className='flex bg-cover h-30 top-[-70px] left-0 absolute'
                alt=''
              />
              <div className='flex flex-col justify-center mt-40'>
                <h1 className='text-3xl font-bold'>Innovation</h1>
                <h6>Solve Problem at scale</h6>
              </div>
            </div>
            <div className='flex bg-blue-300 flex-col p-10 rounded-lg h-80 relative w-72 '>
              <img
                src={`project/1.png`}
                className='flex bg-cover h-30 top-[-70px] left-0 absolute'
                alt=''
              />
              <div className='flex flex-col justify-center mt-40'>
                <h1 className='text-3xl font-bold'>Innovation</h1>
                <h6>Solve Problem at scale</h6>
              </div>
            </div>
            <div className='flex bg-green-300 flex-col p-10 rounded-lg h-80 relative w-72 '>
              <img
                src={`project/2.png`}
                className='flex bg-cover h-30 top-[-70px] left-0 absolute'
                alt=''
              />
              <div className='flex flex-col justify-center mt-40'>
                <h1 className='text-3xl font-bold'>Innovation</h1>
                <h6>Solve Problem at scale</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <Footbar />
        </div>
      </div>
    </>
  );
}

export default AboutPages;
