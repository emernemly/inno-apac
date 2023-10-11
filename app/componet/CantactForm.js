'use client';
import axios from 'axios';
import { Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

const CantactForm = () => {
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
    <section className="bg-[#edeff2] flex items-center justify-center flex-col">
      {' '}
      <div className="container  mx-auto flex flex-col ">
        <h1 className="font-[700] text-[45px] mb-[50px]">Contact Form</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col py-[75px] px-[30px] items-center justify-centers container md:px-11 "
      >
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
        <div className="grid gap-4 md:gap-1 grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 mb-4 w-[100%]">
          <div className="flex flex-col">
            {' '}
            <input
              type="text"
              placeholder="Name"
              className=" border-0 p-4 w-[100%]"
              {...register('name', { required: true })}
            />
            <span className=" text-red-600">
              {errors.name && '! this field is required'}
            </span>
          </div>
          <div className="flex flex-col">
            {' '}
            <input
              type="text"
              placeholder="Email"
              className=" border-0 p-4 w-[100%]"
              {...register('email', { required: true })}
            />
            <span className=" text-red-600">
              {errors.email && '! this field is required'}
            </span>
          </div>
        </div>
        <div className="grid gap-4 md:gap-1 grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 mb-4 w-[100%]">
          <div className="flex flex-col">
            <input
              type="number"
              placeholder="Phone"
              className=" border-0 p-4 w-[100%]"
              {...register('phone', { required: true })}
            />
            <span className=" text-red-600">
              {errors.phone && '! this field is required'}
            </span>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Subject"
              className=" border-0 p-4 w-[100%]"
              {...register('subject', { required: true })}
            />
            <span className=" text-red-600">
              {errors.subject && '! this field is required'}
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[100%]">
          <input
            type="text"
            placeholder="msg"
            className="mb-4 border-0 p-4 w-[100%]"
            {...register('msg', { required: true })}
          />
          <span className=" text-red-600">
            {errors.msg && '! this field is required'}
          </span>
        </div>
        <button
          type="submit"
          disabled={loading && true}
          className=" disabled:opacity-25 font-[700] bg-[#e6202d] text-white md:w-[50%]  px-5 py-3"
        >
          {!loading ? 'SUBMIT NOW' : <Spinner />}
        </button>
      </form>
    </section>
  );
};

export default CantactForm;
