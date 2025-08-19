import React, { useContext } from "react";
import BookContext from "./BookContext";
import { Link, useParams } from "react-router-dom";
import star from "../assets/star.png";
import arrow from "../assets/arrow.png";

function Genrebooks() {
  const books = useContext(BookContext);
  const { genre } = useParams();

  const genreBooks = books.filter((book) => book.genre === genre);

  return (
    <div className="p-6 mx-[4rem] mb-[2rem] mt-[1.5rem] flex flex-col items-center">

      <Link
        to="/"
        className="self-start flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-6"
      >
        <img src={arrow} alt="back" className="h-5 " />
        <span className="font-medium">Back</span>
      </Link>
    
      <h1 className="text-3xl font-bold mb-9 text-gray-900 ">
        Books in <span className="text-gray-600">{genre}</span>
      </h1>

      <div className="flex flex-wrap gap-6 justify-center items-center">
        {genreBooks.map((book, i) => (
          <div
            key={i}
            className="w-[15rem] bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
          >
            
            <div className="relative">
              <img
                src={book.coverImg}
                alt={book.title}
                className="w-full h-60 object-cover"
              />
              {/* Rating Badge */}
              <span className="flex items-center gap-1.5 absolute top-3 right-3 bg-gray-900/90 text-white text-sm font-medium px-2 py-1 rounded-lg shadow">
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
                to={`/genre/${book.title}`}
                className="mt-3 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Genrebooks;
