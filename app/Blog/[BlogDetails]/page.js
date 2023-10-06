'use client';
import Nav from '@/app/componet/Nav';
import Image from 'next/image';
import { usePathname, useParams } from 'next/navigation';
import React from 'react';

const BlogDetails = () => {
  const blog = [
    {
      img: '/Shanghai.webp',
      title: 'Shanghai Cross-Strait Youth Entrepreneurship Competition',
      description: `                INNO-APAC has successfully organised multiple sessions of the
                Shanghai Cross-Strait Youth Entrepreneurship Competition.
                INNO-APAC has recruited over 1,000 Startups for the competition,
                invited more than 30 mentors and guest judges from home and
                abroad, and incubated more than 10 Startups. This competition is
                held by Shanghai & Taipei city and has multiple competition
                areas in Shanghai, Taipei, Hong Kong/Shenzhen, etc.`,
      alt: 'Shanghai Cross-Strait Youth Entrepreneurship Competition',
      id: '1',
    },
    {
      img: '/TsinghuaGlobalAI.webp',
      title: ' Tsinghua Global AI & Robotics Competition',
      description: `  INNO-APAC has organised sessions of the Tsinghua Global AI and
                Robotic Innovation & Entrepreneurship Competition across China.
                With over 300 outstanding startups and more than 20 mentors &
                Judges were introduced to the competition. We provided
                innovation hackathons, roadshows, and matchmakings to the
                selected startups. INNO-APAC has also brought top MNCs such as
                AstraZenica, bp, SAP, etc. to evaluate potential collaborations
                with the startups. Finally, 3 of the startups successfully
                signed POC agreement with MNCs.`,
      alt: `the Tsinghua Global AI and
                Robotic Innovation & Entrepreneurship Competition across China`,
      id: '2',
    },
    {
      img: '/InternationalAcceleration.webp',
      title: '2018 APIA International Acceleration Bootcamp',
      description: `The 2018 APIA International Acceleration Bootcamp is organized by INNO-APAC core team and it was a extreme 0 to 1 acceleration bootcamp with all the process covered including design thinking, prototyping, customer insights and
validation, MVP and technic solution, marketing strategy and branding, IP protection, business model, financial planning, pitching, etc. During the program over 500 international participants with 40 innovation ideas incubated and more than 200 mentors & investors participated.`,
      alt: '2018 APIA International Acceleration Bootcamp',
      id: '3',
    },
  ];
  const pathname = useParams();
  console.log(blog.filter((blog) => blog.id === pathname.BlogDetails));
  return (
    <div>
      {pathname &&
        blog
          .filter((blog) => blog.id === pathname.BlogDetails)
          .map((blog) => (
            <div>
              <div
                className={`w-[100%] h-[450px] relative bg-[url('/serviceImage.webp')] bg-no-repeat bg-cover bg-center`}
              >
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10"></div>
                <Nav />
                <div className="flex-col z-20  absolute top-[50%]  font-[700] md:w-[100%] flex items-center justify-center text-center	">
                  <h1 className=" text-white md:w-[50%] text-[48px]  w-[100%] md:text-[60px] ">
                    {' '}
                    Blog Details
                  </h1>
                </div>
              </div>
              <section>
                <div className="container mx-auto  grid gap-5   md:grid-rows-1 grid-cols-1 md:grid-cols-2">
                  <div>
                    <h1 className="font-[700] text-[45px] mb-[50px]">
                      {blog.title}
                    </h1>
                    <p>{blog.description}</p>
                  </div>
                  <div className="relative h-[500px] ">
                    <Image src={blog.img} alt="Methodology" fill={true} />
                  </div>
                </div>
              </section>
            </div>
          ))}
    </div>
  );
};

export default BlogDetails;
