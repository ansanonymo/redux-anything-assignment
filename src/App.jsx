import { RouterProvider } from "react-router-dom";
import BrowserRouter from "./routers/BrowserRouter";

export default function App() {
  return (
    <>
      <RouterProvider router={BrowserRouter} />
    </>
  );
}
