import React from 'react';

import Image from 'next/image';

const Partner = () => {
  const Partner = [
    { img: '/image.webp' },
    { img: '/image2.webp' },
    { img: '/image3.webp' },
    { img: '/image4.webp' },

    { img: '/image5.webp' },

    { img: '/image6.webp' },

    { img: '/image7.webp' },

    { img: '/image8.webp' },

    { img: '/image9.webp' },

    { img: '/image10.webp' },

    { img: '/image11.webp' },

    { img: '/image12.webp' },
  ];
  const breakPoints = [
    { width: 603, itemsToShow: 1 },
    { width: 900, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className=" bg-[#edeff2]">
      <div className=" container mx-auto">
        <div className="slider_partner">
          <div className="slide-track">
            {Partner.map((parent) => (
              <div className="slide relative">
                <Image
                  src={`/PartnerImage${parent.img}`}
                  alt="Partner"
                  fill={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
