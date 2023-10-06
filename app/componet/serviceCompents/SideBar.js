import Link from 'next/link';
import React from 'react';

const SideBar = () => {
  return (
    <div className="bg-[#f7f8f9] p-5">
      <h4 className=" font-[600] text-[20px] mb-[20px]">Our Services</h4>
      <ul className=" ">
        <Link href="/Services/OverseasTalent">
          <li className=" my-5 border-b-[1px] py-3 border-b-[#dadcdf] ">
            Overseas Talent{' '}
          </li>
        </Link>
        <Link href="/Services/InvestmentPromotion">
          <li className=" my-5 border-b-[1px] py-3 border-b-[#dadcdf] ">
            Investment Promotion
          </li>
        </Link>
        <Link href="/Services/EntrepreneurshipService">
          {' '}
          <li className=" my-5 border-b-[1px] py-3 border-b-[#dadcdf] ">
            Entrepreneurship Service
          </li>{' '}
        </Link>
        <Link href="/Services/IncubationOperation">
          <li className=" my-5 border-b-[1px] py-3 border-b-[#dadcdf] ">
            {' '}
            Incubation Operation
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
