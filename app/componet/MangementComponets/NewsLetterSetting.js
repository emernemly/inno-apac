'use client';
import React, { useEffect, useState } from 'react';
import { Alert, Table } from 'flowbite-react';

import { useDispatch, useSelector } from 'react-redux';
import Loading from '@/app/Loadings';
import { HiInformationCircle } from 'react-icons/hi';
import { allNewsLetter, deleteNewsLetter } from '@/app/Redux/newsLetterAction';

const NewsLetterSetting = () => {
  const [search, setsearch] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allNewsLetter());
  }, []);
  const handelDelete = (_id) => {
    const result = confirm('Want to delete?');
    result && dispatch(deleteNewsLetter(_id));
  };
  const loading = useSelector((state) => state.newsLetter.loading);
  const error = useSelector((state) => state.newsLetter.error);

  const newsLetter = useSelector((state) => state.newsLetter.items);
  return (
    <div className="container mx-auto">
      <input
        type="text"
        placeholder="Search With Email"
        className="mb-5 w-[100%] border-[#9e9e9e]"
        onChange={(e) => setsearch(e.target.value)}
      />
      {error && (
        <Alert
          className=" w-[100%] mb-4"
          color="failure"
          icon={HiInformationCircle}
        >
          <span>{error}</span>
        </Alert>
      )}
      {loading ? (
        <Loading />
      ) : (
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Email</Table.HeadCell>

            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {newsLetter
              .filter((newsLetter) =>
                newsLetter.email.toUpperCase().includes(search.toUpperCase())
              )
              .reverse()
              .map((newsLetter, i) => {
                return (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={i}
                  >
                    <Table.Cell> {newsLetter.email}</Table.Cell>

                    <Table.Cell>
                      <button
                        onClick={() => handelDelete(newsLetter._id)}
                        className="hover:text-[#e6202d]"
                      >
                        {' '}
                        Delete
                      </button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
      )}
    </div>
  );
};

export default NewsLetterSetting;
