'use client';
import React, { useEffect } from 'react';

import Nav from '@/app/componet/Nav';
import Image from 'next/image';
import { usePathname, useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getblogByid } from '@/app/Redux/blogAction';
import Loading from '@/app/Loadings';
const BlogDetailsComponet = () => {
  const pathname = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(pathname.BlogDetails);
    pathname && dispatch(getblogByid(pathname.BlogDetails));
  }, []);
  const loading = useSelector((state) => state.blog.loading);

  const blog = useSelector((state) => state.blog.oneItem);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        blog && (
          <div>
            <div
              className={`w-[100%] h-[450px] relative bg-[url('/serviceImage.webp')] bg-no-repeat bg-cover bg-center`}
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00000080] z-10"></div>
              <Nav />
              <div className="flex-col z-20  absolute top-[50%]  font-[700] md:w-[100%] flex items-center justify-center text-center	">
                <h1 className=" text-white md:w-[50%] text-[48px]  w-[100%] md:text-[60px] ">
                  {' '}
                  Blog Details
                </h1>
              </div>
            </div>
            <section>
              <div className="container mx-auto  grid gap-5   md:grid-rows-1 grid-cols-1 md:grid-cols-2">
                <div>
                  <h1 className="font-[700] text-[45px] mb-[50px]">
                    {blog.title}
                  </h1>
                  <p>{blog.description}</p>
                </div>
                <div className="relative h-[500px] ">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    fill={true}
                    className=" w-[100%] h-[100%]"
                  />
                </div>
              </div>
            </section>
          </div>
        )
      )}
    </div>
  );
};
export default BlogDetailsComponet;
