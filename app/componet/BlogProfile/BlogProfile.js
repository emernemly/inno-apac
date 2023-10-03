import Image from 'next/image';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
const BlogProfile = () => {
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
    },
    {
      img: '/InternationalAcceleration.webp',
      title: '2018 APIA International Acceleration Bootcamp',
      description: `The 2018 APIA International Acceleration Bootcamp is organized by INNO-APAC core team and it was a extreme 0 to 1 acceleration bootcamp with all the process covered including design thinking, prototyping, customer insights and
validation, MVP and technic solution, marketing strategy and branding, IP protection, business model, financial planning, pitching, etc. During the program over 500 international participants with 40 innovation ideas incubated and more than 200 mentors & investors participated.`,
      alt: '2018 APIA International Acceleration Bootcamp',
    },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="font-[700] text-[45px] mb-[50px]">Blog</h1>
        <div className=" gap-7 grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3">
          {' '}
          {blog.map((blog) => (
            <div className=" border-2 ease-in duration-300  hover:shadow-xl hover:translate-y-1	 ">
              <div className=" h-[230px] relative">
                <Image src={blog.img} alt={blog.alt} fill={true} />{' '}
                <div className=" absolute z-10 top-[200px] right-8 bg-[#e6202d] p-4 text-white text-[24px] cursor-pointer ">
                  {' '}
                  <a>
                    <FaLongArrowAltRight />
                  </a>
                </div>
              </div>
              <div className=" p-5 blog">
                <h4 className="font-[600] text-[20px] my-3">
                  <a className=" cursor-pointer">{blog.title} </a>
                </h4>
                <p>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogProfile;
