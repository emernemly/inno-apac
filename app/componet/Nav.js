'use client';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Navbar } from 'flowbite-react';

import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  const [show, setshow] = useState(false);
  return (
    <div className=" z-30  right-0 left-0  top-[50px]  mx-auto flex items-center 	 absolute ">
      {' '}
      <div className="container mx-auto ">
        <Navbar fluid rounded className="navfix rounded-[15px]">
          <Navbar.Brand href="/">
            <Image
              alt="inno-apac"
              width={120}
              height={120}
              src="/inno-logo.png"
            />
          </Navbar.Brand>
          <button className="hidden show" onClick={() => setshow(!show)}>
            <GiHamburgerMenu />
          </button>

          <Navbar.Collapse className={show ? 'block' : 'hidden'}>
            <Link
              active
              href="/"
              className="flex dropdawnButton items-center font-[600] text-[15px] hover:text-[#e6202d]"
            >
              <p>HOME</p>
            </Link>
            <Link
              href="/About"
              className="flex dropdawnButton items-center  font-[600] text-[15px] hover:text-[#e6202d]"
            >
              ABOUT_US
            </Link>
            <Link
              active
              href="/Services/OverseasTalent"
              className="flex dropdawnButton items-center font-[600] text-[15px] hover:text-[#e6202d]"
            >
              <p>SERVICES</p>
            </Link>
            <Link
              href="/Blog"
              className="flex items-center  font-[600] text-[15px] dropdawnButton hover:text-[#e6202d]"
            >
              BLOG
            </Link>
            <Link
              href="/Contact"
              className="flex items-center  font-[600] text-[15px] dropdawnButton hover:text-[#e6202d]"
            >
              CONTACT
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Nav;
