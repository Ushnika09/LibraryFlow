import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookContext from "./BookContext";

function Add() {
  const { books, setBooks } = useContext(BookContext);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    description: "",
    detailedDescription: "",
    rating: 0,
    isPopular: false,
    isFeatured: false,
    genre: "",
    coverImg: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewBook((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleAddBook = () => {
    setBooks([...books, newBook]);
    setNewBook({
      title: "",
      author: "",
      description: "",
      detailedDescription: "",
      rating: 0,
      isPopular: false,
      isFeatured: false,
      genre: "",
      coverImg: ""
    });
    alert("Book added successfully!");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg border border-orange-200">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-1 rounded bg-orange-100 text-orange-700 hover:bg-orange-200 transition flex items-center gap-2"
        >
          <span className="text-lg">&#8592;</span> Back
        </button>
        <h1 className="text-3xl font-extrabold text-orange-600 mb-6 text-center">Add New Book</h1>
        <div className="flex flex-col gap-4">
          <input
            name="title"
            value={newBook.title}
            onChange={handleChange}
            placeholder="Title"
            className="border border-orange-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            name="author"
            value={newBook.author}
            onChange={handleChange}
            placeholder="Author"
            className="border border-orange-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            name="description"
            value={newBook.description}
            onChange={handleChange}
            placeholder="Short Description"
            className="border border-orange-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            name="detailedDescription"
            value={newBook.detailedDescription}
            onChange={handleChange}
            placeholder="Detailed Description"
            className="border border-orange-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            rows={3}
          />
          <input
            type="number"
            name="rating"
            value={newBook.rating}
            onChange={handleChange}
            placeholder="Rating (0-5)"
            min={0}
            max={5}
            className="border border-orange-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            name="genre"
            value={newBook.genre}
            onChange={handleChange}
            placeholder="Genre"
            className="border border-orange-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            name="coverImg"
            value={newBook.coverImg}
            onChange={handleChange}
            placeholder="Cover Image URL"
            className="border border-orange-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2 text-orange-700 font-medium">
              <input
                type="checkbox"
                name="isPopular"
                checked={newBook.isPopular}
                onChange={handleChange}
                className="accent-orange-500"
              />
              Popular
            </label>
            <label className="flex items-center gap-2 text-orange-700 font-medium">
              <input
                type="checkbox"
                name="isFeatured"
                checked={newBook.isFeatured}
                onChange={handleChange}
                className="accent-orange-500"
              />
              Featured
            </label>
          </div>
          <button
            onClick={handleAddBook}
            className="mt-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold py-3 rounded-lg shadow hover:from-orange-600 hover:to-orange-500 transition"
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default Add;
