import React from 'react';

const PreLoader = () => {
  return (
    <div className="fixed top-0 left-0 z-999999 flex h-screen w-screen items-center justify-center bg-white">
      <div className="border-primary h-16 w-16 animate-spin rounded-full border-4 border-solid border-t-transparent"></div>
    </div>
  );
};

export default PreLoader;
