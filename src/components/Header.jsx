import { Link } from "react-router-dom";

const Header = () => (
  <nav className="flex flex-wrap justify-center items-center gap-2">
    <Link
      className="rounded-sm px-3 py-1 text-lg  text-white bg-pink-700 "
      to="/"
    >
      Home
    </Link>
    <Link
      className="rounded-sm px-3 py-1 text-lg  text-white bg-pink-700 "
      to="/books/all"
    >
      Browse Books
    </Link>
    <Link
      className="rounded-sm px-3 py-1 text-lg  text-white bg-pink-700 "
      to="/addBook"
    >
      Add Book
    </Link>
  </nav>
);

export default Header;
