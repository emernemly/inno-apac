import React from 'react';

const Loading = () => {
  return (
    <div class="flex flex-row gap-2 justify-center items-center  h-[100vh]">
      <div class="w-4 h-4 rounded-full bg-[#e6202d] animate-bounce [animation-delay:.7s]"></div>
      <div class="w-4 h-4 rounded-full bg-[#e6202d] animate-bounce [animation-delay:.3s]"></div>
      <div class="w-4 h-4 rounded-full bg-[#e6202d] animate-bounce [animation-delay:.7s]"></div>
    </div>
  );
};

export default Loading;
