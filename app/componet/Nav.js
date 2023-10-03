import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Navbar, Dropdown, Item } from 'flowbite-react';

import Image from 'next/image';

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
            <a
              active
              href="/"
              className="flex dropdawnButton items-center font-[600] text-[15px] hover:text-[#e6202d]"
            >
              <p>HOME</p>
            </a>
            <a
              href="/About"
              className="flex dropdawnButton items-center  font-[600] text-[15px] hover:text-[#e6202d]"
            >
              ABOUT
            </a>
            <Navbar.Link href="#" className="dropdawnButton">
              <Dropdown
                dismissOnClick={false}
                label="SERVICE"
                className="  font-[600] dropdawnButton"
              >
                <Dropdown.Item
                  href="/Overseas"
                  className="hover:text-[#e6202d]"
                >
                  Overseas Talent{' '}
                </Dropdown.Item>
                <Dropdown.Item
                  href="/InvestmentPromotion"
                  className="hover:text-[#e6202d]"
                >
                  Investment Promotion
                </Dropdown.Item>
                <Dropdown.Item
                  href="/EntrepreneurshipService"
                  className="hover:text-[#e6202d]"
                >
                  {' '}
                  Entrepreneurship Service
                </Dropdown.Item>
                <Dropdown.Item
                  href="/IncubationOperation"
                  className="hover:text-[#e6202d]"
                >
                  Incubation Operation
                </Dropdown.Item>
              </Dropdown>
            </Navbar.Link>
            <a
              href="/Blog"
              className="flex items-center  font-[600] text-[15px] dropdawnButton hover:text-[#e6202d]"
            >
              BLOG
            </a>
            <a
              href="/Contact"
              className="flex items-center  font-[600] text-[15px] dropdawnButton hover:text-[#e6202d]"
            >
              CONTACT
            </a>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Nav;
