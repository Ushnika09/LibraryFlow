import React, { useContext, useEffect, useState } from "react";

import { ChevronDown } from "lucide-react";
import Genrebooks from "./Genrebooks";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Browse() {
  const books = useSelector((state) => state.books);

  // console.log(books);
  const category = [...new Set(books.map((book) => book.genre))];

  const [search,setSearch]=useState("")
  const [filter,setFilter]=useState("All Categories")

  const { genre } = useParams()

  useEffect(()=>{
    if(genre){
      setFilter(genre)
    }else{
      setFilter("All Categories")
    }
  },[])

  const filteredBooks = books.filter((book) => {
    // Search filter
    const query = search.toLowerCase().trim();
  const matchesSearch =
    book.title.toLowerCase().startsWith(query) ||
    book.author.toLowerCase().startsWith(query);

    // Dropdown filter
    let matchesFilter = true;
    if (filter === "Popular") matchesFilter = book.isPopular;
    else if (filter === "Featured") matchesFilter = book.isFeatured;
    else if (filter !== "All Categories") matchesFilter = book.genre === filter;

    return matchesSearch && matchesFilter;
  });

  console.log(filteredBooks)

  return (
    <div className="flex flex-col justify-start items-start px-[5rem] py-[2rem] min-h-screen bg-teal-100/30">
      <h1 className="py-2 text-5xl font-extrabold">Browse Books</h1>
      <h1 className="py-2 text-xl font-semibold text-gray-800/60">
        Discover your next favorite book from our collection of {filteredBooks.length} books
      </h1>

      <div className="flex justify-between items-center my-5 gap-[0.5rem] w-full">
        <input
          className="flex-1 focus:border-[#F97415] focus:ring-2  focus:inset-2 px-[1rem] py-[0.5rem] focus:border-2 border rounded-lg"
          type="text"
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search by title or author ..."
        />

        <div className="relative ">
          <select
            name=""
            value={filter}
            onChange={(e)=>setFilter(e.target.value)}
            id=""
            className="flex  px-[1rem] pr-[3rem] py-[0.5rem] appearance-none border rounded-lg w-full "
          >
            <option value="All Categories">All Categories</option>
            <option value="Popular">Popular</option>
            <option value="Featured">Featured</option>
            {category.map((cat) => {
              return <option key={cat} value={cat}>{cat}</option>;
            })}
          </select>
          <ChevronDown className="absolute top-2 right-2.5 pointer-events-none" />
        </div>
      </div>
      <Genrebooks filtered={filteredBooks} filter={filter}/>
    </div>
  );
}

export default Browse;
