import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import Home from "./pages/Home";
import Rootlayout from "./layout/Rootlayout";
import About from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/singup" element={<Singup />}></Route>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
    </>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
