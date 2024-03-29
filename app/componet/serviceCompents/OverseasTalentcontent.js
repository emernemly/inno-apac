import Image from 'next/image';
import React from 'react';
import { BiLogoLinkedin } from 'react-icons/bi';
const OverseasTalentcontent = () => {
  return (
    <div>
      <div className=" relative w-[100%] h-[400px]">
        <Image src="/team.jpeg" alt="Service" fill={true} />
      </div>
      <div>
        <h1 className="font-[700] text-[45px] mb-[10px] mt-[50px]">
          Overseas Talent
        </h1>
        <p>
          China&apos;s technological advancements have made it a global ledder
          in innovation. this exclusive trip offers talented individuals a
          chance to explore China{"'"}s thriving ecosystems, visit tech giants,
          universities and startups, and gain insights into key sectors like
          GreenTech, EV, IoT, AI, Digital Health. Smart Factories, OEM, ond
          E-commerce. Join us to witness groundbreaking innovations that have
          propelled China to the forefront of the global tech Industry
        </p>
        <br></br>
        <div className=" bg-[#dadcdf] p-5 rounded-lg">
          <div className="mb-[50px]">
            <h4 className="text-[#e6202d] font-[600] text-[20px] mb-[20px] ">
              First Stop
            </h4>
            <div className=" gap-5 grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 ">
              <div className=" relative w-[100%] h-[150px]">
                {' '}
                <Image
                  src="/Beijing.webp"
                  className="rounded-full"
                  alt="Beijing"
                  fill={true}
                />
              </div>
              <div className="flex items-center">
                City: Beijing <br />
                Itinerary: Day O to Day 2, <br />
                China&apos;s Silicon Valley <br />
                Tsinghua University, TikTok Great Wall..
              </div>
            </div>
          </div>
          <div className="mb-[50px]">
            <h4 className="text-[#e6202d] font-[600] text-[20px] mb-[20px] flex justify-end w-[100%]">
              Second Stop
            </h4>
            <div className=" gap-5 grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 ">
              <div className=" flex justify-end items-center">
                {' '}
                City: Hangzhou&Suzhou <br />
                Itinerary: Dav 3 to Day 5 <br /> Alibaba, Technoparks..
              </div>
              <div className=" relative w-[100%] h-[150px]">
                {' '}
                <Image
                  src="/Hangzhou_Suzhou.webp"
                  className="rounded-full"
                  alt="Beijing"
                  fill={true}
                />
              </div>
            </div>
          </div>
          <div className="mb-[50px]">
            <h4 className="text-[#e6202d] font-[600] text-[20px] mb-[20px] ">
              Third Stop
            </h4>
            <div className=" gap-5 grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 ">
              <div className=" relative w-[100%] h-[150px] rounded-full">
                {' '}
                <Image
                  src="/ShanghaiCity.webp"
                  alt="Beijing"
                  className="rounded-full"
                  fill={true}
                />
              </div>
              <div className="flex items-center">
                City: Shanghai <br />
                Itinerary: Day 6 to Day 7,
                <br />
                Industry Parks, Boat Trip
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className=" mb-5">
          <h1 className="font-[700] text-[25px] mb-[10px]">
            Who <br />
            Can Apply?
          </h1>
          <ul>
            <li className=" my-3">
              {' '}
              {'>'} Scholars, researchers and Professors holding PhD degree in{' '}
              science, technology or engineering field.
            </li>
            <li className=" my-3">{'>'} Top 500 companies&apos; Engineers </li>
            <li className=" my-3">
              {'>'} At least two years full time working experience.
            </li>
          </ul>
        </div>
        <br></br>

        <div>
          <h1 className="font-[700] text-[25px] mb-[10px]">Tour Guide</h1>
          <div className=" gap-5 grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1">
            <div className=" flex text-center flex-col items-center">
              <Image
                src="/Mentors/hunter.webp"
                alt="HUNTER ZHANG"
                width={150}
                height={150}
                className="rounded-full"
              />{' '}
              <div>
                <b> HUNTER ZHANG</b>
                <p>
                  {' '}
                  <span className=" text-[#e6202d]">
                    Founder & CEO @INNO-APAC
                  </span>{' '}
                  <br />
                  Tech Innovator & Investor
                </p>
                <a
                  href="https://www.linkedin.com/in/hunter-zhang-7a213b90/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  <div className=" p-3 text-white bg-[#2f333b] text-[14px] hover:bg-[#e6202d] cursor-pointer">
                    Linkedin
                  </div>
                </a>
              </div>
            </div>
            <div className=" flex text-center flex-col items-center">
              <Image
                src="/Mentors/Yosri.webp"
                alt="YOSRI BEN SALAH"
                width={150}
                height={150}
                className="rounded-full"
              />{' '}
              <div>
                <b> YOSRI BEN SALAH</b>
                <p>
                  {' '}
                  <span className=" text-[#e6202d]">
                    Director International{' '}
                  </span>{' '}
                  <br />
                  Relations @INNO-APAC
                </p>
                <a
                  href="https://www.linkedin.com/in/yosri-ben-salah-1993y/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  <div className=" p-3 text-white bg-[#2f333b] text-[14px] hover:bg-[#e6202d] cursor-pointer">
                    Linkedin
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className=" mb-5">
          <h1 className="font-[700] text-[25px] mb-[10px]">
            What <br />
            You Will Get?
          </h1>
          <ul>
            <li className=" my-3">
              {' '}
              {'>'} Free of charge trip including international and domestic
              transportation, hotels, foods, sightseeing, visits, learning, etc
            </li>
            <li className=" my-3">
              {'>'} Opportunity to develop your career & business in China
            </li>
            <li className=" my-3">
              {'>'} Acquire knowledge and practical insights
            </li>
          </ul>
        </div>
        <br></br>
        <a
          href="https://docs.google.com/forms/d/1nwTh6Q6STtNGcsLcjgE-ImftpBpEk1oX0qSz8zTs6bI/edit#responses"
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
