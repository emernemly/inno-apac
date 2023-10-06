import Image from 'next/image';
import React from 'react';

const InvestmentPromotioncontent = () => {
  return (
    <div>
      {' '}
      <div className=" relative w-[100%] h-[300px]">
        <Image src="/InvestmentPromotion.webp" alt="Service" fill={true} />
      </div>
      <div>
        <h1 className="font-[700] text-[45px] mb-[10px] mt-[50px]">
          Investment Promotion
        </h1>
        <p>
          INNO-APAC&apos;s Investment Promotion service is your trusted partner
          for navigating the intricate landscape of investments. We are
          committed to helping you secure the financial support you need to
          thrive in today&apos;s competitive business environment. Let us guide
          you towards a prosperous future.
        </p>
        <br></br>
        <p>
          Our Investment Promotion service at INNO-APAC is your gateway to
          unlocking the financial resources and strategic partnerships needed to
          propel your business forward. We specialize in three key areas of
          investment promotion:
        </p>
        <br></br>
        <div>
          <div className=" flex ">
            {' '}
            <b className="text-[20px] text-[#e6202d]">01.</b>
            <h4 className="font-[600] text-[20px] mb-[20px]">
              Tech Investment Promotion
            </h4>
          </div>{' '}
          <p>
            We are passionate about nurturing tech startups and talent. Through
            our extensive network and expertise, we connect promising tech
            ventures with investors who share their vision. Whether you&apos;re
            a budding entrepreneur or an established tech company, we can help
            you secure the funding needed to innovate and expand.
          </p>
        </div>
        <br></br>
        <div>
          <div className=" flex ">
            {' '}
            <b className="text-[20px] text-[#e6202d]">02.</b>
            <h4 className="font-[600] text-[20px] mb-[20px]">
              Government Fundraising Support
            </h4>
          </div>{' '}
          <p>
            INNO-APAC has a track record of successfully facilitating
            fundraising support from government sources. We work diligently to
            identify government grants, subsidies, and incentives that align
            with your business objectives. Our team will guide you through the
            application process and ensure you tap into these valuable
            resources.
          </p>
        </div>
        <br></br>
        <div>
          <div className=" flex ">
            {' '}
            <b className="text-[20px] text-[#e6202d]">03.</b>
            <h4 className="font-[600] text-[20px] mb-[20px]">
              Investment in Funds, Institutes, and Innovation Centers
            </h4>
          </div>{' '}
          <p>
            Our network extends to a diverse range of investment opportunities,
            including funds, research institutes, and innovation centers.
            Whether you are looking to invest or seeking investment, we can
            connect you with the right partners to foster growth and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPromotioncontent;
