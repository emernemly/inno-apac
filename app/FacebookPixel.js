'use client';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
function FacebookPixels() {
  const router = useRouter();

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('XXXXXXXXXXXXXXXXXXXXX'); // facebookPixelId
        ReactPixel.pageView();

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);
  return null;
}

export default FacebookPixels;
