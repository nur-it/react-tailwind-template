import { FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const UserDropDown = ({ handleDropDown }) => {
  // handle click
  const handleClick = (event) => {
    // Prevent the click event from bubbling up to the parent
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleClick}
      className="absolute right-0 mt-4 flex w-64 flex-col rounded-sm border border-stroke bg-white shadow-md"
    >
      <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7">
        <li>
          <Link
            to="/profile"
            onClick={handleDropDown}
            className="flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base text-secondary"
          >
            <FiUser className="text-xl" />
            My Profile
          </Link>
        </li>

        <li>
          <Link
            to="/settings"
            onClick={handleDropDown}
            className="flex items-center gap-3 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base  text-secondary"
          >
            <FiSettings className="text-xl" />
            Account Settings
          </Link>
        </li>
      </ul>

      <button className="flex items-center gap-3 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base  text-secondary">
        <FiLogOut className="text-xl" />
        Log Out
      </button>
    </div>
  );
};

export default UserDropDown;
