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
            One of our key strengths in INNO-APAC is our ability to facilitate
            international technology transformation, ensuring that our clients
            stay at the forefront of global innovation trends. Furthermore, we
            actively promote industry investments to foster growth and
            development within the region.
          </p>
          <br />
          <p>
            INNO-APAC operates from its strategic base in Shanghai, where we
            serve as a hub for technology innovation resources from both the
            Asia-Pacific region and around the world. Our vision is to build an
            international and digital technology innovation ecosystem within the
            APAC Region, and we are dedicated to making this vision a reality.
          </p>
          <br />
          <a href="/Contact">
            <button className=" font-[700] bg-[#e6202d] text-white md:w-[50%] px-5 py-3">
              CONTACT US
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
