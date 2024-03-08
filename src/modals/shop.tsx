/** @format */

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, total }) => {
  return (
    <>
      {isOpen ? (
        <>
          <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
            <div className='relative w-auto max-w-3xl mx-auto my-6'>
              <div className='relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
                {/* Header */}
                <div className='flex items-start justify-between p-5 border-b border-solid rounded-t'>
                  <h3 className='text-3xl font-semibold'>Pembayaran</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={onClose}>
                    <span className='text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      ×
                    </span>
                  </button>
                </div>
                {/* Content */}
                <div className='relative p-6 flex-auto'>
                  <p>Total Pembayaran: ${total}</p>
                  {/* Konten tambahan */}
                </div>
                {/* Footer */}
                <div className='flex items-center justify-end p-6 border-t border-solid rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={onClose}>
                    Batal
                  </button>
                  <button
                    className='bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-hover *:'
                    type='button'
                    onClick={() => alert("Pembayaran berhasil")}>
                    Bayar
                  </button>
                </div>
              </div>
            </div>
            <div className='fixed inset-0 z-40 bg-black opacity-50'></div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
