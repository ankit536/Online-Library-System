import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();

  const book = useSelector((state) =>
    state.books.find((book) => book.id === id)
  );

  if (!book) {
    return (
      <p className="text-center text-xl font-semibold text-red-600">
        Book not found
      </p>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
          <img
            src={book.image}
            alt={book.title}
            className="w-64 h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-2/3 md:pl-8 bg-gray-200 rounded flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Title : {book.title}
          </h2>
          <h3 className="text-xl font-medium text-gray-600 mt-2">
            by : {book.author}
          </h3>

          <p className="text-lg text-gray-700 mt-4">
            Description : {book.description}
          </p>

          <p className="text-lg text-gray-600 mt-4">
            Rating :{" "}
            <span
              className={`font-semibold ${
                book.rating ? "text-yellow-500" : "text-gray-400"
              }`}
            >
              {book.rating ? book.rating : "Not rated"}
            </span>
          </p>

          <div className="mt-6">
            <Link
              to="/books/all"
              className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition duration-300"
            >
              Back to Browse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
