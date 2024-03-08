/** @format */

import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsapp,
  FaLine,
} from "react-icons/fa";

function FootbarShop() {
  return (
    <div>
      <div className='w-full flex justify-between p-10 text-white bg-gray-900 h-full '>
        <div>
          <h1 className='text-xl'>Pembayaran</h1>
          <li className='grid grid-cols-2 mt-3 gap-7'>
            <img
              className='w-[100px] h-[40px] object-contain'
              src=' https://logos-download.com/wp-content/uploads/2017/03/BCA_logo_Bank_Central_Asia.png'
              alt=''
            />
            <img
              className='w-[100px] h-[40px] object-contain'
              src=' https://logos-download.com/wp-content/uploads/2018/09/Bank_Mandiri_Logo.png'
              alt=''
            />
            <img
              className='w-[100px] h-[40px] object-contain '
              src='https://logos-download.com/wp-content/uploads/2016/12/Bank_of_Singapore_logo_logotype.png'
              alt=''
            />
            <img
              className='w-[100px] h-[40px] object-contain'
              src='http://1.bp.blogspot.com/-2__NUo3YUm0/UlyQT9sROdI/AAAAAAAAC0k/krdW6O4UL-k/s1600/Logo-Bank-Indonesia.png'
              alt=''
            />
          </li>
        </div>
        <div className='w-[300px]  flex flex-col'>
          <h1 className='text-xl'>Layanan Pelanggan</h1>
          <ul className="flex  gap-5">
            <div className='flex  flex-row gap-10 mt-5 text-gray-500'>
              <div>
                <li className='hover:text-blue-400'>
                  <a href='/'> Home</a>
                </li>
                <li className='hover:text-blue-400'>
                  <a href='/about'> About</a>
                </li>
              </div>
              <div>
                <li className='hover:text-blue-400'>
                  <a href='/promo'> Promo</a>
                </li>
                <li className='hover:text-blue-400'>
                  <a href='/contact'> contact</a>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div className='flex flex-col'>
          <ul className='flex flex-col gap-3'>
            <h1 className='text-xl'>Social</h1>
            <div className='grid grid-cols-2 gap-5'>
              <li className='flex flex-row gap-3 hover:text-blue-400'>
                <FaFacebookSquare />
                <a href='https://www.facebook.com/'>Facebook</a>
              </li>
              <li className='flex flex-row gap-3 hover:text-blue-400'>
                <FaInstagramSquare />
                <a href='https://www.Instagram.com/'>Instagram</a>
              </li>
              <li className='flex flex-row gap-3 hover:text-blue-400'>
                <FaTwitterSquare />
                <a href='https://www.Twitter.com/'>Twitter</a>
              </li>
              <li className='flex flex-row gap-3 hover:text-blue-400'>
                <FaWhatsapp />
                <a href='https://www.facebook.com/ '>Whathapp</a>
              </li>
              <li className='flex flex-row gap-3 hover:text-blue-400 '>
                <FaLine />
                <a href='https://www.Line.com/'>Line</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FootbarShop;
