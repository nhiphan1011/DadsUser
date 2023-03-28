import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="flex justify-between h-screen">
      <div className="w-1/2 hidden md:block h-full bg-pink-200">
        <img src="" alt="" />
      </div>
      <div
        className="w-full h-full
        md:w-1/2
      "
      >
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
