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
          Meet <br /> Our Mentors
        </h1>
        <div className="gap-5 grid  grid-rows-3 md:grid-rows-2 grid-cols-3 md:grid-cols-5">
          <div className=" flex text-center flex-col items-center">
            <Image
              src="/Mentors/MielWellens.jpeg"
              alt="MielWellens"
              width={150}
              height={150}
              className="rounded-full"
            />{' '}
            <div>
              <b> Miel Wellens</b>
              <p>
                {' '}
                <span className=" text-[#e6202d]">
                  Innovation Design Mentor
                </span>{' '}
                Former Director of Innovative
                <br /> Design @PHILIPS and ASD
              </p>
            </div>
          </div>
          <div className=" flex text-center flex-col items-center ">
            <div>
              <Image
                src="/Mentors/StevenWhite.png"
                alt="StevenWhite"
                width={150}
                height={150}
                className="rounded-full"
              />{' '}
            </div>
            <div className=" ">
              <b> Steven White</b>
              <p>
                {' '}
                <span className=" text-[#e6202d]">
                  Business Model Mentor
                </span>{' '}
                <br />
                Innovation and Entrepreneurship
                <br /> Professor @Tsinghua University
              </p>
            </div>
          </div>
          <div className=" flex text-center flex-col items-center ">
            <div>
              {' '}
              <Image
                src="/Mentors/JialinHuang.png"
                alt="Jialin Huang"
                width={150}
                height={150}
                className="rounded-full"
              />{' '}
            </div>
            <div className="">
              <b> Jialin Huang</b>
              <p>
                {' '}
                <span className=" text-[#e6202d]">
                  Business Model Mentor
                </span>{' '}
                <br />
                Founder @Lean Launch
              </p>
            </div>
          </div>
          <div className=" flex text-center flex-col items-center ">
            <div>
              {' '}
              <Image
                src="/Mentors/XinCao.png"
                alt="XinCao"
                width={150}
                height={150}
                className="rounded-full"
              />{' '}
            </div>
            <div>
              <b> Xin Cao</b>
              <p>
                {' '}
                <span className=" text-[#e6202d]">Marketing Mentor </span>{' '}
                <br />
                Strategy Director @FutureBrand China
              </p>
            </div>
          </div>
          <div className=" flex text-center flex-col items-center ">
            <Image
              src="/Mentors/SophiaXiang.png"
              alt="Sophia Xiang"
              width={150}
              height={150}
              className="rounded-full"
            />{' '}
            <div>
              <b> Sophia Xiang</b>
              <p>
                {' '}
                <span className=" text-[#e6202d]">
                  Design Thinking Mentor
                </span>{' '}
                <br />
                Innovation Director @SAP China Lab
              </p>
            </div>
          </div>
          <div className=" flex text-center flex-col items-center ">
            <Image
              src="/Mentors/ZhengmingZhang.png"
              alt="Zhengming Zhang"
              width={150}
              height={150}
              className="rounded-full"
            />{' '}
            <div>
              <b> Zhengming Zhang</b>
              <p>
                {' '}
                <span className=" text-[#e6202d]">
                  Roadshow and BP mentor
                </span>{' '}
                <br />
                Professional Innovation Coach
              </p>
            </div>
          </div>
          <div className=" flex text-center flex-col items-center ">
            <Image
              src="/Mentors/ChuanshunJiang.png"
              alt="Chuanshun Jiang"
              width={150}
              height={150}
              className="rounded-full"
            />{' '}
            <div>
              <b> Chuanshun Jiang</b>
              <p>
                {' '}
                <span className=" text-[#e6202d]">
                  Equity Structure Design Mentor
                </span>{' '}
                <br />
                Partner @ALLBRIGHT Law Firm
              </p>
            </div>
          </div>
          <div className=" flex text-center flex-col items-center ">
            <Image
              src="/Mentors/YongJiang.png"
              alt="Yong Jiang"
              width={150}
              height={150}
              className="rounded-full"
            />{' '}
            <div>
              <b> Yong Jiang</b>
              <p>
                {' '}
                <span className=" text-[#e6202d]">
                  Investment Diagnosis Mentor{' '}
                </span>{' '}
                <br />
                Deputy Secretary General @SAAI
              </p>
            </div>
          </div>
          <div className=" flex text-center flex-col items-center ">
            <Image
              src="/Mentors/Xuanzhou.png"
              alt="Xuan zhou"
              width={150}
              height={150}
              className="rounded-full"
            />{' '}
            <div>
              <b> Xuan zhou</b>
              <p>
                {' '}
                <span className=" text-[#e6202d]">
                  Investment Diagnosis Mentor
                </span>{' '}
                <br />
                Managing Director @JI Capital
              </p>
            </div>
          </div>
          <div className=" flex text-center flex-col items-center ">
            <Image
              src="/Mentors/HongchunLiu.png"
              alt="Hongchun Liu"
              width={150}
              height={150}
              className="rounded-full"
            />{' '}
            <div>
              <b>Hongchun Liu</b>
              <p>
                {' '}
                <span className=" text-[#e6202d]">
                  Investment Diagnosis Mentor
                </span>{' '}
                <br />
                Founding partner @WINREAL INVESTMENT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
