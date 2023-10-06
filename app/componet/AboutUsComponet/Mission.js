import React from 'react';

const Mission = () => {
  return (
    <section className="bg-[url(/mission.webp)] bg-no-repeat bg-fixed relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] "></div>
      <div className=" z-10 relative container mx-auto grid gap-5   md:grid-rows-1 grid-cols-1 md:grid-cols-2">
        {' '}
        <div className=" bg-[#edeff2] flex flex-col  px-8 py-6 ">
          <div className=" flex ">
            {' '}
            <b className="text-[20px] text-[#e6202d]">01.</b>
            <h4 className="font-[600] text-[20px] mb-[20px]">Our Mission</h4>
          </div>{' '}
          <p>
            Our mission is to bridge the gap between the Asia-Pacific region and
            global innovation resources, creating opportunities for
            collaboration, expansion, and advancement. We are dedicated to being
            the catalyst for positive change, innovation, and success in the
            industries we serve.
          </p>
        </div>{' '}
        <div className=" bg-[#edeff2] flex flex-col  px-8 py-6 ">
          <div className=" flex ">
            {' '}
            <b className="text-[20px] text-[#e6202d]">02.</b>
            <h4 className="font-[600] text-[20px] mb-[20px]">Our Vision</h4>
          </div>{' '}
          <p>
            We envision a world where businesses, entrepreneurs, and innovators
            have seamless access to cutting-edge resources, global networks, and
            transformative opportunities. Our goal is to serve as a bridge,
            linking technology innovation resources from the Asia-Pacific region
            and beyond.
          </p>
        </div>{' '}
      </div>
    </section>
  );
};

export default Mission;
