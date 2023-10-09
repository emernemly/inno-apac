'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-[#f7f8f9] p-5">
      <h4 className=" font-[600] text-[20px] mb-[20px]">Our Services</h4>
      <ul className=" ">
        <Link href="/Services/OverseasTalent">
          <li
            className={` my-5 border-b-[1px] p-3 border-b-[#dadcdf] hover:bg-white ${
              pathname === '/Services/OverseasTalent' && 'bg-white'
            }`}
          >
            Overseas Talent{' '}
          </li>
        </Link>
        <Link href="/Services/InvestmentPromotion">
          <li
            className={` my-5 border-b-[1px] p-3 border-b-[#dadcdf] hover:bg-white ${
              pathname === '/Services/InvestmentPromotion' && 'bg-white'
            }`}
          >
            Investment Promotion
          </li>
        </Link>
        <Link href="/Services/EntrepreneurshipService">
          {' '}
          <li
            className={` my-5 border-b-[1px] p-3 border-b-[#dadcdf] hover:bg-white ${
              pathname === '/Services/EntrepreneurshipService' && 'bg-white'
            }`}
          >
            Entrepreneurship Service
          </li>{' '}
        </Link>
        <Link href="/Services/IncubationOperation">
          <li
            className={` my-5 border-b-[1px] p-3 border-b-[#dadcdf] hover:bg-white ${
              pathname === '/Services/IncubationOperation' && 'bg-white'
            }`}
          >
            {' '}
            Incubation Operation
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
