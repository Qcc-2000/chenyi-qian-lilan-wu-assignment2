import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import NotFoundPage from "./NotFoundPage.jsx";
import Credits from "./Credits.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/game',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/credits',
    element: <Credits />,
    errorElement: <NotFoundPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
