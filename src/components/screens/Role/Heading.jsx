import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { PiPlus } from "react-icons/pi";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Link
          to="/"
          className="mb-5 inline-flex items-center gap-x-2 text-primary"
        >
          <BsArrowLeft /> Back
        </Link>

        <h2 className="text-3xl font-bold text-black">Role</h2>
        <p className="text-sm text-secondary">List of roles</p>
      </div>
      <div>
        <Link
          to="add-new-role"
          className="inline-flex items-center gap-x-2 rounded-lg bg-primary px-4 py-2.5 text-white"
          type="button"
        >
          <PiPlus /> Add new role
        </Link>
      </div>
    </div>
  );
};

export default Heading;
