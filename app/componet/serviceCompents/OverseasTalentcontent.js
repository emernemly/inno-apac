import Image from 'next/image';
import React from 'react';
import { BiLogoLinkedin } from 'react-icons/bi';
const OverseasTalentcontent = () => {
  return (
    <div>
      <div className=" relative w-[100%] h-[400px]">
        <Image src="/techtourA.png" alt="Service" fill={true} />
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
        <div className=" bg-[#dadcdf] p-5  relative  h-[700px]">
          {' '}
          <Image src="/techtour.png" alt="Beijing" fill={true} />
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
          href="https://docs.google.com/forms/d/1jU03uUBUWxTMC2mo02V92Q-MlBZcNmHKMxf0KrB7128/viewform?edit_requested=true"
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
