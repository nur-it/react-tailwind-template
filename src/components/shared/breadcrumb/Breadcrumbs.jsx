import { Link } from "react-router-dom";

const Breadcrumbs = ({ pageName }) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-[26px] leading-7 font-bold text-black ">
        {pageName}
      </h2>

      <nav>
        <ul className="flex items-center gap-2">
          <li>
            <Link className="font-medium text-secondary" href="index.html">
              Dashboard /
            </Link>
          </li>

          <li className="text-primary">{pageName}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
