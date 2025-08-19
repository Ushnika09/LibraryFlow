import React, { useContext } from 'react';
import BookContext from "./BookContext";
import { Link, useParams } from 'react-router-dom';
import arrow from "../assets/arrow.png";
import star from "../assets/star.png";

function Bookdetails() {
  const books = useContext(BookContext);
  const { book } = useParams();

 
  const bookdetail = books.find((b) => b.title === book);


   return (
    <div className="min-h-screen p-6 bg-amber-50 flex flex-col items-center">
      {/* Back Button */}
      <Link
        to={`/`}
        className="self-start mx-[7rem] flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-6"
      >
        <img src={arrow} alt="back" className="h-5 " />
        <span className="font-medium shrink-0">Browse Books</span>
      </Link>

      {/* Book Content */}
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start bg-white shadow-lg rounded-2xl p-6 w-full max-w-5xl">
        {/* Book Cover */}
        <img
          src={bookdetail.coverImg}
          alt={bookdetail.title}
          className="w-[18rem] h-[28rem] rounded-lg object-cover shadow-md"
        />

        {/* Book Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          {/* Title + Rating */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-900">
              {bookdetail.title}
            </h1>
            <span className="flex items-center gap-1.5 bg-gray-900/90 text-white text-sm font-medium px-3 py-1 rounded-full shadow">
              <img src={star} className="h-4" alt="star" /> {bookdetail.rating}
            </span>
          </div>

          {/* Author */}
          <p className="text-lg text-gray-600 mt-2">by {bookdetail.author}</p>

          {/* Short Description */}
          <p className="mt-4 text-gray-700 leading-relaxed">
            {bookdetail.detailedDescription}
          </p>

          {/* Extra Info */}
          <div className="mt-6 flex gap-6 text-sm text-gray-600">
            <p>
              <span className="font-semibold">Genre:</span> {bookdetail.genre}
            </p>
            {bookdetail.year && (
              <p>
                <span className="font-semibold">Published:</span>{" "}
                {bookdetail.year}
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Bookdetails;
