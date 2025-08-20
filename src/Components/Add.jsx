import React, { useState, useContext } from "react";
import BookContext from "./BookContext";

function Add() {
  const { books, setBooks } = useContext(BookContext); 
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    rating: "",
    isPopular: false,
    isFeatured: false,
    coverImg: "",
    description: "",
    detailedDescription: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add book to context or backend
    setBooks([...books, bookData]);
    alert(`${bookData.title} added successfully!`);
    setBookData({
      title: "",
      author: "",
      genre: "",
      rating: "",
      isPopular: false,
      isFeatured: false,
      coverImg: "",
      description: "",
      detailedDescription: "",
    });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-md min-h-screen my-[2rem]">
      <h1 className="text-3xl font-bold mb-6">Add New Book</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={bookData.title}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={bookData.author}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
          required
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={bookData.genre}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />
        
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={bookData.rating}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
          min="1"
          max="5"
        />
        <input
          type="text"
          name="coverImg"
          placeholder="Cover Image URL"
          value={bookData.coverImg}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />
        <textarea
          name="description"
          placeholder="Short Description"
          value={bookData.description}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />
        <textarea
          name="detailedDescription"
          placeholder="Detailed Description"
          value={bookData.detailedDescription}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />

        <div className="flex gap-4 items-center">
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              name="isPopular"
              checked={bookData.isPopular}
              onChange={handleChange}
            />
            Popular
          </label>
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              name="isFeatured"
              checked={bookData.isFeatured}
              onChange={handleChange}
            />
            Featured
          </label>
        </div>

        <button
          type="submit"
          className="bg-[#F97415] text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default Add;
