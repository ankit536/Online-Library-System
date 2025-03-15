import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    year: "",
    ISBN: "",
    description: "",
    image: "",
    rating: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !book.title ||
      !book.author ||
      !book.ISBN ||
      !book.year ||
      !book.category ||
      !book.rating
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (isNaN(book.year)) {
      setError("Please enter a valid year.");
      return;
    }

    if (isNaN(book.rating) || book.rating < 0 || book.rating > 5) {
      setError("Please enter a valid rating between 0 and 5.");
      return;
    }

    dispatch(addBook(book));
    navigate("/books/all");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-1/3 flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-xl space-y-4"
      >
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          name="author"
          placeholder="Author"
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          name="category"
          placeholder="Category"
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          name="year"
          placeholder="Year"
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          name="ISBN"
          placeholder="ISBN"
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 h-32"
        />

        <input
          name="rating"
          type="number"
          placeholder="Rating (0-5)"
          value={book.rating}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <button
          type="submit"
          className="w-full p-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
