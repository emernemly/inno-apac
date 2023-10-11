import OverseasTalentImage from '@/app/componet/IntroImages/OverseasTalentImage';
import EntrepreneurshipServiceContent from '@/app/componet/serviceCompents/EntrepreneurshipServiceContent';
import SideBar from '@/app/componet/serviceCompents/SideBar';
import React from 'react';
export const metadata = {
  title: 'Entrepreneurship Service | INNO-APAC',
  description:
    'Empowering startups and innovators: From fundraising support to corporate innovation, we provide the tools to turn your ideas into thriving ventures',
};
const EntrepreneurshipService = () => {
  return (
    <main>
      <OverseasTalentImage />
      <section className=" container mx-auto grid gap-[50px]  grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-3">
        <div className=" grid col-span-1 md:h-[300px]">
          <SideBar />
        </div>
        <div className=" grid col-span-2">
          <EntrepreneurshipServiceContent />
        </div>
      </section>
    </main>
  );
};

export default EntrepreneurshipService;
