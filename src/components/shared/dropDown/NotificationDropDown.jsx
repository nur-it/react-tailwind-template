import { Link } from "react-router-dom";

const NotificationDropDown = () => {
  // handle click
  const handleClick = (event) => {
    // Prevent the click event from bubbling up to the parent
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleClick}
      className="select-none absolute top-8 -right-28 lg:-right-24 mt-2.5 flex h-96 w-72 flex-col rounded-sm border border-stroke bg-white shadow-md md:right-0 md:w-80"
    >
      <div className="px-4 py-3">
        <Link
          to="#"
          className="text-sm font-medium text-[0.875rem] text-secondary"
        >
          Notification
        </Link>
      </div>

      <ul className="flex h-auto flex-col overflow-y-auto">
        <li>
          <a
            className="flex flex-col gap-3 border-t border-stroke px-4 py-3 hover:bg-gray-100"
            href="#"
          >
            <p className="text-sm text-secondary">
              <span className="text-black ">
                Edit your information in a swipe{" "}
              </span>
              Sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim.
            </p>

            <p className="text-xs text-secondary">12 May, 2025</p>
          </a>
        </li>

        <li>
          <a
            className="flex flex-col gap-2 border-t border-stroke px-4 py-3 hover:bg-gray-100"
            href="#"
          >
            <p className="text-sm text-secondary">
              <span className="text-black">It is a long established fact</span>
              that a reader will be distracted by the readable.
            </p>

            <p className="text-xs text-secondary">24 Feb, 2025</p>
          </a>
        </li>

        <li>
          <a
            className="flex flex-col gap-2 border-t border-stroke px-4 py-3 hover:bg-gray-100"
            href="#"
          >
            <p className="text-sm text-secondary">
              <span className="text-black">There are many variations</span>
              of passages of Lorem Ipsum available, but the majority have
              suffered
            </p>

            <p className="text-xs text-secondary">04 Jan, 2025</p>
          </a>
        </li>

        <li>
          <a
            className="flex flex-col gap-2 border-t border-stroke px-4 py-3 hover:bg-gray-100"
            href="#"
          >
            <p className="text-sm text-secondary">
              <span className="text-black">There are many variations</span>
              of passages of Lorem Ipsum available, but the majority have
              suffered
            </p>

            <p className="text-xs text-secondary">01 Dec, 2024</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NotificationDropDown;
