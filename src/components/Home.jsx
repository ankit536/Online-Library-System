import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const books = useSelector((state) => state.books || []);

  const categories = [
    ...new Set(
      books
        .map((book) => book.category)
        .filter((category) => category && category.trim() !== "")
    ),
  ];

  const displayedCategories = categories.slice(0, 3);
  const displayedBooks = books.slice(0, 3);

  return (
    <div className="w-full flex justify-center items-center p-6">
      <div className="text-center">
        <h1 className="text-4xl text-pink-600 mb-4">
          Welcome to the Online Library
        </h1>
        <h2 className="text-3xl mb-6 text-gray-600">Browse by Categories</h2>

        <div className="flex justify-center space-x-6 mb-6">
          {displayedCategories.length > 0 ? (
            displayedCategories.map((category) => (
              <div key={category}>
                <Link
                  className="block text-xl text-gray-700 hover:bg-pink-400 hover:text-white px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-md"
                  to={`/books/${category.toLowerCase()}`}
                >
                  {category}
                </Link>
              </div>
            ))
          ) : (
            <div className="text-xl text-gray-500">
              No categories available.
            </div>
          )}

          {categories.length > 3 && (
            <div>
              <Link
                to="/books/all"
                className="block text-xl text-gray-700 hover:bg-pink-400 px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-md"
              >
                See All Categories
              </Link>
            </div>
          )}
        </div>

        <h2 className="text-3xl mt-8 mb-6 text-gray-600">Featured Books</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedBooks.length > 0 ? (
            displayedBooks.map((book) => (
              <div key={book.id} className="bg-white p-4 rounded-lg shadow-lg">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  {book.title}
                </h3>
                <p className="text-gray-600">{book.author}</p>
                <Link
                  to={`/book/${book.id}`}
                  className="text-white bg-pink-600 p-1 rounded hover:bg-pink-800 mt-4 inline-block"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-xl text-gray-500">No books available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
