/** @format */

import React, { useState } from "react";

const HookShop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(20);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handlePayment = () => {
    // Lakukan logika pembayaran di sini
    alert("Pembayaran berhasil");
    // Contoh: Menetapkan total ke 0 setelah pembayaran berhasil
    setTotal(0);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleOpenModal}>
        Bayar
      </button>
      {/* Menampilkan modal jika isOpen bernilai true */}
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
          <div className='relative w-auto max-w-3xl mx-auto my-6'>
            <div className='relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
              {/* Konten modal */}
              <div className='relative p-6 flex-auto'>
                <p>Total Pembayaran: ${total}</p>
                {/* Konten tambahan */}
              </div>
              {/* Footer modal */}
              <div className='flex items-center justify-end p-6 border-t border-solid rounded-b'>
                <button
                  className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  type='button'
                  onClick={handleCloseModal}>
                  Batal
                </button>
                <button
                  className='bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  type='button'
                  onClick={handlePayment}>
                  Bayar
                </button>
              </div>
            </div>
          </div>
          <div className='fixed inset-0 z-40 bg-black opacity-50'></div>
        </div>
      )}
    </div>
  );
};

export default HookShop;
