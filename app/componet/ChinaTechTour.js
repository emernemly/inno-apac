import Image from 'next/image';
import React from 'react';
import { BiLogoLinkedin } from 'react-icons/bi';
const ChinaTechTour = () => {
  return (
    <div>
      <div className=" relative w-[100%] h-[400px]">
        <Image src="/ChinaTechTourA.png" alt="Service" fill={true} />
      </div>
      <div>
        <h1 className="font-[700] text-[45px] mb-[10px] mt-[50px]">
          China Tech Tour 2025
        </h1>

        <p>
          Significant investment and technological advancement have made China a
          global leader in innovation. The China Tech Tour allows skilled
          academics to explore this thriving environment, visit tech giants such
          as Alibaba, top institutes such as Tsinghua University and many
          exciting startups, gaining insights into key sectors like GreenTech,
          EV&apos; IoT&apos; AI&apos; Digital Health&apos; Smart Factories&apos;
          OEM, and E-commerce!
        </p>
        <br></br>
        <p>
          Following the success of our 2024 China Tech Tour for academics, in
          which 15 skilled scientists, technologists and engineers visited
          Chinese technological ecosystems, as well as sightseeing tours and
          cultural experiences across the week-long tour, we offer academics the
          opportunity to sign up once again for this free once-in-a-lifetime
          trip! Join us and witness the groundbreaking innovations that have
          propelled China to the forefront of the technology industry!
        </p>
        <br></br>
        <div className=" bg-[#dadcdf] p-5  relative  h-[700px]">
          {' '}
          <Image src="/TechtourB.png" alt="Beijing" fill={true} />
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
          href="Https://tinyurl.com/ChinaTT2025"
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

export default ChinaTechTour;
