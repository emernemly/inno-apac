'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';

const ContactSee = ({ msg }) => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  return (
    <>
      <button
        onClick={() => props.setOpenModal('default')}
        className=" mr-3 hover:text-[#e6202d]"
      >
        See_Message
      </button>
      <Modal
        show={props.openModal === 'default'}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header className="bg-[#edeff2]">See Message </Modal.Header>
        <form>
          <Modal.Body className="bg-[#edeff2]">
            <p>{msg}</p>
          </Modal.Body>
          <Modal.Footer className="bg-[#edeff2]">
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

export default ContactSee;
