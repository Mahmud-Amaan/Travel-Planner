import React from 'react';
import Cards from './cards';

const Marketplace = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Filter Section */}
      <div className="p-4 bg-white rounded shadow-md mt-4 mx-4 flex flex-col md:flex-row justify-between items-center">
        <div className='flex flex-row items-center'>
          <span className="mr-2 text-gray-700">Budget:</span>
          <div className="relative w-full md:w-auto">
            <select className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full">
              <option>Below $600</option>
              <option>$ 600 - $ 900</option>
              <option>$ 900 - $ 1200</option>
              <option>$ 1200 - $ 1800</option>
              <option>$ 1800 - $ 2400</option>
              <option>Above $2400</option>
            </select>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <span className="mr-2 text-gray-700 mt-4 md:mt-0">No of days:</span>
          <div className="relative w-full md:w-auto mt-4 md:mt-0">
            <select className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full">
              <option>3-5 days</option>
              <option>4-8 days</option>
              <option>9-12 days</option>
              <option>13-16 days</option>
              <option>Above 16 days</option>
            </select>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <span className="mr-2 text-gray-700 mt-4 md:mt-0">Hotel Rating:</span>
          <div className="relative w-full md:w-auto mt-4 md:mt-0">
            <select className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full">
              <option>5 star</option>
              <option>4 star</option>
              <option>3 star</option>
            </select>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4 flex flex-wrap justify-between">
        {/* Package Details */}
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </main>
    </div>
  );
};

export default Marketplace;
