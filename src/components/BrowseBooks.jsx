import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BrowseBooks() {
  const { category } = useParams();

  const currentCategory = category || "all";

  const allBooks = useSelector((state) => state.books);

  const filteredBooks =
    currentCategory === "all"
      ? allBooks
      : allBooks.filter(
          (book) =>
            book.category.toLowerCase() === currentCategory.toLowerCase()
        );

  const [searchTerm, setSearchTerm] = useState("");

  const searchedBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const categories = ["all", ...new Set(allBooks.map((book) => book.category))];

  return (
    <div className="flex">
      <div className="w-1/4 p-4 bg-gray-200">
        <h2 className="text-xl mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                to={`/books/${cat}`}
                className={`text-lg block px-4 py-2 rounded-lg ${
                  cat === currentCategory
                    ? "bg-pink-600 text-white"
                    : "text-pink-600 hover:bg-white"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 p-4">
        <h1 className="text-3xl mb-4">
          Browse Books in{" "}
          {currentCategory === "all"
            ? "All Categories"
            : currentCategory.charAt(0).toUpperCase() +
              currentCategory.slice(1)}
        </h1>

        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={handleSearch}
          className="mb-6 p-2 w-full border border-gray-300 rounded"
        />

        <div className="h-96 overflow-y-auto">
          {searchedBooks.length > 0 ? (
            <div className="flex flex-row flex-wrap justify-center gap-2">
              {searchedBooks.map((book) => (
                <div
                  key={book.id}
                  className="flex flex-col justify-around items-center border shadow-lg rounded-md w-80 p-2"
                >
                  <div className="w-40 mb-1">
                    <img src={book.image} alt={book.title} width="100%" />
                  </div>

                  <div className="bg-gray-100 w-full text-center rounded p-2 ">
                    <h2 className="text-lg font-semibold">{book.title}</h2>
                    <h3 className="text-sm text-gray-600">by: {book.author}</h3>
                    <Link
                      to={`/book/${book.id}`}
                      className="text-pink-600 text-center hover:underline"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No books found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BrowseBooks;
