import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold mb-4">404 - Page Not Found</h1>
      <Link
        className="bg-blue-600 rounded text-white p-2 text-lg hover:bg-blue-700"
        to="/"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
