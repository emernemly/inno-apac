import Image from 'next/image';
import React from 'react';

const ProgramTalentContant = () => {
  return (
    <div>
      {' '}
      <div className=" relative w-[100%] h-[300px]">
        <Image src="/talent.webp" alt="Service" fill={true} />
      </div>
      <div>
        <h1 className="font-[700] text-[45px] mb-[10px] mt-[50px]">
          China Oversea Talent Program
        </h1>
        <h3 className="font-[700] text-[25px] mb-[20px]">Basic Requirement:</h3>{' '}
        <ol>
          <li className=" my-5">
            {'>'} Applicants should generally have obtained a PhD degree (from
            China or Oversea) in science, technology or engineering field
            (mechanical, materials, automation, electrical, medical, energy, IT,
            microsystem, semiconductor etc.).
          </li>
          <li className=" my-5">
            {'>'} The applicant must currently full time work in the top 200
            universities according to the QS world ranking or Top 500 companies
            according to Forbs ranking and currently serving in the position of
            Associate Professor and above in an overseas university or serving
            in the position for Non-Chinese top 500 companies as young research
            scientist/engineer (if under 35 years old) or as management position
            above 35.
          </li>
          <li className=" my-5">
            {'>'} The applicant must have at least three years consecutive
            Post-PhD work experience outside China.
          </li>
          <li className=" my-5">
            {'>'} Applicant is not yet full time in China or full-time in China
            after January 1, 2023.
          </li>
          <li className=" my-5">
            {'>'} Applicant normally should be under the age of 60.
          </li>
        </ol>
        <h3 className="font-[700] text-[25px] mb-[20px]">
          Submitted materials and documents:
        </h3>{' '}
        <ol>
          <li className=" my-5">{'>'} Application form & CV;</li>
          <li className=" my-5">{'>'} Photo copy of passport;</li>
          <li className=" my-5">
            {'>'} Photo copy of the PhD degree certificate;
          </li>
          <li className=" my-5">
            {'>'} Proof of work experience (job offer, contract, work letter,
            etc.);
          </li>
          <li className=" my-5">
            {'>'} Proof of scientific research achievements (including papers,
            patents,innovations rights, honor recognition, etc.);
          </li>
          <li className=" my-5">{'>'} research projects involved if have.</li>
        </ol>
        <h3 className="font-[700] text-[25px] mb-[20px]">
          What will the talent get:{' '}
        </h3>{' '}
        <ol>
          <li className=" my-5">
            {'>'} National talent title award with 3-5 million RMB living
            support by Chinese government;
          </li>
          <li className=" my-5">
            {'>'} At least 1 million RMB annual salary offered by Chinese
            companies.
          </li>
          <li className=" my-5">
            {'>'} Permanent offer from Chinese company with chief scientist,
            research director, etc.
          </li>
        </ol>
      </div>
      <br></br>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSf1HBXItXjrqokluN07bBc_fLycg331IZeeonyGGUyVqnIR2A/viewform"
        target="_blank"
        rel="noreferrer"
      >
        <button className=" font-[700] bg-[#e6202d] text-white w-[50%]  px-5 py-3">
          APPLY NOW
        </button>
      </a>
    </div>
  );
};

export default ProgramTalentContant;
