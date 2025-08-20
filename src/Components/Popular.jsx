import React from 'react'
import { Link } from 'react-router-dom';
import star from "../assets/star.png";
import arrow from "../assets/arrow.png";

function Popular({ popular}) {
    
  return (
    <div className="flex flex-col px-[3rem] bg-gradient-to-b from-purple-50 to-purple-100 py-[2rem] justify-between items-center">
        <Link
                to="/browse/Popular"
                className="self-end flex items-center gap-2 text-gray-700 bg-[#F97415]
                hover:text-gray-900 p-2.5 rounded-lg px-4"
              >
                <span className="font-medium">View All</span>
                <img src={arrow} alt="back" className="h-4 rotate-180" />
              </Link>
        <h1 className="text-4xl font-bold pt-7">Popular Books</h1>
        <h1 className="py-2.5 text-gray-800/60 font-medium pb-[2rem]">Most loved by our community</h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-[1rem] items-center">
        
      {popular.slice(0,3).map((book,i) => {
        
        return (
          <div
                      key={i}
                      className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                    >
          
                      <div className="relative">
                        
                        {/* Rating Badge */}
                        <span className="flex items-center gap-1.5 absolute top-3 right-3 bg-[#F97415] text-white text-sm font-bold px-2 py-1 rounded-lg shadow">
                          <img src={star} className="h-3" alt="star" /> {book.rating}
                        </span>
                      </div>
          
                      {/* Content */}
                      <div className="p-4 flex flex-col justify-between">
                        <div>
                          <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
                            {book.title}
                          </h2>
                          <p className="text-sm text-gray-500 line-clamp-1">
                            By {book.author}
                          </p>
                          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                            {book.description}
                          </p>
                        </div>
          
                        {/* View Details Link */}
                        <Link
                          to={`/books/${book.title}`}
                          className="mt-3 inline-block text-sm font-medium hover:text-[#F97415] text-blue-800"
                        >
                          View Details →
                        </Link>
                      </div>
                    </div>
        );
      })}
    </div>
    </div>
  );
  
}

export default Popular