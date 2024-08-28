import Image from 'next/image';
import React from 'react';
import { BiLogoLinkedin } from 'react-icons/bi';
const OverseasTalentcontent = () => {
  return (
    <div>
      <div className=" relative w-[100%] h-[400px]">
        <Image src="/Uk.png" alt="Service" fill={true} />
      </div>
      <div>
        <h1 className="font-[700] text-[45px] mb-[10px] mt-[50px]">
          UK and European STEM Talent Programme:
        </h1>
        <p>
          Due to recent technological advancements and government investment
          into the tech industry, China has become an innovation leader
          worldwide. One of these investments is the Overseas Talent Programme
          which rewards skilled PhD holders in STEM with the opportunity to live
          and work in China with many benefits both financially and in career
          development.
        </p>

        <br></br>
        <p>
          In addition to joining an exciting new environment on the forefront of
          technological and scientific innovation you can experience vibrant
          Chinese culture, combining ancient architecture and practices with
          ultramodern cities and metropolises such as Shanghai, Beijing, Ningbo,
          Hangzhou and Suzhou where you can find many thriving technology
          companies and Technoparks where they continue to grow and innovate.
        </p>
        <br></br>
        <p>
          Those who are accepted will receive an award worth around 7 million
          RMB {'(770,000 GBP / 980,000 USD)'} to live and work in China and will
          be connected with top tech companies in China, leading to a permanent
          offer to work as a Chief Scientist, Research Director etc. with
          salaries exceeding 1 million RMB.
        </p>
        <br></br>
        <div className=" bg-[#dadcdf] p-5  relative  h-[400px]">
          {' '}
          <Image src="/Uka.png" alt="Beijing" fill={true} />
        </div>
        <br></br>
        <p>
          Top Left: Pudong Software Park, Shanghai. Top Right: Suzhou Kunshan
          Development Zone, Suzhou. Bottom Left: Hangzhou Fuyang Industry Zone,
          Hangzhou. Bottom Right: Ningbo High-Tech Zone, Ningbo
        </p>
        <div className=" mb-5">
          <h1 className="font-[700] text-[25px] mb-[10px]">
            What <br />
            You Will Receive?
          </h1>
          <ul>
            <li className=" my-3">
              {' '}
              {'>'} National talent award with living support courtesy of the
              Chinese Government
            </li>
            <li className=" my-3">
              {'>'} Permanent offer for roles including Chief Scientist,
              Research Director and more
            </li>
            <li className=" my-3">
              {'>'} Salary of at least 1 million RMB offered by Chinese
              companies
            </li>
          </ul>
        </div>
        <br></br>

        <br></br>

        <a
          href="https://tinyurl.com/UKEUTalent"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" font-[700] bg-[#e6202d] text-white w-[50%]  px-5 py-3">
            APPLY NOW
          </button>
        </a>
      </div>
    </div>
  );
};

export default OverseasTalentcontent;
