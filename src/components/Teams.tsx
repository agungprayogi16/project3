/** @format */

import Navbar from "../components/Navbar";
import React from "react";
import { useState, useEffect } from "react";
import Antar from "../assets/image/m1.jpg";
import Footbar from "./Footbar";
import WhatsAppIcon from "./WhatshappIcon";

const DUMMY_CONTENT = [
  {
    title: "Evolution of Bid Notifications to Courier",
    name: "Pushing the limits with Courier and improving reliability with great numbers....",
    image:
      "https://i.pinimg.com/564x/25/ba/60/25ba604d92d0dc8024a36d687c304863.jpg ",
  },
  {
    title: "Courier: Reimagining How We Send Push Notifications",
    name: "Everything you need to know about Pusher, our dedicated service for sending push notifications.",
    image:
      "https://i.pinimg.com/564x/17/29/00/172900d87a91a3187d902fdaa4dd99fc.jpg",
  },
  {
    title: "Appetizing Upgrades: Unveiling the New Features on GoFood Home",
    name: "Bigger, better, and tastier design updates from Sep 2023!",
    image:
      "https://i.pinimg.com/564x/22/14/4a/22144a2c536e9eb2c579cc134c7c3365.jpg",
  },
  {
    title: "Modularizing Our Driver App For Android: Benefits & way ahead ",
    name: "Here's Part-3 of this series, where we detail the benefits of modularizing the driver-app at Gojek....",
    image:
      "https://i.pinimg.com/736x/cf/a9/77/cfa977b63843978f04c798fbac42cdb9.jpg",
  },
  {
    title: "Modularizing Our Driver App For Android: Benefits & way ahead ",
    name: "Here's Part-3 of this series, where we detail the benefits of modularizing the driver-app at Gojek....",
    image:
      "https://i.pinimg.com/564x/ab/b0/10/abb0108dfb63580a227468ee8136efd8.jpg",
  },
  {
    title: "Scaling Our Geo-Search Service For 10x Load ",
    name: "An Interaction Designer's experience joining us during a global pandemic.",
    image:
      "https://i.pinimg.com/564x/bc/d1/9f/bcd19ff6eb08a858b6cfd76a41012d6e.jpg",
  },
  {
    title: "Scaling Our Geo-Search Service For 10x Load ",
    name: "This is the story of how we scaled Available Driver Service (ADS), to meet Gojek's ever-increasing demand.",
    image:
      "https://blog.gojek.io/content/images/size/w2000/2022/07/Blog-Banner_scaling-geosearch_080722_SB-2.jpg ",
  },
  {
    title: "The Case(s) Of Postgres Not Using Index",
    name: "Our learnings when we ventured into finding out multiple cases where Postgres was not using index.",
    image:
      "https://i.pinimg.com/564x/d9/6e/2e/d96e2ef2404e5b54b03496bc2c346009.jpg",
  },
  {
    title: "Better Secure Than Sorry | Tips To Secure An iOS App ",
    name: "Here are 24 tips and techniques to make an iOS application more secure and ensure it isn't prone to attacks.",
    image:
      "https://i.pinimg.com/564x/29/3a/cb/293acb63f7ed1f5d6f19a7c7cf4150f1.jpg",
  },
  {
    title:
      "Introducing Courier - The Information Superhighway Between Mobile & Server ",
    name: "Here's how we built Courier, a persisting connection through which we're able to push content from our server to the app..",
    image:
      "https://i.pinimg.com/564x/dc/7f/93/dc7f9310c8f3574600a87ef9baec78c2.jpg",
  },
];

function Teams() {
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
      <div className='flex w-full gap-9 flex-col '>
        <div
          style={{ backgroundColor: scroll ? "white" : "black" }}
          data-aos='fade-down'
          data-aos-duration='2000'
          data-aos-delay='0'
          data-aos-easing='ease-in-sine'
          className='  w-full fixed z-50 opacity-75  '>
          <Navbar isScroll={scroll} />
        </div>
        <div
          className=' flex mt-10 justify-center items-center'
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-delay='0'
          data-aos-easing='ease-in-sine'>
          <h1 className='flex mt-20 text-5xl  w-[1100px] flex-row font-bold text-black items-strat justify-strat '>
            All Blogs
          </h1>
        </div>
        <div className='w-full items-center justify-center'>
          <div className='flex-row justify-center items-center  w-full px-36 grid grid-cols-3 gap-10'>
            {DUMMY_CONTENT.map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-row '>
                  <div className='flex flex-row'>
                    <div
                      className='flex w-96 flex-col '
                      data-aos='flip-left'
                      data-aos-duration='1000'
                      data-aos-delay='500'
                      data-aos-easing='ease-in-sine'>
                      <img
                        className='w-full h-60 object-cover rounded-xl items-center'
                        src={item.image}
                        alt=''
                      />
                      <h1 className='flex text-2xl font-bold text-black  '>
                        {item.title}
                      </h1>
                      <h1 className='flex text-black '>{item.name}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex relative justify-center items-center '>
          <div className=' bottom-10 left-6 fixed '>
            <WhatsAppIcon />
          </div>
        </div>
        <div className='  -bottom-10'>
          <Footbar />
        </div>
      </div>
    </>
  );
}

export default Teams;
