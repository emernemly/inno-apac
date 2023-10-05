import Image from 'next/image';
import React from 'react';

const Experienced = () => {
  return (
    <section>
      <div className="container  mx-auto flex flex-col ">
        {' '}
        <div className="grid gap-5   md:grid-rows-1 grid-cols-1 md:grid-cols-2">
          <div className=" mb-5 md:mb-0">
            <h1 className="font-[700] text-[45px] mb-[50px]">
              Who <br />
              We Are?
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do ei
              usmod tempor incididunt.enim ad minim veniam, quis nostrud exer
              citation ullamco laboris nisi ut aliquip ex ea commodo con sequat
              duis aute irure dolor. excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              labo rum. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore.
            </p>
            <br></br>
            <button className=" font-[700] bg-[#e6202d] text-white md:w-[50%] px-5 py-3">
              CONTACT US
            </button>
          </div>
          <div className="grid  gap-5 grid-cols-1 md:grid-cols-2 relative h-[300px] md:h-[100%]">
            <Image src="/innoApacDo.png" alt="inno-apac team" fill={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experienced;
