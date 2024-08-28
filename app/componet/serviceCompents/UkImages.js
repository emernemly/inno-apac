'use client';
import React from 'react';

import Nav from '../Nav';
const UkImages = () => {
  return (
    <div
      className={`w-[100%] h-[450px] relative bg-[url('/serviceImage.webp')] bg-no-repeat bg-cover bg-center`}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10"></div>
      <Nav />
      <div className="flex-col z-20  absolute top-[50%]  font-[700] md:w-[100%] flex items-center justify-center text-center	">
        <h1 className=" text-white md:w-[50%] text-[48px]  w-[100%] md:text-[60px] ">
          {' '}
          Service Details
        </h1>
      </div>
    </div>
  );
};

export default UkImages;
