'use client';
import React from 'react';
import { userdata } from '@/app/Redux/userAction';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'flowbite-react';
import { Spinner } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
const SignInComponet = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    dispatch(userdata(data, router));
  };
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  return (
    <section className="bg-[#edeff2] flex items-center justify-center flex-col h-[500px]">
      <div className="container  mx-auto flex items-center justify-center flex-col">
        <h1 className="font-[700] text-[45px] mb-[50px]">INNO-APAC ACCOUNT</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-[50%]"
      >
        {' '}
        {error && (
          <Alert
            className=" w-[100%] mb-4"
            color="failure"
            icon={HiInformationCircle}
          >
            <span>{error}</span>
          </Alert>
        )}
        <div className="flex flex-col w-[100%] mb-5 ">
          {' '}
          <input
            type="text"
            placeholder="User Name"
            className=" border-0 p-4 w-[100%] "
            {...register('userName', { required: true })}
          />
          <span className=" text-red-600">
            {errors.userName && '! this field is required'}
          </span>
        </div>
        <div className="flex flex-col w-[100%] mb-5">
          <input
            type="password"
            placeholder="Password"
            className=" border-0 p-4 w-[100%]   "
            {...register('password', { required: true })}
          />
          <span className=" text-red-600">
            {errors.password && '! this field is required'}
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

export default SignInComponet;
