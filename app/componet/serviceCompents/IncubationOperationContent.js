import Image from 'next/image';
import React from 'react';

const IncubationOperationContent = () => {
  return (
    <div>
      {' '}
      <div className=" relative w-[100%] h-[300px]">
        <Image
          src="/InternationalAcceleration.webp"
          alt="Service"
          fill={true}
        />
      </div>
      <div>
        <h1 className="font-[700] text-[45px] mb-[10px] mt-[50px]">
          Incubation Operation
        </h1>
        <p>
          INNO-APAC's Incubation Operation service is your partner in innovation
          and growth. Whether you're a startup, an established business, or an
          innovator with a vision, we are committed to providing you with the
          tools, resources, and support needed to thrive in today's competitive
          landscape. Join us in shaping the future of innovation.
        </p>
        <br></br>
        <p>
          At INNO-APAC, our Incubation Operation service is dedicated to
          fostering innovation and cultivating thriving startups and ventures.
          We provide a holistic ecosystem that supports entrepreneurs and
          innovators at every stage of their journey. Here's an overview of our
          Incubation Operation offerings:
        </p>
        <br></br>
        <div>
          <div className=" flex ">
            {' '}
            <b className="text-[20px] text-[#e6202d]">01.</b>
            <h4 className="font-[600] text-[20px] mb-[20px]">
              Competition, Roadshow, Workshops, etc
            </h4>
          </div>{' '}
          <p>
            We believe in hands-on support for startups and innovators. Our
            incubation programs include competitions, roadshows, and workshops
            that provide valuable opportunities for learning, networking, and
            showcasing your ideas. We're here to help you refine your concepts
            and gain exposure.
          </p>
        </div>
        <br></br>
        <div>
          <div className=" flex ">
            {' '}
            <b className="text-[20px] text-[#e6202d]">02.</b>
            <h4 className="font-[600] text-[20px] mb-[20px]">
              International Technology Transfer
            </h4>
          </div>{' '}
          <p>
            Staying at the forefront of technology is crucial in today's global
            landscape. INNO-APAC facilitates international technology transfer,
            connecting you with cutting-edge innovations and expertise from
            around the world. We ensure that you have access to the latest
            advancements to drive your projects forward.
          </p>
        </div>
        <br></br>
        <div>
          <div className=" flex ">
            {' '}
            <b className="text-[20px] text-[#e6202d]">03.</b>
            <h4 className="font-[600] text-[20px] mb-[20px]">
              Offshore Innovation Center Operation
            </h4>
          </div>{' '}
          <p>
            Our Offshore Innovation Center operation allows you to establish a
            strategic presence in key innovation hubs. We provide the
            infrastructure, resources, and local support you need to expand your
            operations and tap into new markets effectively.
          </p>
        </div>
        <br></br>
        <div>
          <div className=" flex ">
            {' '}
            <b className="text-[20px] text-[#e6202d]">03.</b>
            <h4 className="font-[600] text-[20px] mb-[20px]">
              Incubation Ecosystem Operation{' '}
            </h4>
          </div>{' '}
          <p>
            We understand that success is not achieved in isolation. Our
            Incubation Ecosystem Operation connects you with a network of
            like-minded innovators, mentors, investors, and industry experts.
            This collaborative ecosystem is designed to nurture your growth and
            accelerate your path to success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncubationOperationContent;
