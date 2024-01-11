import { Suspense } from 'react';
import Footer from './Footer/Footer';
import ScrollUp from './componet/ScrollUp/ScrollUp';
import './globals.css';
import { Inter } from 'next/font/google';
import StoreProvide from './Redux/storeProvide';
import Loadingcompante from './loading';
import FacebookPixel from './FacebookPixel';
import FacebookPixels from './FacebookPixel';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.webp" sizes="any" />
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="INNO-APAC, technology innovation, investment promotion, entrepreneurship services, incubation operations, talents recruitment,Overseas Talent, APAC region, innovation ecosystem, business consulting, China"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="U9XgrZri9t5rKqA88avw_pPntbzG01HKSdJljdiL3cA"
        />
        <React.Fragment>
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1233224094300219');
fbq('track', 'PageView');`,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1233224094300219&ev=PageView&noscript=1"
 />`,
            }}
          />
        </React.Fragment>
        <React.Fragment>
          <script
            dangerouslySetInnerHTML={{
              __html: `_linkedin_partner_id = "5581426"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id); </script><script type="text/javascript"> (function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(window.lintrk); `,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=5581426&fmt=gif" />`,
            }}
          />
        </React.Fragment>
      </head>
      <StoreProvide>
        {' '}
        <body className={inter.className}>
          {' '}
          <Suspense fallback={<Loadingcompante />}>
            <ScrollUp />
            {children}
            <Footer />
          </Suspense>
        </body>
      </StoreProvide>
    </html>
  );
}
