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
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis natus error sit voluptatem accusantium doloremque laud
            antium totam remaperiam.
          </p>
        </div>{' '}
        <div className=" bg-[#edeff2] flex flex-col  px-8 py-6 ">
          <div className=" flex ">
            {' '}
            <b className="text-[20px] text-[#e6202d]">02.</b>
            <h4 className="font-[600] text-[20px] mb-[20px]">Our Vision</h4>
          </div>{' '}
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis natus error sit voluptatem accusantium doloremque laud
            antium totam remaperiam.
          </p>
        </div>{' '}
      </div>
    </section>
  );
};

export default Mission;
