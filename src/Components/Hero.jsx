import React from 'react'
import { Link, useLocation } from "react-router-dom";
import search from "../assets/search.png";
import add from "../assets/add.png";

function Hero() {
    const location=useLocation()
  return (
    <div className='flex flex-col justify-center items-center py-[7rem]  lg:px-[10rem] md:px-[5rem] px-[2rem] bg-amber-200/20 mx-7 rounded-b-2xl shadow'>
        <h1 className='lg:text-6xl md:text-5xl text-4xl font-bold py-3.5 shrink-0 flex-nowrap flex'>Welcome to  <span className='bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent pl-3'> LibraryFlow</span></h1>
        <h1 className='lg:text-xl md:text-[1.1rem] text-[0.8rem] p-2.5 font-semibold text-gray-700/60 flex-wrap flex text-center'>Discover, explore, and manage your digital library. Join our community of book lovers and dive into endless stories waiting to be discovered.</h1>
        <div className='flex justify-center items-center gap-8 py-3.5'>
            <Link to={"browse"} className={`flex gap-2 items-center justify-center hover:cursor cursor-pointer bg-[#F97415] shadow  py-[0.5rem] px-[1rem] border rounded-lg `}>
          <img
            src={search}
            alt=""
            className="h-[1.5rem]   "
          />
          <h1>Browse Books</h1>
        </Link>
            <Link to={"add"} className={`flex gap-2 items-center justify-center hover:cursor cursor-pointer hover:bg-[#F97415]  py-[0.5rem] px-[1rem]  rounded-lg border shadow ${location.pathname=="/add"?"bg-[#F97415]":"bg-white"}`}>
          <img
            src={add}
            alt=""
            className="h-[1rem] "
          />
          <h1>Add Book</h1>
        </Link>
        </div>
    </div>
  )
}

export default Hero