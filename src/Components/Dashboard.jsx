import React from 'react'

function Dashboard({books,category,featured}) {
  return (
    <div className='flex md:flex-row flex-col py-10 mx-[4rem] gap-[0.7rem] md:gap-[2rem] items-center justify-center'>
        <div className='flex flex-col  py-[1rem] flex-1/3 justify-center items-center border rounded-lg bg-teal-100/40 border-none md:shadow-2xl hover:scale-105 duration-300 px-[2rem]'>
            <h1 className='text-3xl md:text-5xl text-[#F97415] md:py-2 py-0.5 font-medium md:font-bold'>{books.length}</h1>
            <h1 className='text-gray-800/80 md:py-2 py-0.5 shrink-0 text-[0.9rem] md:text-xl'>Books Available</h1>
        </div>

        <div className='flex flex-col py-[1rem] flex-1/3 justify-center items-center border rounded-lg bg-teal-100/40 border-none md:shadow-2xl hover:scale-105 duration-300 px-[2rem]'>
            <h1 className='text-3xl md:text-5xl text-[#F97415] md:py-2 py-0.5 font-medium md:font-bold'>{category.length}</h1>
            <h1 className='text-gray-800/80 md:py-2 py-0.5 shrink-0 text-[0.9rem] md:text-xl'>Categories</h1>
        </div>

        <div className='flex flex-col py-[1rem] flex-1/3 justify-center items-center border rounded-lg bg-teal-100/40 border-none md:shadow-2xl hover:scale-105 duration-300 px-[2rem]'>
            <h1 className='text-3xl md:text-5xl text-[#F97415] md:py-2 py-0.5 font-medium md:font-bold'>{featured.length}</h1>
            <h1 className='text-gray-800/80 md:py-2 py-0.5 shrink-0 text-[0.9rem] md:text-xl'>Featured Books</h1>
        </div>

        

    </div>
  )
}

export default Dashboard