'use client';
import React, { useState } from 'react';
import { BsGraphUpArrow, BsCheckCircle } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { TfiCup } from 'react-icons/tfi';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const RequestCallBack = () => {
  const [count, setCount] = useState(false);

  return (
    <section className="bg-[url(/backraoundRequaset.webp)] bg-cover bg-no-repeat bg-fixed relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] "></div>
      <div className=" z-10 relative container mx-auto grid gap-5   md:grid-rows-1 grid-cols-1 md:grid-cols-2">
        {' '}
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}
        >
          <div className=" grid md:grid-rows-2 grid-cols-2 ">
            <div className="flex items-center justify-center text-center flex-col md: border-[#8d8d8d] border-r-[1px]">
              <BsGraphUpArrow className=" text-[#e6202d] text-[55px]" />
              <b className=" text-white my-1 font-[500] text-[45px]">
                {count && (
                  <CountUp start={0} end={315} duration={1} delay={0} />
                )}
              </b>
              <p className="text-[#ffffffb3]">Business Growth</p>
            </div>
            <div className="flex items-center justify-center text-center flex-col md: border-[#8d8d8d] border-b-[1px]">
              <BsCheckCircle className=" text-[#e6202d] text-[55px]" />
              <b className=" text-white my-1 font-[500] text-[45px]">
                {count && (
                  <CountUp start={0} end={1250} duration={1} delay={0} />
                )}
              </b>
              <p className="text-[#ffffffb3]">Successful Projects</p>
            </div>
            <div className="flex  items-center justify-center text-center flex-col md: border-[#8d8d8d] border-t-[1px]">
              <FiUsers className=" text-[#e6202d] text-[55px]" />
              <b className=" text-white my-1 font-[500] text-[45px]">
                {count && (
                  <CountUp start={0} end={2050} duration={1} delay={0} />
                )}
              </b>
              <p className="text-[#ffffffb3]">Satisfied Customer</p>
            </div>
            <div className="flex items-center justify-center text-center flex-col md: border-[#8d8d8d] border-l-[1px] p-7 ">
              <TfiCup className=" text-[#e6202d] text-[55px]" />
              <b className=" text-white my-1 font-[500] text-[45px]">
                {count && <CountUp start={0} end={75} duration={1} delay={0} />}
              </b>
              <p className="text-[#ffffffb3]">Awards Wining</p>
            </div>
          </div>{' '}
        </ScrollTrigger>
        <div className=" bg-[#edeff2] flex flex-col py-[75px] px-[30px] ">
          <h1 className="font-[700] text-[45px] mb-[50px]">
            Request <br />A Call Back
          </h1>
          <div className="grid gap-4 md:gap-1 grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 mb-4">
            <input type="text" placeholder="Name" className=" border-0 p-4" />
            <input type="text" placeholder="Email" className=" border-0 p-4" />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="mb-4 border-0 p-4"
          />
          <textarea
            type="text"
            placeholder="Your Message"
            className="mb-4 border-0 p-4 focus:border-[1px] border-[#e6202d]"
          />
          <button className=" font-[700] bg-[#e6202d] text-white md:w-[50%] px-5 py-3">
            SUMBIT ENQUIRY
          </button>
        </div>
      </div>
    </section>
  );
};

export default RequestCallBack;
