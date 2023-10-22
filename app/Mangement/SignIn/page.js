import SignInComponet from '@/app/componet/MangementComponets/SignInComponet';
import Nav from '@/app/componet/Nav';
import React from 'react';

const page = () => {
  return (
    <main>
      <div className="w-[100%] h-[450px] relative bg-[url('/team.jpeg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10"></div>
        <Nav />
        <div className="flex-col z-20  absolute top-[50%]  font-[700] md:w-[100%] flex items-center justify-center text-center	">
          <h1 className=" text-white md:w-[50%] text-[48px]  w-[100%] md:text-[60px] ">
            {' '}
            inno-apac Mangement
          </h1>
        </div>
      </div>
      <SignInComponet />
    </main>
  );
};

export default page;
