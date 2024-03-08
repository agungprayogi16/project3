/** @format */

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import Navbar from "./Navbar";

function Test() {
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 0,
    },
  };

  return (
    <>
      <div
        style={{ backgroundColor: scroll ? "white" : "black" }}
        data-aos='fade-down'
        data-aos-duration='500'
        data-aos-delay='0'
        data-aos-easing='ease-in-sine'
        className=' bg-white w-full fixed  '>
        <Navbar isScroll={scroll} />
      </div>
      <div
        style={{
          backgroundColor: "gray.400",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
        className='flex  flex-col gap-2 '>
        <div className='flex  ml-10 mt-20'>
          <div
            className='flex flex-col'
            data-aos='fade-right'
            data-aos-duration='500'
            data-aos-delay='0'
            data-aos-easing='ease-in-sine'>
            <h1 className='text-5xl font-bold text-black '>
              We Provide Best Service
            </h1>
            <h3 className='text-2xl font-light'>
              Explore our curated recommendations based on your various needs
            </h3>
          </div>
        </div>
        <div className='flex flex-col justify-center bg-gray-900 items-center w-full mt-2  '>
          <Carousel
            swipeable={true}
            draggable={true}
            autoPlaySpeed={1000}
            transitionDuration={500}
            responsive={responsive}
            keyBoardControl={true}
            infinite={true}
            showDots={false}
            dotListClass='custom-dot-list-style'
            containerClass='carousel-container'
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={true}
            className='lg:w-[80%] lg:h-[300px] lg:flex mt-4 lg:flex-row w-full lg:items-center lg:py-10  text-black'
            centerMode={true}>
            {[1, 2, 3, 4].map((item1, index) => {
              return (
                <div>
                  <div
                    key={item1}
                    className='bg-white relative lg:ml-[500px] lg:h-[500px] h-screen w-full  lg:flex-row lg:flex flex-col justify-center p-3 rounded-3xl hover:shadow-2xl opacity-85'>
                    <img
                      src={`image1/${index}.png`}
                      className='w-full lg:ml-14 h-full object-cover p-5'
                      alt=''
                    />

                    <div className='flex absolute top-0 right-0 flex-col items-center justify-center  '>
                      <h2 className='text-2xl mr-3 font-semibold '>
                        Best Service 🥇
                      </h2>
                      <div className='flex flex-row'>
                        <FaStar className='text-yellow-500' />
                        <FaStar className=' text-yellow-500' />
                        <FaStar className=' text-yellow-500' />
                        <FaStar className=' text-yellow-500' />
                        <FaStar className=' text-yellow-500' />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
       
        </div>
      </div>
    </>
  );
}

export default Test;
