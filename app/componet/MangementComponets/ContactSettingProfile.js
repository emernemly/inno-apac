'use client';
import React, { useEffect, useState } from 'react';
import { Alert, Table } from 'flowbite-react';
import ContactSee from './ContactSee';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getAll } from '@/app/Redux/contactAction';
import Loading from '@/app/Loadings';
import { HiInformationCircle } from 'react-icons/hi';

const ContactSettingProfile = () => {
  const [search, setsearch] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);
  const handelDelete = (_id) => {
    const result = confirm('Want to delete?');
    result && dispatch(deleteContact(_id));
  };
  const loading = useSelector((state) => state.contact.loading);
  const error = useSelector((state) => state.contact.error);

  const Contact = useSelector((state) => state.contact.items);
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
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone</Table.HeadCell>
            <Table.HeadCell>Subject</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {Contact.filter((contact) =>
              contact.email.toUpperCase().includes(search.toUpperCase())
            )
              .reverse()
              .map((contact, i) => {
                return (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={i}
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {contact.name}
                    </Table.Cell>
                    <Table.Cell> {contact.email}</Table.Cell>
                    <Table.Cell> {contact.phone}</Table.Cell>
                    <Table.Cell> {contact.subject}</Table.Cell>
                    <Table.Cell>
                      <ContactSee msg={contact.msg} />
                      <button
                        onClick={() => handelDelete(contact._id)}
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

export default ContactSettingProfile;
