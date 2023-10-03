import Image from 'next/image';
import React from 'react';
import { BsGlobe2 } from 'react-icons/bs';
import { BsFillBarChartFill, BsClipboardCheck } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';
const WhatWeDo = () => {
  return (
    <section>
      <div className="container  mx-auto flex flex-col ">
        {' '}
        <div className="grid gap-5   md:grid-rows-1 grid-cols-1 md:grid-cols-2">
          <div className=" mb-5 md:mb-0">
            <h1 className="font-[700] text-[45px] mb-[50px]">
              What <br />
              We Do?
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do ei
              usmod tempor incididunt.enim ad minim veniam, quis nostrud exer
              citation ullamco laboris nisi ut aliquip ex ea commodo con sequat
              duis aute irure dolor. excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              labo rum. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore.
            </p>
            <br></br>
            <p>
              Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
              fugit sed quia consequuntur.
            </p>
          </div>
          <div className="grid  gap-5 grid-cols-1 md:grid-cols-2">
            <div className="flex relative h-[200px] items-center justify-center ">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10"></div>
              <div className="absolute  gap-3 z-20 text-white text-center flex flex-col items-center text-[20px] ">
                <BsGlobe2 className="text-[55px]" />
                <b>Overseas Talent</b>
              </div>
              <Image
                src="/OverseasTalentImage.avif"
                fill={true}
                alt="Overseas Talent"
              />
            </div>
            <div className="flex relative h-[200px] items-center justify-center ">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10"></div>
              <div className="absolute  gap-3 z-20 text-white text-center flex flex-col items-center text-[20px] ">
                <BsFillBarChartFill className="text-[55px]" />
                <b>Investment Promotion</b>
              </div>
              <Image
                src="/InvestmentPromotionImage.webp"
                fill={true}
                alt="Overseas Talent"
              />
            </div>
            <div className="flex relative h-[200px] items-center justify-center ">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10"></div>
              <div className="absolute  gap-3 z-20 text-white text-center flex flex-col items-center text-[20px] ">
                <HiOutlineLightBulb className="text-[55px]" />
                <b>Entrepreneurship Service</b>
              </div>
              <Image
                src="/EntrepreneurshipServiceImage.webp"
                fill={true}
                alt="Overseas Talent"
              />
            </div>
            <div className="flex relative h-[200px] items-center justify-center ">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10"></div>
              <div className="absolute  gap-3 z-20 text-white text-center flex flex-col items-center text-[20px] ">
                <BsClipboardCheck className="text-[55px]" />
                <b>Incubation Operation</b>
              </div>
              <Image
                src="/IncubationOperationImage.webp"
                fill={true}
                alt="Overseas Talent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
