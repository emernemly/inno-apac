'use client';
import React, { useState } from 'react';
import { BsGraphUpArrow, BsCheckCircle } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { TfiCup } from 'react-icons/tfi';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useForm } from 'react-hook-form';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import axios from 'axios';
import { Spinner } from 'flowbite-react';
const RequestCallBack = () => {
  const [count, setCount] = useState(false);
  const [loading, setloading] = useState(false);
  const [secc, setsecc] = useState(false);
  const [err, seterr] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setloading(true);
      const datas = await axios.post(
        'https://inno-apac.onrender.com/api/contact',

        data
      );
      setloading(false);
      setsecc(true);
      seterr(false);
    } catch (error) {
      console.log(error);
      seterr(error.response.data.message);
      setloading(false);
      setsecc(false);
    }
  };
  return (
    <section className="bg-[url(/backraoundRequaset.webp)] bg-cover bg-no-repeat bg-fixed relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] "></div>
      <div className=" z-10 relative container mx-auto grid gap-5   md:grid-rows-1 grid-cols-1 md:grid-cols-2">
        {' '}
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}
        >
          <div className=" grid md:grid-rows-2 grid-cols-2 ">
            <div className="flex items-center justify-center text-center flex-col md: border-[#8d8d8d] border-r-[1px]">
              <BsGraphUpArrow className=" text-[#e6202d] text-[55px]" />
              <b className=" text-white my-1 font-[500] text-[45px]">
                {count && (
                  <CountUp start={0} end={315} duration={1} delay={0} />
                )}
              </b>
              <p className="text-[#ffffffb3]">Business Growth</p>
            </div>
            <div className="flex items-center justify-center text-center flex-col md: border-[#8d8d8d] border-b-[1px]">
              <BsCheckCircle className=" text-[#e6202d] text-[55px]" />
              <b className=" text-white my-1 font-[500] text-[45px]">
                {count && (
                  <CountUp start={0} end={1250} duration={1} delay={0} />
                )}
              </b>
              <p className="text-[#ffffffb3]">Successful Projects</p>
            </div>
            <div className="flex  items-center justify-center text-center flex-col md: border-[#8d8d8d] border-t-[1px]">
              <FiUsers className=" text-[#e6202d] text-[55px]" />
              <b className=" text-white my-1 font-[500] text-[45px]">
                {count && (
                  <CountUp start={0} end={2050} duration={1} delay={0} />
                )}
              </b>
              <p className="text-[#ffffffb3]">Satisfied Customer</p>
            </div>
            <div className="flex items-center justify-center text-center flex-col md: border-[#8d8d8d] border-l-[1px] p-7 ">
              <TfiCup className=" text-[#e6202d] text-[55px]" />
              <b className=" text-white my-1 font-[500] text-[45px]">
                {count && <CountUp start={0} end={75} duration={1} delay={0} />}
              </b>
              <p className="text-[#ffffffb3]">Awards Wining</p>
            </div>
          </div>{' '}
        </ScrollTrigger>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" bg-[#edeff2] flex flex-col py-[75px] px-[30px] "
        >
          <h1 className="font-[700] text-[45px] mb-[50px]">
            Request <br />A Call Back
          </h1>
          {secc && (
            <Alert
              color="success"
              className=" w-[100%] mb-4"
              onDismiss={() => alert('Alert dismissed!')}
            >
              <span>
                Thank you for contacting us , we will reply to you via E-mail as
                soon as possible
              </span>
            </Alert>
          )}
          {err && (
            <Alert
              className=" w-[100%] mb-4"
              color="failure"
              icon={HiInformationCircle}
            >
              <span>{err}</span>
            </Alert>
          )}
          <div className="grid gap-4 md:gap-1 grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 mb-4">
            <div className="flex flex-col">
              {' '}
              <input
                type="text"
                placeholder="Name"
                className=" border-0 p-4"
                {...register('name', { required: true })}
              />
              <span className=" text-red-600">
                {errors.name && '! this field is required'}
              </span>
            </div>{' '}
            <div className="flex flex-col">
              {' '}
              <input
                type="text"
                placeholder="Email"
                className=" border-0 p-4"
                {...register('email', { required: true })}
              />
              <span className=" text-red-600">
                {errors.email && '! this field is required'}
              </span>
            </div>
          </div>
          <div className="grid gap-4 md:gap-1 grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 mb-4">
            <div className="flex flex-col">
              {' '}
              <input
                type="text"
                placeholder="Subject"
                className="mb-4 border-0 p-4"
                {...register('subject', { required: true })}
              />
              <span className=" text-red-600">
                {errors.subject && '! this field is required'}
              </span>
            </div>
            <div className="flex flex-col">
              {' '}
              <input
                type="number"
                placeholder="phone"
                className="mb-4 border-0 p-4"
                {...register('phone', { required: true })}
              />
              <span className=" text-red-600">
                {errors.phone && '! this field is required'}
              </span>
            </div>
          </div>
          <textarea
            type="text"
            placeholder="Your Message"
            className="mb-4 border-0 p-4 focus:border-[1px] border-[#e6202d]"
            {...register('msg', { required: true })}
          />
          <span className=" text-red-600">
            {errors.msg && '! this field is required'}
            <div className="flex flex-col w-[100%]"></div>
          </span>
          <button
            type="submit"
            disabled={loading && true}
            className=" font-[700] bg-[#e6202d] text-white md:w-[50%] px-5 py-3"
          >
            {!loading ? '   SUMBIT ENQUIRY' : <Spinner />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RequestCallBack;
