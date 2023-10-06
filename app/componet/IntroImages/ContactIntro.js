import React from 'react';
import Nav from '../Nav';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const ContactIntro = () => {
  return (
    <div>
      <div
        className={`w-[100%] h-[450px] relative bg-[url('/serviceImage.webp')] bg-no-repeat bg-cover bg-center`}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10"></div>
        <Nav />
        <div className="flex-col z-20  absolute top-[50%]  font-[700] md:w-[100%] flex items-center justify-center text-center	">
          <h1 className=" text-white md:w-[50%] text-[48px]  w-[100%] md:text-[60px] ">
            {' '}
            Contact US{' '}
          </h1>
        </div>
      </div>
      <div className="grid grid-rows-3 md:grid-rows-1 grid-cols-1 grid-cols-3">
        <div className="flex justify-center items-center flex-col p-[40px] border-r-2 border-r-[#edeff2]">
          {' '}
          <CiLocationOn className=" text-[#e6202d] text-[30px] " />{' '}
          <p className=" h-5  mt-4">
            Qinzhou Road, Xuhui District, Shanghai, Shanghai 201506, CN
          </p>
        </div>
        <div className="flex justify-center items-center flex-col p-[40px] border-r-2 border-r-[#edeff2]">
          {' '}
          <AiOutlinePhone className=" text-[#e6202d] text-[30px]" />
          <p className=" h-5 mt-4"> +86-180 1713 2336 (Wechat)</p>
        </div>
        <div className="flex justify-center items-center flex-col p-[40px] border-r-2 border-r-[#edeff2]">
          {' '}
          <AiOutlineMail className=" text-[#e6202d] text-[30px] h-5" />{' '}
          <p className=" h-5  mt-4"> zhangshuanghong@126.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactIntro;
