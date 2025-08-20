import React from "react";
import book from "../assets/book.png"
import { Link } from "react-router-dom";

function Category({ books, category}) {
    
  return (
    <div className="flex flex-col px-[3rem] bg-gradient-to-b from-purple-50 to-purple-100 py-[2rem] justify-between items-center">
        <h1 className="text-4xl font-bold pt-7">Explore Categories</h1>
        <h1 className="py-2.5 text-gray-800/60 font-medium pb-[2rem]">Find books that match your interests</h1>
        <div className=" flex flex-wrap justify-center gap-[1rem] items-center">
        
      {category.map((cat,i) => {
        const count = books.filter((book) => book.genre === cat).length;
        return (
          <Link to={`/browse/${cat}`} className="flex flex-col md:flex-1/3 flex-1/2  lg:flex-1/4 py-[1rem]  justify-center items-center border rounded-lg  border-none shadow-xl hover:scale-105 duration-300 px-[2rem]  bg-white/90">
            <span className="p-[1rem] bg-[#F97415]/75 rounded-full mt-[1rem] shrink-0">
                <img src={book} alt="" className="h-[2rem] "/>
            </span>
            <h1 className="text-2xl   md:py-2 py-0.5 font-medium md:font-bold">
              {cat}
            </h1>
            
            <h1 className="text-gray-800/80 md:py-2 py-0.5 shrink-0 md:text-[0.9rem] text-wrap text-center text-[0.6rem]">
              {count} books
            </h1>
          </Link>
        );
      })}
    </div>
    </div>
  );
}

export default Category;
