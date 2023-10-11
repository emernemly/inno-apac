import BlogDetailsComponet from '@/app/componet/BLogDetailsComponte/BlogDetailsComponet';
import React from 'react';

export const metadata = {
  title: `Blog  | INNO-APAC`,
  description:
    'Stay informed with the latest industry insights and trends. Explore our blog for valuable content on technology innovation, entrepreneurship, and investment promotion.',
};
const BlogDetails = () => {
  return (
    <main>
      <BlogDetailsComponet />
    </main>
  );
};
export default BlogDetails;
