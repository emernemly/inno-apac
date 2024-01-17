import OverseasTalentImage from '@/app/componet/IntroImages/OverseasTalentImage';
import OverseasTalentcontent from '@/app/componet/serviceCompents/OverseasTalentcontent';
import ProgramTalentContant from '@/app/componet/serviceCompents/ProgramTalentContant';
import SideBar from '@/app/componet/serviceCompents/SideBar';
import React from 'react';
export const metadata = {
  title: 'Chief Scientist | INNO-APAC',
  description:
    'INNO-APAC: Your trusted partner for technology innovation solutions in China. We provide Investment Promotion, Entrepreneurship Services, Incubation Operations, and SEO expertise. Our mission is to empower growth, drive progress, and create a digital technology innovation ecosystem in the APAC region. Contact us today to unlock new possibilities and stay at the forefront of innovation.',
};
const TalentProgram = () => {
  return (
    <main>
      <OverseasTalentImage />
      <section className=" container mx-auto grid gap-[50px]  grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-3">
        <div className=" grid col-span-1 md:h-[300px]">
          <SideBar />
        </div>
        <div className=" grid col-span-2">
          <ProgramTalentContant />
        </div>
      </section>
    </main>
  );
};

export default TalentProgram;
