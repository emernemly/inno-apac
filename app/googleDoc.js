'use client';
import React from 'react';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const googleDoc = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tagManagerArgs = {
        gtmId: 'GTM-W2X6XBBC',
      };
      TagManager.initialize(tagManagerArgs);
    }
  }, []);
  return null;
};

export default googleDoc;
