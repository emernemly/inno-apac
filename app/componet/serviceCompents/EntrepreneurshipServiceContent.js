import Image from 'next/image';
import React from 'react';

const EntrepreneurshipServiceContent = () => {
  return (
    <div>
      {' '}
      <div className=" relative w-[100%] h-[300px]">
        <Image src="/newEnter.webp" alt="Service" fill={true} />
      </div>
      <div>
        <h1 className="font-[700] text-[45px] mb-[10px] mt-[50px]">
          Entrepreneurship Service
        </h1>
        <p>
          At INNO-APAC, we are committed to fueling entrepreneurship and
          innovation. Our Entrepreneurship Service is designed to empower your
          vision and help you turn your ideas into thriving businesses. Let us
          be your partner on this exciting journey, providing the guidance and
          resources you need to succeed.
        </p>
        <br></br>
        <p>
          Our Entrepreneurship Service at INNO-APAC is your gateway to realizing
          your entrepreneurial dreams. We provide a comprehensive suite of
          services designed to nurture your innovation and business ambitions.
          Here&apos;s an overview of our offerings:
        </p>
        <br></br>
        <div>
          <div className=" flex ">
            {' '}
            <b className="text-[20px] text-[#e6202d]">01.</b>
            <h4 className="font-[600] text-[20px] mb-[20px]">
              FA Fundraising/ POC / Talent Fund{' '}
            </h4>
          </div>{' '}
          <p>
            We understand that securing funding is a crucial step for startups
            and entrepreneurs. With our FA Fundraising service, we help you
            navigate the complexities of fundraising, including Proof of Concept
            {'('}POC{')'} development and connecting you with the right talent
            pool. Our goal is to make your journey from idea to investment as
            smooth as possible.
          </p>
        </div>
        <br></br>
        <div>
          <div className=" flex ">
            {' '}
            <b className="text-[20px] text-[#e6202d]">02.</b>
            <h4 className="font-[600] text-[20px] mb-[20px]">
              Corporate Innovation/ Matchmaking / Deal Sourcing
            </h4>
          </div>{' '}
          <p>
            Building strategic partnerships is essential for growth. INNO-APAC
            excels in Corporate Innovation by facilitating matchmaking between
            startups and corporations. We source deals that can catapult your
            venture to new heights, fostering innovation and collaboration.
          </p>
        </div>
        <br></br>
        <div>
          <div className=" flex ">
            {' '}
            <b className="text-[20px] text-[#e6202d]">03.</b>
            <h4 className="font-[600] text-[20px] mb-[20px]">
              Acceleration Program/tech tour visit{' '}
            </h4>
          </div>{' '}
          <p>
            Our Acceleration Program is tailored to propel startups forward.
            Through mentorship, resources, and networking opportunities, we
            provide the support you need to accelerate your business.
            Additionally, our tech tour visits offer valuable insights into
            global innovation hubs, helping you stay at the forefront of
            industry trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurshipServiceContent;
