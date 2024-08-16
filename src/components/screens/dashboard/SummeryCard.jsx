
import { FaUserFriends } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoArrowDown } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const SummeryCard = ({ item, index }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-7 py-6 shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
        {(index === 0 && <LuEye className="text-2xl text-primary" />) || // Check if index equals 0
          (index === 1 && ( // Check if index equals 1
            <HiOutlineShoppingCart className="text-2xl text-primary" />
          )) ||
          (index === 2 && ( // Check if index equals 2
            <HiOutlineShoppingBag className="text-2xl text-primary" />
          )) ||
          (index === 3 && ( // Check if index equals 3
            <FaUserFriends className="text-2xl text-primary" />
          ))}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-2xl font-bold text-black">{item.count}</h4>
          <span className="text-sm font-medium text-secondary">
            {item.title}
          </span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium  ${
            item.status === false ? "text-primary" : "text-green-500"
          }`}
        >
          {item.percentage}
          {item.status === false ? (
            <IoArrowDown className="text-lg" />
          ) : (
            <FaArrowUp className="text-lg" />
          )}
        </span>
      </div>
    </div>
  );
};

export default SummeryCard;