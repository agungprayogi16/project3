/** @format */

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footbar() {
  return (
    <>
      <div className='flex flex-col h-0.5'>
        <div className='flex flex-row gap-5 justify-center'>
          <a href='http://Instagram.com'>
            <FaInstagram className='w-5 h-10' />
          </a>
          <a href='http://Linked.com'>
            <FaLinkedin className='w-5 h-10' />
          </a>
          <a href='http://Facebook.com'>
            <FaFacebook className='w-5 h-10' />
          </a>
        </div>
        <div className='flex justify-center'>
          <ul className='flex flex-row gap-5 text-black text-center text-lg '>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex justify-center'>
          <p className=' text-sm'>
            Copyright © 2019 - 2024 Antar. All Rights Reserved. Template by
            Agung
          </p>
        </div>
      </div>
    </>
  );
}

export default Footbar;
