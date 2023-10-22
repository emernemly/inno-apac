'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import BlogAddingForm from './BlogAddingForm';
import { useDispatch, useSelector } from 'react-redux';
import { userverify } from '@/app/Redux/userAction';
import { deleteblog, getblog } from '@/app/Redux/blogAction';
import { Alert, Spinner } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
const BlogSettingProfile = () => {
  const [search, setsearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userverify());
    dispatch(getblog());
  }, []);
  const loading = useSelector((state) => state.blog.loading);
  const items = useSelector((state) => state.blog.items);
  const error = useSelector((state) => state.blog.error);

  const hadandelDelete = (_id) => {
    const result = confirm('Want to delete?');
    if (result) {
      dispatch(deleteblog(_id));
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <input
          type="text"
          placeholder="Search With Title"
          className="mb-5 w-[100%] border-[#9e9e9e]"
          onChange={(e) => setsearch(e.target.value)}
        />
        <div className=" gap-7 grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-2">
          {' '}
          <BlogAddingForm />
          {items
            .filter((blog) =>
              blog.title.toUpperCase().includes(search.toUpperCase())
            )
            .reverse()
            .map((blog, i) => (
              <div
                className=" border-2 ease-in duration-300  hover:shadow-xl hover:translate-y-1	 "
                key={i}
              >
                {error && (
                  <Alert
                    className=" w-[100%] mb-4"
                    color="failure"
                    icon={HiInformationCircle}
                  >
                    <span>{error}</span>
                  </Alert>
                )}
                <div className=" h-[230px] relative">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    fill={true}
                    className=" h-[100%] w-[100%]"
                  />{' '}
                  <Link href={`/Blog/${blog._id}`}>
                    {' '}
                    <div className=" absolute z-10 top-[200px] right-8 bg-[#e6202d] p-4 text-white text-[24px] cursor-pointer ">
                      {' '}
                      <FaLongArrowAltRight />
                    </div>{' '}
                  </Link>
                </div>
                <div className=" p-5 blog">
                  <h4 className="font-[600] text-[20px] my-3">
                    <Link
                      href={`/Blog/${blog._id}`}
                      className=" cursor-pointer"
                    >
                      {blog.title}{' '}
                    </Link>
                  </h4>
                  <p>{blog.description}</p>
                </div>
                <div className="p-5 blog">
                  <button
                    onClick={() => hadandelDelete(blog._id)}
                    className=" font-[700] bg-[#e6202d] text-white md:w-[100%] px-5 py-3 "
                  >
                    {!loading ? 'DELETE' : <Spinner />}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSettingProfile;
