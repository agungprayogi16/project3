/** @format */

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { CiSearch } from "react-icons/ci";

type NavbarProps = {
  isScroll: boolean;
  onSearch: (query: string) => void;
  searchQuery: string;
};

function Navbar({ isScroll, onSearch, searchQuery }: NavbarProps) {
  const [active, setActive] = useState(false);
  const [IsHumburger, setHamburger] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeContact, setActiveContact] = useState(false);
  const [activePromo, setActivePromo] = useState(false);
  const [activeTeam, setActiveTeam] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActive(true);
    } else if (location.pathname === "/about") {
      setActiveAbout(true);
    } else if (location.pathname === "/contact") {
      setActiveContact(true);
    } else if (location.pathname === "/promo") {
      setActivePromo(true);
    } else if (location.pathname === "/teams") {
      setActiveTeam(true);
    }
  }, [location]);
  const handleSearch = () => {
    onSearch(searchQuery);
  };

  console.log(searchQuery);

  return (
    <div className='  opacity-100 flex justify-between items-center px-10 py-3'>
      <div className='flex  ml-16 font-bold rounded-full p-2 flex-row '>
        <Link to={"/"}>
          <h1
            className={`${
              isScroll ? "text-green-400" : "text-green-500"
            } lg:flex md:flex hidden flex-row font-bold gap-5 text-3xl cursor-pointer `}>
            Antar
          </h1>
          <h1
            className={`${
              isScroll ? "text-green-900" : "text-green-900"
            } lg:flex md:flex hidden flex-row font-bold gap-5 text-3xl cursor-pointer `}>
            Jemput
          </h1>
        </Link>
      </div>
      <div>
        <ul
          className={`${
            isScroll ? "text-black" : "text-white"
          } lg:flex md:flex hidden flex-row gap-5  text-lg  font-normal `}>
          <li>
            <Link
              to='/'
              className={`hover:text-blue-500 font-bold ${
                active ? "text-blue-500" : ""
              }`}>
              {" "}
              Home
            </Link>
          </li>

          <li>
            <Link
              to='/about'
              className={`hover:text-blue-500 font-bold ${
                activeAbout ? "text-blue-500" : ""
              }`}>
              About Us
            </Link>
          </li>

          <li>
            <Link
              to='/contact'
              className={`hover:text-blue-500 font-bold ${
                activeContact ? "text-blue-500" : ""
              }`}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to='/promo'
              className={`hover:text-blue-500 font-bold ${
                activePromo ? "text-blue-500" : ""
              }`}>
              {" "}
              Promo
            </Link>
          </li>
          <li className='relative'>
            <div className='flex items-center '>
              <input
                className='flex bg-gray-200 items-center text-gray-700 border-gray-300 px-10 placeholder-gray-500 placeholder:ml-10 rounded-2xl'
                type='text'
                placeholder='Search'
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
              />

              <CiSearch className=' text-3xl absolute text-gray-500' />
            </div>
          </li>
        </ul>
      </div>
      <div className='hidden lg:flex md:flex gap-2'>
        <img
          className='w-10 h-10 rounded-full bg-transparent font-bold'
          src='https://static.vecteezy.com/system/resources/previews/000/423/286/original/avatar-icon-vector-illustration.jpg'
          alt=''
        />
        <button className=' font-bold bg-green-600 text-white p-2  px-3 rounded-xl items-center  hover:bg-green-900'>
          <Link to='/register'>Sign Up</Link>
        </button>
      </div>
      <div className='lg:hidden md:hidden six flex'>
        {IsHumburger ? (
          <ImCross
            className='size-6 text-blue-500'
            onClick={() => setHamburger(false)}
          />
        ) : (
          <GiHamburgerMenu
            className='size-10 cursor-pointer text-blue-500'
            onClick={() => setHamburger(true)}
          />
        )}
        {IsHumburger && (
          <div className='lg:hidden md:hidden fixed top-16 w-full right-0 flex h-96 flex-col gap-0 bg-gray-700 -z-50 '>
            <ul
              className={
                "  text-white  flex flex-col  items-center justify-center text-lg  font-normal "
              }>
              <li className='hover:bg-slate-900 p-5 bg-slate-800 w-full justify-center items-center flex'>
                <Link
                  to='/'
                  className={`hover:text-blue-500 font-bold   ${
                    active ? "text-blue-500" : ""
                  }`}>
                  {" "}
                  Home
                </Link>
              </li>

              <li className=' p-5 bg-slate-400 w-full justify-center items-center flex z-50'>
                <Link
                  to='/about'
                  className={`hover:text-blue-500 font-bold ${
                    activeAbout ? "text-blue-500" : ""
                  }`}>
                  About
                </Link>
              </li>

              <li className=' p-5 bg-slate-800 w-full justify-center items-center flex'>
                <Link
                  to='/contact'
                  className={`hover:text-blue-500 font-bold ${
                    activeContact ? "text-blue-500" : ""
                  }`}>
                  Contact
                </Link>
              </li>
              <li className=' p-5 bg-slate-400 w-full justify-center items-center flex'>
                <Link
                  to='/promo'
                  className={`hover:text-blue-500 font-bold ${
                    activePromo ? "text-blue-500" : ""
                  }`}>
                  {" "}
                  Promo
                </Link>
              </li>
              <li className=' p-5 bg-slate-800 w-full justify-center items-center flex'>
                <Link
                  to='/teams'
                  className={`hover:text-blue-500 font-bold ${
                    activeTeam ? "text-blue-500" : ""
                  }`}>
                  {" "}
                  Teams
                </Link>
              </li>
            </ul>
            <div className='flex justify-center'>
              <button className=' font-bold bg-green-600 w-full text-white p-2 px-3  items-center  hover:bg-green-300'>
                <Link to='/login'>Log in</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
