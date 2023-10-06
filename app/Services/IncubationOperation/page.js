import OverseasTalentImage from '@/app/componet/IntroImages/OverseasTalentImage';
import IncubationOperationContent from '@/app/componet/serviceCompents/IncubationOperationContent';
import SideBar from '@/app/componet/serviceCompents/SideBar';
import React from 'react';
const IncubationOperation = () => {
  return (
    <main>
      <OverseasTalentImage />
      <section className=" container mx-auto grid gap-[50px]  grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-3">
        <div className=" grid col-span-1 md:h-[300px]">
          <SideBar />
        </div>
        <div className=" grid col-span-2">
          <IncubationOperationContent />
        </div>
      </section>
    </main>
  );
};

export default IncubationOperation;
