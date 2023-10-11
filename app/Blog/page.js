import React from 'react';
import BlogIntro from '../componet/IntroImages/BlogIntro';
import BlogProfile from '../componet/BlogProfile/BlogProfile';
export const metadata = {
  title: 'Blog  | INNO-APAC',
  description:
    'Stay informed with the latest industry insights and trends. Explore our blog for valuable content on technology innovation, entrepreneurship, and investment promotion.',
};
const blog = () => {
  return (
    <main>
      <BlogIntro />

      <BlogProfile />
    </main>
  );
};

export default blog;
