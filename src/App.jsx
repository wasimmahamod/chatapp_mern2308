import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Singup from './pages/Singup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Singup/>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App