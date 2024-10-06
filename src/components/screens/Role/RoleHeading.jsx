import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { PiPlus } from "react-icons/pi";
import { Link } from "react-router-dom";

const RoleHeading = ({
  backLink = "/",
  backLabel = "Back",
  title = "Role",
  subtitle = "List of roles",
  submitButton,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Link
          to={backLink}
          className="mb-5 inline-flex items-center gap-x-2 text-primary"
        >
          <BsArrowLeft /> {backLabel}
        </Link>

        <h2 className="text-3xl font-bold text-black">{title}</h2>
        {subtitle && <p className="text-sm text-secondary">{subtitle}</p>}
      </div>

      {submitButton && (
        <Link
          to="/admin/settings/users-permissions/roles/new"
          className="inline-flex items-center gap-x-2 rounded-lg bg-primary px-4 py-2.5 text-white"
          type="button"
        >
          <PiPlus /> Add new role
        </Link>
      )}
    </div>
  );
};

export default RoleHeading;
