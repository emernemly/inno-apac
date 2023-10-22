'use client';
import { getblog } from '@/app/Redux/blogAction';
import Loading from '@/app/Loadings';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
const BlogHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getblog());
  }, []);
  const loading = useSelector((state) => state.blog.loading);
  const items = useSelector((state) => state.blog.items);

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto">
          <h1 className="font-[700] text-[45px] mb-[50px]">Blog</h1>

          <div className=" gap-7 grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3">
            {' '}
            {items
              .slice(0, 3)
              .reverse()
              .map((blog, i) => (
                <div
                  className=" border-2 ease-in duration-300  hover:shadow-xl hover:translate-y-1	 "
                  key={i}
                >
                  <div className=" h-[230px] relative">
                    <img
                      src={blog.img}
                      alt={blog.alt}
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
                </div>
              ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogHome;
