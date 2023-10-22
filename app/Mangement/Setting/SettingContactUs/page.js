import Hoc from '@/app/HOC/Hoc';
import BlogSettingImage from '@/app/componet/MangementComponets/BlogSettingImage';
import ContactSettingProfile from '@/app/componet/MangementComponets/ContactSettingProfile';
import SidbarSetting from '@/app/componet/MangementComponets/SidbarSetting';
import React from 'react';

const page = () => {
  return (
    <Hoc>
      <main>
        <BlogSettingImage />
        <section className=" container mx-auto grid gap-[50px]  grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-3">
          <div className=" grid col-span-1 md:h-[300px]">
            <SidbarSetting />
          </div>
          <div className=" grid col-span-2">
            <ContactSettingProfile />
          </div>
        </section>
      </main>
    </Hoc>
  );
};

export default page;
