import Image from 'next/image';
import React from 'react';
import { BiLogoLinkedin } from 'react-icons/bi';
const ChinaTch = () => {
  return (
    <div>
      <div className=" relative w-[100%] h-[400px]">
        <Image src="/techtourA.png" alt="Service" fill={true} />
      </div>
      <div>
        <h1 className="font-[700] text-[45px] mb-[10px] mt-[50px]">
          China Tech Tour 2025
        </h1>
        <p>
          Building on the success of our inaugural China Tech Tour, which
          allowed 15 accomplished scientists, technologists, and engineers to
          explore Chinese technological ecosystems, we are thrilled to announce
          the upcoming second edition. Participants not only engaged in research
          and business collaborations but also enjoyed cultural experiences and
          sightseeing throughout the week-long tour. For more details, check our
          media coverage here:
        </p>

        <br></br>
        <div className=" bg-[#dadcdf] p-5  relative  h-[700px]">
          {' '}
          <Image src="/poster.png" alt="Beijing" fill={true} />
        </div>
        <br></br>
        <div className=" mb-5">
          <h1 className="font-[700] text-[25px] mb-[10px]">
            Participants <br />
            will have the chance to:
          </h1>
          <ul>
            <li className=" my-3">
              {' '}
              {'>'} Visit prominent tech companies like Alibaba.
            </li>
            <li className=" my-3">
              {'>'} Explore esteemed institutions such as Tsinghua University.{' '}
            </li>
            <li className=" my-3">
              {'>'}Discover a variety of exciting startups.
            </li>
            <li className=" my-3">
              {'>'}Gain valuable insights into key sectors, including:
            </li>
          </ul>
        </div>
        <br></br>
        <p>
          Green Technology, Electric Vehicles, The Internet of Things (IoT ),
          Artificial Intelligence (AI) Digital Health,<br></br>
          <p>
            Smart Manufacturing, Original Equipment Manufacturing (OEM) etc.
          </p>
        </p>
        <br></br>
        <div className=" mb-5">
          <h1 className="font-[700] text-[25px] mb-[10px]">Join Us!</h1>
          <p>
            The second edition is about to commence! Don’t miss the chance to
            witness the groundbreaking innovations that have positioned China at
            the forefront of the technology industry.
          </p>
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
              {'>'} Scholars, researchers, and professors holding a PhD in
              science, technology, or engineering fields.
            </li>
            <li className=" my-3">
              {' '}
              {'>'} Candidates with at least two years of full-time work
              experience.
            </li>
          </ul>
        </div>
        <div className=" mb-5">
          <h1 className="font-[700] text-[25px] mb-[10px]">
            What <br />
            Will You Gain?
          </h1>
          <ul>
            <li className=" my-3">
              {' '}
              {'>'} A complimentary trip that includes international and
              domestic transportation, accommodation, meals, sightseeing, and
              educational visits.
            </li>
            <li className=" my-3">
              {'>'} Opportunities to advance your career and explore business
              prospects in China.
            </li>
            <li className=" my-3">
              {'>'} Access to knowledge and practical insights that can enhance
              your research and professional endeavors.
            </li>
          </ul>
        </div>
        <br></br>
        <a
          href="https://docs.google.com/forms/d/1nwTh6Q6STtNGcsLcjgE-ImftpBpEk1oX0qSz8zTs6bI/"
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

export default ChinaTch;
