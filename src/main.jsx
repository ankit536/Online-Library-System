import { lazy, Suspense, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader.jsx";

const Home = lazy(() => import("./components/Home.jsx"));
const BrowseBooks = lazy(() => import("./components/BrowseBooks.jsx"));
const BookDetails = lazy(() => import("./components/BookDetails.jsx"));
const AddBook = lazy(() => import("./components/AddBook.jsx"));
const NotFound = lazy(() => import("./components/NotFound.jsx"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/books/:category",
        element: (
          <Suspense fallback={<Loader />}>
            <BrowseBooks />
          </Suspense>
        ),
      },
      {
        path: "/book/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <BookDetails />
          </Suspense>
        ),
      },
      {
        path: "/addBook",
        element: (
          <Suspense fallback={<Loader />}>
            <AddBook />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
