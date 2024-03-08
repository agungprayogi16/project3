/** @format */

import NavbarShop from "./NavabarShop";
import Modal from "../modals/shop"; // Import komponen modal
import { useState, useEffect } from "react";
import WhatsAppIcon from "./WhatshappIcon";

interface ItemType {
  title: string;
  image: string;
  description: string;
  price: string;
  rating: number;
}

const DUMMY_CONTENT: ItemType[] = [
  {
    title: "Salmon",
    image:
      "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg",
    description: "Antar Jemput",
    price: "Rp 60.000",
    rating: 5.0,
  },
  {
    title: "Roti + kopi",
    image:
      "https://cdn.pixabay.com/photo/2015/07/12/14/26/coffee-842020_1280.jpg",
    description: "Antar Jemput",
    price: "Rp 10.000",
    rating: 4.5,
  },
  {
    title: "Variant juices",
    image:
      "https://cdn.pixabay.com/photo/2016/10/09/14/00/vegetable-juices-1725835_1280.jpg",
    description: "Antar Jemput",
    price: "Rp 10.000",
    rating: 3.5,
  },
  {
    title: "Swarlands",
    image:
      "https://cdn.pixabay.com/photo/2018/02/25/11/17/wine-3180220_1280.jpg",
    description: "Antar Jemput",
    price: "Rp 20.000",
    rating: 4.5,
  },
  {
    title: "Pizza Hut",
    image:
      "https://cdn.pixabay.com/photo/2016/03/05/09/22/eat-1237431_1280.jpg",
    description: "Antar Jemput",
    price: "Rp 22.000",
    rating: 4.5,
  },
  {
    title: "Americano",
    image:
      "https://cdn.pixabay.com/photo/2017/03/13/12/34/coffee-2139592_1280.jpg",
    description: "Antar Jemput",
    price: "Rp 10.000",
    rating: 4.5,
  },
  {
    title: "Kue Strowberry",
    image:
      "https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_1280.jpg",
    description: "Antar Jemput",
    price: "Rp 10.000",
    rating: 4.7,
  },
  {
    title: "Chocacola",
    image: "https://cdn.pixabay.com/photo/2013/03/01/18/48/can-87995_1280.jpg",
    description: "Antar Jemput",
    price: "Rp 10.000",
    rating: 5.0,
  },
  {
    title: "Variant Eskrim",
    image:
      "https://cdn.pixabay.com/photo/2018/08/16/23/06/ice-3611722_1280.jpg",
    description: "Antar Jemput",
    price: "Rp 10.000",
    rating: 4.1,
  },
  {
    title: "Pizza Lumer",
    image:
      "https://cdn.pixabay.com/photo/2018/03/15/07/04/pizza-3227292_1280.jpg",
    description: "Antar Jemput",
    price: "Rp 10.000",
    rating: 3.9,
  },
  {
    title: "Cappucino",
    image:
      "https://cdn.pixabay.com/photo/2017/06/30/13/48/coffee-2458300_1280.jpg",
    description: "Antar Jemput",
    price: "Rp 10.000",
    rating: 5.0,
  },
  {
    title: "mocca",
    image:
      "https://cdn.pixabay.com/photo/2017/06/30/13/48/coffee-2458300_1280.jpg",
    description: "Antar Jemput",
    price: "Rp 10.000",
    rating: 5.0,
  },
  {
    title: "Cappucino",
    image:
      "https://cdn.pixabay.com/photo/2017/06/30/13/48/coffee-2458300_1280.jpg",
    description: "Antar Jemput",
    price: "Rp 10.000",
    rating: 5.0,
  },
  {
    title: "Cappucino",
    image:
      "https://cdn.pixabay.com/photo/2017/06/30/13/48/coffee-2458300_1280.jpg",
    description: "Antar Jemput",
    price: "Rp 10.000",
    rating: 5.0,
  },
];

function Shop() {
  const [scroll, setScroll] = useState(false);
  const [filteredContent, setFilteredContent] = useState(DUMMY_CONTENT);
  const [searchQuery, setSearchQuery] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk mengontrol kapan modal ditampilkan
  const [total, setTotal] = useState<number>(0); // Total pembayaran

  // Logika untuk menampilkan modal saat item diklik

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
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
  useEffect(() => {
    // Filter DUMMY_CONTENT based on the search query
    const filteredData = DUMMY_CONTENT.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchQuery === "") {
      setNotFound(false);
      setFilteredContent(DUMMY_CONTENT);
    } else if (filteredData.length === 0) {
      setNotFound(true);
    } else if (filteredData.length > 0) {
      setNotFound(false);
    } else if (filteredData.length !== 0) {
      setFilteredContent(filteredData);
    }

    setFilteredContent(filteredData);
  }, [searchQuery]);

  return (
    <>
      <div>
        <div
          style={{ backgroundColor: scroll ? "white" : "black" }}
          className='fixed w-full bg-white opacity-80 z-10'
          data-aos='fade-down'
          data-aos-duration='2000'
          data-aos-delay='1'
          data-aos-easing='ease-in-sine'>
          <NavbarShop
            isScroll={scroll}
            onSearch={(query: string) => setSearchQuery(query)}
            searchQuery={searchQuery}
          />
        </div>
      </div>
      <div className='flex w-full justify-center items-center'>
        <div className='flex w-[1100px] flex-col items- justify-start'>
          <h1 className='text-4xl mt-[200px] font-bold text-black'>
            Makanan Pesan Antar
          </h1>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        {notFound ? (
          <div className='flex w-full justify-center h-[400px] items-center'>
            <h1 className='text-black flex justify-center  text-3xl items-center'>
              Not Found
            </h1>
          </div>
        ) : (
          ""
        )}
        <div className='grid grid-cols-4 flex-row mt-10 gap-16 items-center justify-center w-[1100px] '>
          {filteredContent.map((item, index) => {
            return (
              <div
                className='flex w-[300px] items-center flex-col cursor-pointer hover:scale-110 duration-300  h-72  border-2 border-white'
                data-aos='flip-right'
                data-aos-duration='700'
                data-aos-delay='0'
                data-aos-easing='ease-in-sine'
                key={index}
                onClick={() => {
                  setTotal(parseInt(item.price));
                  setIsModalOpen(true);
                }}>
                <img
                  className='w-56 h-[200px] object-cover rounded-lg'
                  src={item.image}
                  alt=''
                />
                <div className='flex w-full flex-col items-start justify-start'>
                  <div className='ml-10'>
                    <h1 className='text-2xl  flex items-start justify-start'>
                      {item.title}
                    </h1>
                    <p>{item.price} </p>
                    <p>{item.description}</p>
                    <p className='text-sm text-black'> {item.rating} ⭐ </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          total={total}
        />
        <div className='flex relative justify-center items-center '>
          <div className=' bottom-10 left-6 fixed '>
            <WhatsAppIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
