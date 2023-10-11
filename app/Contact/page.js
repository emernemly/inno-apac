import React from 'react';
import ContactIntro from '../componet/IntroImages/ContactIntro';
import CantactForm from '../componet/CantactForm';
export const metadata = {
  title: 'Contact INNO-APAC  | INNO-APAC',
  description:
    'Contact INNO-APAC for opportunities in collaboration, innovation, and growth. We provide quick support to guide you on your journey to success.',
};
const Contact = () => {
  return (
    <main>
      <ContactIntro />
      <CantactForm />
    </main>
  );
};

export default Contact;
