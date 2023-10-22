'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { Alert } from 'flowbite-react';
import { Spinner } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import { addBlog } from '@/app/Redux/blogAction';
import { useDispatch, useSelector } from 'react-redux';

const BlogAddingForm = () => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const [img, setimg] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    dispatch(addBlog({ ...data, img }));
  };
  const loading = useSelector((state) => state.blog.loading);

  const error = useSelector((state) => state.blog.error);

  return (
    <>
      <button
        onClick={() => props.setOpenModal('default')}
        className=" bg-white border-2  flex items-center justify-center flex-col"
      >
        {' '}
        <div className=" text-[70px] text-[#c0c1c1]">
          <IoIosAddCircleOutline />
        </div>
        <p className="text-[#c0c1c1]">Add New Blog</p>
      </button>
      <Modal
        show={props.openModal === 'default'}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header className="bg-[#edeff2]">New Blog Form </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <Alert
              className=" w-[100%] mb-4"
              color="failure"
              icon={HiInformationCircle}
            >
              <span>{error}</span>
            </Alert>
          )}
          <Modal.Body className="bg-[#edeff2]">
            <div className="space-y-6 flex flex-col ">
              <input
                type="file"
                placeholder="blog Image"
                className=" bg-white border-none"
                onChange={(e) => setimg(e.target.files[0])}
              />
              <input
                type="text"
                placeholder="blog Title"
                className=" bg-white border-none"
                {...register('title', { required: true })}
              />
              <textarea
                type="text"
                placeholder="blog description"
                className="h-[100px] bg-white border-none"
                {...register('description', { required: true })}
              />
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-[#edeff2]">
            <button
              type="sumbit"
              disabled={loading && true}
              className=" font-[700] bg-[#e6202d] text-white px-5 py-3 "
            >
              {!loading ? 'SUBMIT NOW' : <Spinner />}
            </button>
            <button
              className=" font-[700] bg-white  px-5 py-3 "
              onClick={() => props.setOpenModal(undefined)}
            >
              Decline
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default BlogAddingForm;
