import { FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const UserDropDown = ({ handleDropDown }) => {
  const { signOut } = useAuth(); // Get the signOut function from useAuth

  // handle click to stop propagation
  const handleClick = (event) => {
    event.stopPropagation();
  };

  // handle logout
  const handleLogout = () => {
    signOut(); // Call the signOut function to clear user data and cookies
    handleDropDown(); // Optionally close the dropdown
  };

  return (
    <div
      onClick={handleClick}
      className="border-stroke absolute right-0 mt-4 flex w-64 flex-col rounded-sm border bg-white shadow-md"
    >
      <ul className="border-stroke flex flex-col gap-5 border-b px-6 py-7">
        <li>
          <Link
            to="/profile"
            onClick={handleDropDown}
            className="flex items-center gap-3 text-sm font-medium text-secondary duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            <FiUser className="text-xl" />
            My Profile
          </Link>
        </li>

        <li>
          <Link
            to="/settings"
            onClick={handleDropDown}
            className="flex items-center gap-3 text-sm font-medium text-secondary duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            <FiSettings className="text-xl" />
            Account Settings
          </Link>
        </li>
      </ul>

      <button
        onClick={handleLogout} // Attach the logout handler
        className="flex items-center gap-3 px-6 py-4 text-sm font-medium text-secondary duration-300 ease-in-out hover:text-primary lg:text-base"
      >
        <FiLogOut className="text-xl" />
        Log Out
      </button>
    </div>
  );
};

export default UserDropDown;
