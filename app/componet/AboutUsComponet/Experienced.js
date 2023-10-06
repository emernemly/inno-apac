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
              INNO-APAC is a leading provider of technology innovation
              solutions, serving Government, Industry Parks, and Corporate
              Enterprises. Our expertise lies in delivering a comprehensive set
              of services tailored to meet the diverse needs of our clients.
            </p>
            <br></br>
            <p>
              Located in the vibrant city of Shanghai, we are strategically
              positioned to connect technology innovation resources across the
              Asia-Pacific region and around the world.
            </p>
            <br></br>
            <button className=" font-[700] bg-[#e6202d] text-white md:w-[50%] px-5 py-3">
              <a href="/Contact">CONTACT US</a>
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
