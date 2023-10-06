import React from 'react';

const ContactProfile = () => {
  return (
    <section className="bg-[url(/homeContactImage.webp)] relative bg-no-repeat bg-fixed bg-center">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] "></div>
      <div className="container mx-auto flex flex-col items-center justify-center text-center z-10 relative">
        <h1 className="font-[700] text-[45px]  text-white">
          Make Your Business Powerful
        </h1>
        <h3 className="text-[#ffffffb3] text-[16px] mb-[30px] mt-[25px]">
          Join your hand with us for a better life and beautiful future
        </h3>
        <button className=" font-[700] bg-[#e6202d] text-white  px-5 py-3">
          <a href="/Contact">CONTACT US</a>
        </button>
      </div>
    </section>
  );
};

export default ContactProfile;
