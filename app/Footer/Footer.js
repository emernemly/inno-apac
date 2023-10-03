import Image from 'next/image';
import React from 'react';
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from 'react-icons/bi';
import { ImLocation } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
  return (
    <section className=" bg-[#191d26] relative">
      <div className=" absolute  z-10 bg-[url('/map.webp')] bg-no-repeat bg-center left-0 bottom-0 h-[100%] w-[100%]"></div>
      <div className=" gap-5 container mx-auto grid grid-rows-4 md:grid-rows-1 grid-cols-1 md:grid-cols-4 z-20 relative">
        <div className=" text-white ">
          <Image
            src="/inno-apac.png"
            alt="inno-apac"
            width={150}
            height={150}
          />
          <p className=" my-5">
            Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor
            incidi dunt labore dolore magna aliqua enim ad minim veniam.
          </p>
          <div className="flex gap-3 ">
            <div className=" p-3 text-white bg-[#2f333b] rounded-full text-[14px] hover:bg-[#e6202d] cursor-pointer">
              <a>
                <BiLogoFacebook />
              </a>
            </div>
            <div className=" p-3 text-white bg-[#2f333b] rounded-full text-[14px] hover:bg-[#e6202d] cursor-pointer">
              <a>
                <BiLogoInstagramAlt />
              </a>
            </div>
            <div className=" p-3 text-white bg-[#2f333b] rounded-full text-[14px] hover:bg-[#e6202d] cursor-pointer">
              <a>
                <BiLogoLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className=" flex md:items-center justify-center flex-col text-white">
          <h2 className=" text-[20px] text-white mb-[35px] font-[600] mt-4">
            Useful Links
          </h2>
          <ul className="md:h-[198px]">
            <li className="mb-[14px] hover:text-[#e6202d] cursor-pointer">
              {'>'} <a className=" ml-2"> About Us</a>
            </li>
            <li className="mb-[14px] hover:text-[#e6202d] cursor-pointer">
              {'>'} <a className=" ml-2"> Contact Us</a>
            </li>
            <li className="mb-[14px] hover:text-[#e6202d] cursor-pointer">
              {'>'} <a className=" ml-2">Services</a>
            </li>
            <li className="mb-[14px] hover:text-[#e6202d] cursor-pointer">
              {'>'}
              <a className=" ml-2">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className=" flex md:items-center md:justify-center flex-col text-white">
          <h2 className=" text-[20px] text-white mb-[35px] font-[600] mt-4">
            Get in touch
          </h2>
          <ul className="md:h-[198px]">
            <li className="mb-[16px] flex md:items-center md:justify-center ">
              <ImLocation className=" text-[#e6202d] text-[70px] mr-5" />{' '}
              <p>Qinzhou Road, Xuhui District, Shanghai, Shanghai 201506, CN</p>
            </li>
            <li className="mb-[16px] flex md:items-center md:justify-center ">
              <BsTelephoneFill className=" text-[#e6202d] text-[40px] mr-5" />
              <p>+86-180 1713 2336 (Wechat)</p>
            </li>
            <li className="mb-[16px] flex md:items-center md:justify-center ">
              <MdEmail className=" text-[#e6202d] text-[40px] mr-5" />{' '}
              <p>zhangshuanghong@126.com</p>
            </li>
          </ul>
        </div>
        <div className=" bg-[#11141a] flex md:items-center md:justify-center flex-col text-white">
          <h2 className=" text-[20px] text-white mb-[35px] font-[600] mt-4">
            NewsLetter
          </h2>
          <div className="md:h-[198px] px-7 flex md:items-center md:justify-center flex-col">
            <p>Subscribe to our Newsletter!</p>
            <input
              type="text"
              placeholder="Enter your Email"
              className=" my-4 bg-[#292c31] p-3"
            />
            <button className=" font-[700] bg-[#e6202d] text-white px-5 py-3">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
