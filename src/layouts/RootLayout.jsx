import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const RootLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* sidebar start here  */}
      <Sidebar />

      {/* content aria  */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Navbar />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
