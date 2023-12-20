'use client';
import React, { useEffect } from 'react';
function FacebookPixels() {
  useEffect(() => {
    async () => {
      const { default: ReactPixel } = await import('react-facebook-pixel');
      ReactPixel.init('1233224094300219', null, {
        autoConfig: true,
        debug: true,
      });
      ReactPixel.pageView();
      ReactPixel.track('ViewContent');
    };
  }, []);
  return null;
}

export default FacebookPixels;
