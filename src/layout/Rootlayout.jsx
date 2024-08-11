import React from "react";
import { Outlet } from "react-router-dom";
import SIdebar from "../component/SIdebar";

const Rootlayout = () => {
  return (
    <div className="flex">
      <SIdebar />
      <Outlet />
    </div>
  );
};

export default Rootlayout;
