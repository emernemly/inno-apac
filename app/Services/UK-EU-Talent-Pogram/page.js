import SideBar from '@/app/componet/serviceCompents/SideBar';
import Uk from '@/app/componet/serviceCompents/Uk';
import UkImages from '@/app/componet/serviceCompents/UkImages';
import React from 'react';

const UKEUTalentPogram = () => {
  return (
    <main>
      <UkImages />
      <section className=" container mx-auto grid gap-[50px]  grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-3">
        <div className=" grid col-span-1 md:h-[300px]">
          <SideBar />
        </div>
        <div className=" grid col-span-2">
          <Uk />
        </div>
      </section>
    </main>
  );
};

export default UKEUTalentPogram;
