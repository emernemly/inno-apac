import Partner from './Partner/Partner';
import BlogProfile from './componet/BlogProfile/BlogProfile';
import ContactProfile from './componet/ContactProfile/ContactProfile';
import HomeImage from './componet/IntroImages/HomeImage';
import Methodology from './componet/Methodology/Methodology';
import RequestCallBack from './componet/RequestCallBack/RequestCallBack';
import WhatWeDo from './componet/WhatWeDo/WhatWeDo';

export default function Home() {
  return (
    <main>
      <HomeImage />
      <WhatWeDo />
      <RequestCallBack />
      <Methodology />
      <ContactProfile />
      <BlogProfile />
      <Partner />
    </main>
  );
}
