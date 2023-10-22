'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import axios from 'axios';
import { Spinner } from 'flowbite-react';
const Footer = () => {
  const [loading, setloading] = useState(false);
  const [secc, setsecc] = useState(false);
  const [err, seterr] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setloading(true);
      const datas = await axios.post(
        'https://inno-apac.onrender.com/api/news-letter',
        data
      );
      setloading(false);
      setsecc(true);
      seterr(false);
    } catch (error) {
      console.log(error);
      seterr(error.response.data.message);
      setloading(false);
      setsecc(false);
    }
  };
  return (
    <section className=" bg-[#191d26] relative">
      <div className=" absolute  z-10 bg-[url('/map.webp')] bg-no-repeat bg-center left-0 bottom-0 h-[100%] w-[100%]"></div>
      <div className=" gap-5 container mx-auto grid grid-rows-4 md:grid-rows-1 grid-cols-1 md:grid-cols-4 z-20 relative">
        <div className=" text-white ">
          <Image
            src="/inno-apac.png"
            alt="inno-apac"
            width={100}
            height={100}
          />
          <p className=" my-5">
            Cultivating Innovation, Empowering Growth INNO-APAC is your
            strategic partner for technology innovation and investment
            solutions. Let us help you unlock new possibilities and drive
            progress. Contact us today to embark on your journey towards a
            brighter future
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
              {'>'}{' '}
              <Link className=" ml-2" href="/About">
                {' '}
                About Us
              </Link>
            </li>
            <li className="mb-[14px] hover:text-[#e6202d] cursor-pointer">
              {'>'}{' '}
              <Link className=" ml-2" href="/Contact">
                {' '}
                Contact Us
              </Link>
            </li>
            <li className="mb-[14px] hover:text-[#e6202d] cursor-pointer">
              {'>'}{' '}
              <Link className=" ml-2" href="/Services/OverseasTalent">
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div className=" flex md:justify-center flex-col text-white">
          <h2 className=" text-[20px] text-white mb-[35px] font-[600] mt-4">
            Get in touch
          </h2>
          <ul className="md:h-[198px]">
            <li className="mb-[16px] flex  ">
              <GoLocation className=" text-[#e6202d] text-[23px] mr-5 " />{' '}
              <p className="w-[70%] ">
                Qinzhou Road, Xuhui District, Shanghai, Shanghai 201506, CN
              </p>
            </li>
            <li className="mb-[16px] flex  ">
              <BiPhoneCall className=" text-[#e6202d] text-[23px] mr-5 " />
              <p className="w-[70%] ">+86-180 1713 2336 (Wechat)</p>
            </li>
            <li className="mb-[16px] flex   ">
              <AiOutlineMail className=" text-[#e6202d] text-[23px] mr-5" />{' '}
              <p className="w-[50px] ">zhangshuanghong@126.com</p>
            </li>
          </ul>
        </div>
        <div className=" bg-[#11141a] flex md:items-center md:justify-center flex-col text-white">
          <h2 className=" text-[20px] text-white mb-[35px] font-[600] mt-4">
            NewsLetter
          </h2>
          <form
            className="md:h-[198px] px-7 flex md:items-center md:justify-center flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p>Subscribe to our Newsletter!</p>
            {secc && (
              <Alert
                color="success"
                className=" w-[100%] mb-4"
                onDismiss={() => alert('Alert dismissed!')}
              >
                <span>Thank you for subscribing to our newsletter</span>
              </Alert>
            )}
            {err && (
              <Alert
                className=" w-[100%] mb-4"
                color="failure"
                icon={HiInformationCircle}
              >
                <span>{err}</span>
              </Alert>
            )}
            <input
              type="text"
              placeholder="Enter your Email"
              className=" my-4 bg-[#292c31] p-3 w-[100%] "
              {...register('email', { required: true })}
            />
            <button className=" font-[700] bg-[#e6202d] text-white px-5 py-3">
              {!loading ? 'SUBSCRIBE' : <Spinner />}
            </button>
          </form>
        </div>
      </div>
      <br></br>
      <hr className="border-1 border-[#7d7c7f]"></hr>
      <br></br>
      <div className=" container mx-auto flex justify-between">
        <p className=" text-white">
          Chuangtai Incubator Management {'('}Shanghai{')'} limited company.
          ICP备20008789号-2
        </p>{' '}
        <p className=" text-white">
          Copyright © 2023 inno-apac. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
