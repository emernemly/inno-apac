'use client';
import React, { useState } from 'react';

import Nav from '../Nav';
import Link from 'next/link';
const HomeImage = () => {
  return (
    <div className="w-[100%] h-[850px] relative bg-[url('/imageProfile.webp')] bg-no-repeat bg-cover bg-center">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10"></div>
      <Nav />
      <div className="flex-col z-20  absolute top-[30%]  font-[700] md:w-[100%] flex items-center justify-center text-center	">
        <h1 className=" text-white md:w-[50%] text-[48px]  w-[100%] md:text-[60px] mb-3">
          {' '}
          Expand Your Business With INNO-APAC
        </h1>
        <div className="flex gap-6 pt-7 md:flex-row flex-col">
          <Link href="/Services/OverseasTalent">
            {' '}
            <button className="font-[700] text-white bg-[#e6202d] tracking-wide text-[16px] py-[10px] px-[40px]">
              {' '}
              OUR SERVICE
            </button>
          </Link>
          <Link href="/Contact">
            {' '}
            <button className="font-[700] py-[10px] px-[40px] tracking-wide  border-white border-2 text-white bg-transparent text-[16px] ">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
