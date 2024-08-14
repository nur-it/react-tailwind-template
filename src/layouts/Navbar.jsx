import { useEffect, useRef, useState } from "react";
import { BsBell, BsChatDots } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
// internal imports
import userImg from "../assets/images/user-01.png";
import MessageDropDown from "../components/shared/dropDown/MessageDropDown";
import NotificationDropDown from "../components/shared/dropDown/NotificationDropDown";
import UserDropDown from "../components/shared/dropDown/UserDropDown";
import { useSidebar } from "../contexts/SidebarContext";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  const liRef = useRef(null);
  const msgLiRef = useRef(null);
  const dropDownLiReft = useRef(null);
  // react hook
  const [message, setMessage] = useState(false);
  const [notify, setNotify] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);

  // handle notify
  const handleNotify = () => {
    setNotify(!notify);
  };

  // handle message
  const handleMessage = () => {
    setMessage(!message);
  };

  // handle drawer
  const handleDropDown = () => {
    setUserDropDown(!userDropDown);
  };

  // handle outside click
  const handleClickOutside = (event) => {
    if (liRef.current && !liRef.current.contains(event.target)) {
      setNotify(false);
    }
    if (msgLiRef.current && !msgLiRef.current.contains(event.target)) {
      setMessage(false);
    }
    if (
      dropDownLiReft.current &&
      !dropDownLiReft.current.contains(event.target)
    ) {
      setUserDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-[999] flex w-full bg-foreGround shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:drop-shadow-none">
      <nav className="flex flex-grow w-full items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <button onClick={toggleSidebar} className="lg:hidden border p-1">
          <RxHamburgerMenu />
        </button>

        <div className="hidden sm:block">
          <form action="" method="POST">
            <div className="relative flex items-center">
              <button className="absolute left-0 top-1/2 -translate-y-1/2">
                <CiSearch className="text-xl" />
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pl-9 pr-4 focus:outline-none xl:w-125 text-sm font-normal"
              />
            </div>
          </form>
        </div>

        {/* header right  */}
        <div className="flex gap-6 items-center">
          <ul className="flex gap-3 items-center">
            <li>{/* <DarkMood /> */}</li>

            <li
              ref={liRef}
              onClick={handleNotify}
              className="cursor-pointer relative flex h-8 bg-backGround w-8 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary"
            >
              <span className="absolute -top-0.5 right-0 z-10 h-2 w-2 rounded-full bg-red-600">
                <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"></span>
              </span>
              <BsBell className="text-xl" />
              {/* Dropdown  */}
              {notify && <NotificationDropDown />}
            </li>
            <li
              ref={msgLiRef}
              onClick={handleMessage}
              className="cursor-pointer relative flex h-8 bg-backGround w-8 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary"
              href="#"
            >
              <span className="absolute -top-0.5 right-0 z-10 h-2 w-2 rounded-full bg-red-600">
                <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75"></span>
              </span>
              <BsChatDots className="text-xl" />
              {/* Dropdown  */}
              {message && <MessageDropDown />}
            </li>
          </ul>

          <div className="lg:w-full relative" ref={dropDownLiReft}>
            <button
              onClick={handleDropDown}
              type="button"
              className="flex items-center gap-3 justify-end focus:outline-none focus:ring-0 focus:border-none"
            >
              <span className="hidden lg:flex items-end flex-col">
                <span className="block text-sm font-medium text-black">
                  Fayshal Rana
                </span>
                <span className="block text-xs font-medium text-secondary">
                  Developer
                </span>
              </span>

              <div className="w-12 h-12 rounded-complete overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={userImg}
                  alt="user image"
                />
              </div>

              <RiArrowDownSLine
                className={`text-xl hidden lg:inline duration-300 ${
                  userDropDown ? "rotate-180" : ""
                }`}
              />
            </button>

            {userDropDown && <UserDropDown handleDropDown={handleDropDown} />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
