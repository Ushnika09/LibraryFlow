import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";

function Add() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    description: "",
    detailedDescription: "",
    rating: "",
    isPopular: false,
    isFeatured: false,
    genre: "",
    coverImg: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!newBook.title.trim()) errs.title = "Title is required";
    if (!newBook.author.trim()) errs.author = "Author is required";
    if (!newBook.description.trim()) errs.description = "Short description is required";
    if (!newBook.detailedDescription.trim()) errs.detailedDescription = "Detailed description is required";
    if (!newBook.genre.trim()) errs.genre = "Genre is required";
    if (!newBook.coverImg.trim()) errs.coverImg = "Cover image URL is required";
    if (
      newBook.rating === "" ||
      isNaN(newBook.rating) ||
      Number(newBook.rating) < 0 ||
      Number(newBook.rating) > 5
    ) {
      errs.rating = "Rating must be between 0 and 5";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewBook((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(addBook({ ...newBook, rating: Number(newBook.rating) }));
      navigate("/browse/all");
    }
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
        <form className="flex flex-col gap-4" onSubmit={handleAddBook} noValidate>
          <div>
            <input
              name="title"
              value={newBook.title}
              onChange={handleChange}
              placeholder="Title"
              className="border border-orange-200 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>
          <div>
            <input
              name="author"
              value={newBook.author}
              onChange={handleChange}
              placeholder="Author"
              className="border border-orange-200 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
          </div>
          <div>
            <input
              name="description"
              value={newBook.description}
              onChange={handleChange}
              placeholder="Short Description"
              className="border border-orange-200 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>
          <div>
            <textarea
              name="detailedDescription"
              value={newBook.detailedDescription}
              onChange={handleChange}
              placeholder="Detailed Description"
              className="border border-orange-200 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              rows={3}
            />
            {errors.detailedDescription && <p className="text-red-500 text-sm">{errors.detailedDescription}</p>}
          </div>
          <div>
            <input
              type="number"
              name="rating"
              value={newBook.rating}
              onChange={handleChange}
              placeholder="Rating (0-5)"
              min={0}
              max={5}
              className="border border-orange-200 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
          </div>
          <div>
            <input
              name="genre"
              value={newBook.genre}
              onChange={handleChange}
              placeholder="Genre"
              className="border border-orange-200 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.genre && <p className="text-red-500 text-sm">{errors.genre}</p>}
          </div>
          <div>
            <input
              name="coverImg"
              value={newBook.coverImg}
              onChange={handleChange}
              placeholder="Cover Image URL"
              className="border border-orange-200 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.coverImg && <p className="text-red-500 text-sm">{errors.coverImg}</p>}
          </div>
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
            type="submit"
            className="mt-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold py-3 rounded-lg shadow hover:from-orange-600 hover:to-orange-500 transition"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
