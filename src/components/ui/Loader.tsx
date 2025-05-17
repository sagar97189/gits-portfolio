import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-t-4 border-primary-500 rounded-full animate-spin"></div>
          <div className="absolute inset-3 border-r-4 border-secondary-500 rounded-full animate-spin animation-delay-150"></div>
          <div className="absolute inset-6 border-b-4 border-accent-500 rounded-full animate-spin animation-delay-300"></div>
        </div>
        <h2 className="mt-8 text-2xl font-serif font-bold text-primary-600 dark:text-primary-400">
          Sagar Bisht
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Loading amazing work...
        </p>
      </div>
    </div>
  );
};

export default Loader;