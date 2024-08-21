import { createBrowserRouter } from "react-router-dom";
import PostPage from "../pages/PostPage";
import HomePage from "./../pages/HomePage";
import NavTemplate from "./templates/NavTemplate";

const BrowserRouter = createBrowserRouter([
  {
    element: <NavTemplate />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
      },
    ],
  },
]);

export default BrowserRouter;
