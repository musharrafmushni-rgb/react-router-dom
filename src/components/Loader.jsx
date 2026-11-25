import React from 'react';

const Loader = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Simple Skeleton Loader */}
      <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600 font-semibold text-lg">Loading Products...</p>
    </div>
  );
};

export default Loader;