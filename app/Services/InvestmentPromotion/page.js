import OverseasTalentImage from '@/app/componet/IntroImages/OverseasTalentImage';
import InvestmentPromotioncontent from '@/app/componet/serviceCompents/InvestmentPromotioncontent';
import SideBar from '@/app/componet/serviceCompents/SideBar';
import React from 'react';
export const metadata = {
  title: 'Investment Promotion | INNO-APAC',
  description:
    'INNO-APAC Investment Promotion service: Secure funding and strategic partnerships for growth. Unlock beneficial investments with our expert support.',
};
const InvestmentPromotion = () => {
  return (
    <main>
      <OverseasTalentImage />
      <section className=" container mx-auto grid gap-[50px]  grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-3">
        <div className=" grid col-span-1 md:h-[300px]">
          <SideBar />
        </div>
        <div className=" grid col-span-2">
          <InvestmentPromotioncontent />
        </div>
      </section>
    </main>
  );
};
export default InvestmentPromotion;
