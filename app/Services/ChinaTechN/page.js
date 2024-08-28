import OverseasTalentImage from '@/app/componet/IntroImages/OverseasTalentImage';
import OverseasTalentcontent from '@/app/componet/serviceCompents/OverseasTalentcontent';
import SideBar from '@/app/componet/serviceCompents/SideBar';
import React from 'react';

const ChinaTechN = () => {
  return (
    <main>
      <OverseasTalentImage />
      <section className=" container mx-auto grid gap-[50px]  grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-3">
        <div className=" grid col-span-1 md:h-[300px]">
          <SideBar />
        </div>
        <div className=" grid col-span-2">
          <OverseasTalentcontent />
        </div>
      </section>
    </main>
  );
};

export default ChinaTechN;
