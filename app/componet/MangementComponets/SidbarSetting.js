'use client';
import { userLogout } from '@/app/Redux/userAction';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';
const SidbarSetting = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const handelLogout = () => {
    dispatch(userLogout(router));
  };
  return (
    <div className="bg-[#f7f8f9] p-5">
      <h4 className=" font-[600] text-[20px] mb-[20px]">Our Setting</h4>
      <ul className=" ">
        <Link href="/Mangement/Setting/SettingBLog">
          <li
            className={` my-5 border-b-[1px] p-3 border-b-[#dadcdf] hover:bg-white ${
              pathname === '/Mangement/Setting/SettingBLog' && 'bg-white'
            }`}
          >
            Blog Setting
          </li>
        </Link>
        <Link href="/Mangement/Setting/SettingContactUs">
          <li
            className={` my-5 border-b-[1px] p-3 border-b-[#dadcdf] hover:bg-white ${
              pathname === '/Mangement/Setting/SettingContactUs' && 'bg-white'
            }`}
          >
            Contact Us Setting
          </li>
        </Link>
        <Link href="/Mangement/Setting/SettingNewsLetter">
          {' '}
          <li
            className={` my-5 border-b-[1px] p-3 border-b-[#dadcdf] hover:bg-white ${
              pathname === '/Mangement/Setting/SettingNewsLetter' && 'bg-white'
            }`}
          >
            NewsLetter Setting
          </li>{' '}
        </Link>
        <li
          onClick={handelLogout}
          className={` cursor-pointer my-5 border-b-[1px] p-3 border-b-[#dadcdf] hover:bg-white ${
            pathname === '/Mangement/Setting/SettingContactUs' && 'bg-white'
          }`}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default SidbarSetting;
