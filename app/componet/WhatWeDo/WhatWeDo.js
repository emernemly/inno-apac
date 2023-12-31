import Image from 'next/image';
import Link from 'next/link';
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
              INNO-APAC is committed to providing Government, Industry Parks and
              Corporate Enterprises with a complete set of technology innovation
              solution including innovation & incubation service (competition,
              bootcamp, workshop,intrapreneurship), international technology
              transformation, industry investment promotion, innovation center
              operation, etc.. INNO-APAC is based in Shanghai and linking
              technology innovation resources from Asia-Pacific region and
              globally.
            </p>
            <br></br>
            <p>
              INNO-APAC&apos;s vision is to create an international and digital
              technology innovation ecosystem in APAC Region.
            </p>
          </div>
          <div className="grid  gap-5 grid-cols-1 md:grid-cols-2 content-center	">
            <div className="flex relative h-[200px] items-center justify-center ">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10"></div>
              <div className="absolute  gap-3 z-20 text-white text-center flex flex-col items-center text-[20px] ">
                <BsGlobe2 className="text-[55px]" />
                <Link
                  href="/Services/OverseasTalent"
                  className=" hover:text-[#e6202d]"
                >
                  <b>Overseas Talent</b>
                </Link>
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
                <Link
                  href="/Services/InvestmentPromotion"
                  className=" hover:text-[#e6202d]"
                >
                  <b>Investment Promotion</b>{' '}
                </Link>
              </div>
              <Image
                src="/InvestmentPromotionImage.webp"
                fill={true}
                alt="Investment PromotionImage"
              />
            </div>
            <div className="flex relative h-[200px] items-center justify-center ">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10"></div>
              <div className="absolute  gap-3 z-20 text-white text-center flex flex-col items-center text-[20px] ">
                <HiOutlineLightBulb className="text-[55px]" />
                <Link
                  href="/Services/EntrepreneurshipService"
                  className=" hover:text-[#e6202d]"
                >
                  <b>Entrepreneurship Service</b>
                </Link>
              </div>
              <Image
                src="/EntrepreneurshipServiceImage.webp"
                fill={true}
                alt="Entrepreneurship Service"
              />
            </div>
            <div className="flex relative h-[200px] items-center justify-center ">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10"></div>
              <div className="absolute  gap-3 z-20 text-white text-center flex flex-col items-center text-[20px] ">
                <BsClipboardCheck className="text-[55px]" />
                <Link
                  href="/Services/IncubationOperation"
                  className=" hover:text-[#e6202d]"
                >
                  <b>Incubation Operation</b>{' '}
                </Link>
              </div>
              <Image
                src="/IncubationOperationImage.webp"
                fill={true}
                alt="Incubation Operation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
