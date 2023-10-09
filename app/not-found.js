import React from 'react';
import Nav from './componet/Nav';
import Link from 'next/link';

const not = () => {
  return (
    <div>
      <div
        className={`w-[100%] h-[450px] relative bg-[url('/serviceImage.webp')] bg-no-repeat bg-cover bg-center`}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10"></div>
        <Nav />
        <div className="flex-col z-20  absolute top-[50%]  font-[700] md:w-[100%] flex items-center justify-center text-center	">
          <h1 className=" text-white md:w-[50%] text-[48px]  w-[100%] md:text-[60px] ">
            {' '}
            Not Found
          </h1>
        </div>
      </div>
      <div>
        <section className=" flex justify-center items-center">
          <div className=" container mx-auto flex justify-center items-center flex-col text-center">
            <h1 className="text-[100px] text-[#e6202d]">404</h1>
            <h4 className="my-5">
              <b> Oops!</b> The page you are looking for does not exist. It
              might have been moved or deleted.
            </h4>
            <Link href="/">
              <button className=" font-[700] bg-[#e6202d] text-white   px-5 py-3">
                GO TO HOME
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default not;
