import React from 'react'

const Cards = () => {
  return (
    <section className="flex-1 m-2">

    <div className="hover:shadow-lg shadow-lg p-4 rounded-lg flex flex-col items-center">
      <img src="https://via.placeholder.com/600x400" alt="Greece Honeymoon" className="w-full md:w-[400px] rounded-lg mb-4"/>
      <h3 className="text-lg font-bold text-center mb-1">Dreamy 6 Nights Greece Honeymoon Package</h3>
      <p className="text-center text-xs mb-4">Experience the magic of Mykonos, Athens, and more!</p>
      <ul className="list-disc mb-4 text-sm items-start">
        <li>Luxurious 4★ Hotels</li>
        <li>Exciting activities</li>
        <li>Convenient shared transfers</li>
        <li>Round-the-clock concierge service</li> 
      </ul>
      <div className='flex flex-row items-center justify-between'>
      <p className="text-base font-bold text-blue-900 mr-1"><span className=' text-green-800 text-xl font-extrabold'>$</span><span className='text-lg'>324</span> per <span className=' text-sm text-slate-800'>person</span></p>
      <button className="bg-blue-500 text-white p-1 rounded mt-1 hover:bg-blue-600 ml-1">Discover More</button>
      </div>
    </div>
  </section>
  )
}

export default Cards                  