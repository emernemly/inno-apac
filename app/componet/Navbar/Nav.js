'use client';
import React from 'react';

import { Navbar, Dropdown, Item } from 'flowbite-react';
const Nav = () => {
  return (
    <div className=" px-[30px] py-[10px] bg-[]">
      {' '}
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img
            alt="Flowbite React Logo"
            className="mr-3  sm:h-9 w-[150px] h-[150px]"
            src="./inno-logo.png"
          />
        </Navbar.Brand>

        <Navbar.Collapse>
          <a active href="/" className="flex items-center">
            <p>Home</p>
          </a>
          <a href="/About" className="flex items-center">
            About
          </a>
          <Navbar.Link href="#">
            <Dropdown
              dismissOnClick={false}
              label="Service"
              className="bg-transparent"
            >
              <Dropdown.Item href="/Overseas">Overseas Talent </Dropdown.Item>
              <Dropdown.Item href="/InvestmentPromotion">
                Investment Promotion
              </Dropdown.Item>
              <Dropdown.Item href="/EntrepreneurshipService">
                {' '}
                Entrepreneurship Service
              </Dropdown.Item>
              <Dropdown.Item href="/IncubationOperation">
                Incubation Operation
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <a href="/Blog" className="flex items-center">
            Blog
          </a>
          <a href="/Contact" className="flex items-center">
            Contact
          </a>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
