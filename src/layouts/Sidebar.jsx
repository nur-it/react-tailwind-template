import { useEffect, useState } from "react";
import { FaTasks } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdAdminPanelSettings, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { useSidebar } from "../contexts/SidebarContext";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const { activeSidebar, toggleSidebar } = useSidebar();

  // Sidebar menu items with icon components and sub-items (if any)
  const menuItems = [
    {
      label: "Dashboard",
      icon: <HiOutlineViewGrid className="text-xl" />,
      path: "/",
    },
    {
      label: "Profile",
      icon: <FiUser className="text-xl" />,
      path: "/profile",
    },

    {
      label: "Components",
      icon: <FaTasks className="text-xl" />,
      submenu: true,
      subItems: [
        { path: "alert", label: "Alert" },
        { path: "badge", label: "Badge" },
        { path: "breadcrumb", label: "Breadcrumb" },
        { path: "button", label: "Button" },
        { path: "checkbox", label: "Checkbox" },
        { path: "date-picker", label: "Date Picker" },
        { path: "input", label: "Input" },
        { path: "textarea", label: "Textarea" },
        { path: "image-upload", label: "Image Upload" },
        { path: "select", label: "Select" },
        { path: "radio", label: "Radio Button" },
        { path: "pagination", label: "Pagination" },
        { path: "table", label: "Table" },
        { path: "toggle", label: "Toggle" },
      ],
    },
    {
      label: "Role Management",
      icon: <MdAdminPanelSettings className="text-xl" />,
      path: "/admin/settings/role-management",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };

  const handleHideSidebar = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };

  return (
    <aside
      className={`z-[9999] h-screen bg-dark duration-300 ease-in-out ${
        isMobile && activeSidebar
          ? "absolute -left-[100%] top-0"
          : `left-0 top-0 flex w-[18.125rem] ${isMobile ? "absolute" : "relative"}`
      }`}
    >
      <div className="no-scrollbar flex w-full flex-col overflow-y-scroll duration-300 ease-linear">
        <div className="sticky top-0 z-50 flex items-center justify-between bg-dark px-6 py-5">
          <a className="inline-flex items-center gap-3" href="/">
            <img src={logo} alt="logo" />
            <span className="text-[24px] font-semibold text-white">
              NurAdmin
            </span>
          </a>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <FaArrowLeftLong className="text-secondary" />
          </button>
        </div>

        <div>
          <nav className="flex flex-col gap-3 px-4 pb-4 pt-2 lg:px-6">
            <h3 className="mb-4 ml-4 text-sm font-medium uppercase text-secondary">
              Menu
            </h3>
            <ul className="flex flex-col gap-1.5">
              {menuItems.map((menu, index) => (
                <li
                  key={index}
                  onClick={
                    menu.submenu
                      ? () => handleMenuClick(menu.label)
                      : handleHideSidebar
                  }
                >
                  {!menu.submenu ? (
                    <Link
                      to={menu.path}
                      className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover"
                    >
                      {menu.icon}
                      {menu.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        type="button"
                        onClick={() => handleMenuClick(menu.label)}
                        className={`group relative flex w-full items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-menuHover ${
                          activeMenu === menu.label ? "bg-menuHover" : ""
                        }`}
                      >
                        {menu.icon}
                        {menu.label}
                        <MdKeyboardArrowDown
                          className={`ml-auto text-xl ${activeMenu === menu.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {activeMenu === menu.label && (
                        <ul className="flex flex-col gap-2.5 pl-10">
                          {menu.subItems.map((subItem, subIndex) => (
                            <li key={subIndex} onClick={handleHideSidebar}>
                              <Link
                                to={`/components/${subItem.path}`}
                                className="text-md group relative flex items-center gap-2.5 rounded-md font-normal text-subMenu/50 duration-300 ease-in-out hover:text-white"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
