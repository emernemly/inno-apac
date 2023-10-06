import Link from 'next/link';
import React from 'react';

const SideBar = () => {
  return (
    <div className="bg-[#f7f8f9] p-5">
      <h4 className=" font-[600] text-[20px] mb-[20px]">Our Services</h4>
      <ul className=" ">
        <li className=" my-5 border-b-[1px] py-3 border-b-[#dadcdf] ">
          <Link href="/Services/OverseasTalent">Overseas Talent</Link>{' '}
        </li>
        <li className=" my-5 border-b-[1px] py-3 border-b-[#dadcdf] ">
          <a href="/Services/InvestmentPromotion">Investment Promotion</a>
        </li>
        <li className=" my-5 border-b-[1px] py-3 border-b-[#dadcdf] ">
          <a href="/Services/EntrepreneurshipService">
            Entrepreneurship Service
          </a>
        </li>
        <li className=" my-5 border-b-[1px] py-3 border-b-[#dadcdf] ">
          {' '}
          <a href="/Services/IncubationOperation">Incubation Operation</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
