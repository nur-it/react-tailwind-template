import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const ComponentLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* sidebar start here  */}
      <Sidebar />

      {/* content aria  */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Navbar />

        <main className="mx-auto p-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ComponentLayout;
