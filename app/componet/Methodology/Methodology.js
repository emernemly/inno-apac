import Image from 'next/image';
import React from 'react';

const Methodology = () => {
  return (
    <section>
      <div className="container mx-auto  grid gap-5   md:grid-rows-1 grid-cols-1 md:grid-cols-2">
        <div className="relative h-[500px] ">
          <Image src="/Methodology.png" alt="Methodology" fill={true} />
        </div>
        <div>
          <h1 className="font-[700] text-[45px] mb-[50px]">
            Our <br />
            Methodology
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do ei
            usmod tempor incididunt.enim ad minim veniam, quis nostrud exer
            citation ullamco laboris nisi ut aliquip ex ea commodo con sequat
            duis aute irure dolor. excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est labo
            rum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore.
          </p>
          <br />
          <button className=" font-[700] bg-[#e6202d] text-white md:w-[50%] px-5 py-3">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
