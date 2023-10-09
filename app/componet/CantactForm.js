import React from 'react';

const CantactForm = () => {
  return (
    <section className="bg-[#edeff2] flex items-center justify-center flex-col">
      {' '}
      <div className="container  mx-auto flex flex-col ">
        <h1 className="font-[700] text-[45px] mb-[50px]">Contact Form</h1>
      </div>
      <div className=" flex flex-col py-[75px] px-[30px] items-center justify-centers container md:px-11 ">
        <div className="grid gap-4 md:gap-1 grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 mb-4 w-[100%]">
          <input
            type="text"
            placeholder="Name"
            className=" border-0 p-4 w-[100%]"
          />
          <input
            type="text"
            placeholder="Email"
            className=" border-0 p-4 w-[100%]"
          />
        </div>
        <div className="grid gap-4 md:gap-1 grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 mb-4 w-[100%]">
          <input
            type="text"
            placeholder="Phone"
            className=" border-0 p-4 w-[100%]"
          />
          <input
            type="text"
            placeholder="Subject"
            className=" border-0 p-4 w-[100%]"
          />
        </div>
        <button className=" font-[700] bg-[#e6202d] text-white md:w-[50%]  px-5 py-3">
          SUBMIT NOW
        </button>
      </div>
    </section>
  );
};

export default CantactForm;
