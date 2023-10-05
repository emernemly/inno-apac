import Image from 'next/image';
import React from 'react';
import { TbMoneybag } from 'react-icons/tb';
import { BsXDiamond } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
const ChooseUs = () => {
  return (
    <section className="bg-[#edeff2] relative">
      <div className=" absolute  bg-[url('/map.webp')] bg-no-repeat bg-right left-0 bottom-0 h-[100%] w-[100%]"></div>
      <div className="container z-10 relative mx-auto  grid gap-5   md:grid-rows-1 grid-cols-1 md:grid-cols-2">
        <div className="relative h-[500px] md:h-[100%] ">
          <Image src="/choose.webp" alt="Methodology" fill={true} />
        </div>
        <div>
          <h1 className="font-[700] text-[45px] mb-[50px]">
            Why <br />
            Choose Us
          </h1>
          <div className="flex flex-col gap-5">
            <div className=" flex flex-row gap-5 items-center  p-5 bg-white">
              <TbMoneybag className=" text-[#e6202d] text-[40px]" />
              <div>
                <h4 className="font-[600] text-[20px] mb-[10px]">
                  Benifical Invest
                </h4>
                <p>Lorem ipsum dolor sit amet consecte</p>
              </div>
            </div>
            <div className=" flex flex-row gap-5 items-center  p-5 bg-white">
              <BsXDiamond className=" text-[#e6202d] text-[40px]" />
              <div>
                <h4 className="font-[600] text-[20px] mb-[10px]">
                  Best Solution
                </h4>
                <p>Lorem ipsum dolor sit amet consecte</p>
              </div>
            </div>
            <div className=" flex flex-row gap-5 items-center  p-5 bg-white">
              <BiSupport className=" text-[#e6202d] text-[40px]" />
              <div>
                <h4 className="font-[600] text-[20px] mb-[10px]">
                  Quick Support
                </h4>
                <p>Lorem ipsum dolor sit amet consecte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
