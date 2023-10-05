import Image from 'next/image';
import React from 'react';
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoTwitter,
} from 'react-icons/bi';
const OurTeam = () => {
  return (
    <section>
      <div className="  container mx-auto ">
        <h1 className="font-[700] text-[45px] mb-[50px]">
          Meet <br /> Our Experts
        </h1>
        <div className="gap-5 grid  grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3">
          <div className=" relative h-[330px]">
            <Image src="/choose.webp" alt="team" fill={true} />
            <div className=" bg-[#2f333b] p-2 text-[20px] flex flex-col gap-3 text-[#e6202d] absolute top-0 right-0 z-10">
              <BiLogoFacebook /> <BiLogoLinkedin /> <BiLogoTwitter />{' '}
            </div>
            <div className=" flex elementor-background-overlay flex-col items-center justify-end p-3">
              {' '}
              <h4 className="  z-20 text-white text-[30px]">YOSRI BEN SALAH</h4>
              <p className="text-[#e6202d]">CEO</p>
            </div>
          </div>
          <div className=" relative h-[330px]">
            <Image src="/choose.webp" alt="team" fill={true} />
            <div className=" bg-[#2f333b] p-2 text-[20px] flex flex-col gap-3 text-[#e6202d] absolute top-0 right-0 z-10">
              <BiLogoFacebook /> <BiLogoLinkedin /> <BiLogoTwitter />{' '}
            </div>
            <div className=" flex elementor-background-overlay flex-col items-center justify-end p-3">
              {' '}
              <h4 className="  z-20 text-white text-[30px]">YOSRI BEN SALAH</h4>
              <p className="text-[#e6202d]">CEO</p>
            </div>
          </div>
          <div className=" relative h-[330px]">
            <Image src="/choose.webp" alt="team" fill={true} />
            <div className=" bg-[#2f333b] p-2 text-[20px] flex flex-col gap-3 text-[#e6202d] absolute top-0 right-0 z-10">
              <BiLogoFacebook /> <BiLogoLinkedin /> <BiLogoTwitter />{' '}
            </div>
            <div className=" flex elementor-background-overlay flex-col items-center justify-end p-3">
              {' '}
              <h4 className="  z-20 text-white text-[30px]">YOSRI BEN SALAH</h4>
              <p className="text-[#e6202d]">CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
