import { useEffect, useState } from "react";
import { FaTasks } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
// internal imports
import logo from "../assets/images/logo.svg";
import { useSidebar } from "../contexts/SidebarContext";

const Sidebar = () => {
  // react hook
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  // context
  const { activeSidebar, toggleSidebar } = useSidebar();

  // handle menu toggle
  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };

  // responsive menu side detected
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // hide side bar menu item click on mobile version
  const handleHideSidebar = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };

  return (
    <aside
      className={`h-screen bg-dark duration-300 z-[9999] ease-in-out ${
        isMobile && activeSidebar
          ? "absolute -left-[100%] top-0 "
          : `flex w-[18.125rem] left-0 top-0 ${
              isMobile ? "absolute" : "relative"
            }`
      }`}
    >
      <div className="w-full no-scrollbar flex flex-col overflow-y-scroll duration-300 ease-linear">
        {/* sidebar header  */}
        <div className="py-5 px-6 sticky top-0 bg-dark z-50 flex justify-between items-center">
          <a className="inline-flex items-center gap-3" href="/">
            <img src={logo} alt="logo" />{" "}
            <span className="text-[24px] text-white font-semibold">
              NurAdmin
            </span>
          </a>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <FaArrowLeftLong className="text-secondary" />
          </button>
        </div>

        {/* Sidebar menu  */}
        <div className="">
          <nav className="px-4 lg:px-6 pb-4 pt-2 flex flex-col gap-3">
            {/* Menu Group  */}
            <div className="">
              <h3 className="mb-4 ml-4 text-sm font-medium text-secondary uppercase">
                Menu
              </h3>
              <ul className="flex flex-col gap-1.5">
                <li onClick={handleHideSidebar}>
                  <Link
                    to="/"
                    className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover'
                  >
                    <HiOutlineViewGrid className="text-xl" />
                    Dashboard
                  </Link>
                </li>

                <li onClick={handleHideSidebar}>
                  <Link
                    to="/profile"
                    className='className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover'
                  >
                    <FiUser className="text-xl" />
                    Profile
                  </Link>
                </li>

                <li className="w-full">
                  <button
                    type="button"
                    onClick={() => handleMenuClick("menu1")}
                    className={`group w-full relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover ${
                      activeMenu === "menu1" ? "bg-menuHover" : ""
                    }`}
                  >
                    <FaTasks className="text-xl" />
                    Forms{" "}
                    <MdKeyboardArrowDown
                      className={`ml-auto text-xl ${
                        activeMenu === "menu2" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </li>

                {/* Sub-menus  */}
                {activeMenu === "menu1" && (
                  <ul className="flex flex-col gap-2.5 pl-10">
                    <li onClick={handleHideSidebar}>
                      <Link
                        to="/form-element"
                        className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white"
                      >
                        Form Elements
                      </Link>
                    </li>

                    <li onClick={handleHideSidebar}>
                      <Link
                        to="/form-layout"
                        className="group relative flex items-center gap-2.5 rounded-md text-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white"
                      >
                        From layout
                      </Link>
                    </li>
                  </ul>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
