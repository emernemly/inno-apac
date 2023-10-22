import Partner from './Partner/Partner';
import BlogHome from './componet/BlogProfile/BlogHome';
import ContactProfile from './componet/ContactProfile/ContactProfile';
import HomeImage from './componet/IntroImages/HomeImage';
import Methodology from './componet/Methodology/Methodology';
import RequestCallBack from './componet/RequestCallBack/RequestCallBack';
import WhatWeDo from './componet/WhatWeDo/WhatWeDo';
export const metadata = {
  title: 'INNO-APAC',
  description:
    'INNO-APAC: Your trusted partner for technology innovation solutions in China. We provide Investment Promotion, Entrepreneurship Services, Incubation Operations, and SEO expertise. Our mission is to empower growth, drive progress, and create a digital technology innovation ecosystem in the APAC region. Contact us today to unlock new possibilities and stay at the forefront of innovation.',
};
export default function Home() {
  return (
    <main>
      <HomeImage />
      <WhatWeDo />
      <RequestCallBack />
      <Methodology />
      <ContactProfile />
      <BlogHome />
      <Partner />
    </main>
  );
}
