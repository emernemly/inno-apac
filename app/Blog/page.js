import React, { Suspense } from 'react';
import BlogIntro from '../componet/IntroImages/BlogIntro';
import BlogProfile from '../componet/BlogProfile/BlogProfile';

const blog = () => {
  return (
    <main>
      <BlogIntro />
      <Suspense>
        <BlogProfile />
      </Suspense>
    </main>
  );
};

export default blog;
