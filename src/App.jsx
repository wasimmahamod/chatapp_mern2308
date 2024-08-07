import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Singup />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
