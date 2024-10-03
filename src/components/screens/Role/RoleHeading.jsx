import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { PiPlus } from "react-icons/pi";
import { Link } from "react-router-dom";
import CheckMark from "../../shared/svg/CheckMark";
import Button from "../../ui/Button";

const RoleHeading = ({
  backLink = "/",
  showBackLink = true,
  backLabel = "Back",
  title = "Role",
  subtitle = "List of roles",
  showAddRoleButton = true,
  isIcon = true,
  addRoleLabel = "Add new role",
  addRoleLink,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        {showBackLink && (
          <Link
            to={backLink}
            className="mb-5 inline-flex items-center gap-x-2 text-primary"
          >
            <BsArrowLeft /> {backLabel}
          </Link>
        )}
        <h2 className="text-3xl font-bold text-black">{title}</h2>
        {subtitle && <p className="text-sm text-secondary">{subtitle}</p>}
      </div>
      {showAddRoleButton &&
        (!addRoleLink ? (
          <Button
            size="small"
            className="inline-flex items-center gap-x-2 rounded-lg bg-primary/75 px-4 py-2.5 text-white transition duration-300 ease-in-out hover:bg-primary"
            type="button"
          >
            {!isIcon ? <CheckMark /> : <PiPlus />} {addRoleLabel}
          </Button>
        ) : (
          <Link
            to="/admin/settings/users-permissions/roles/new"
            className="inline-flex items-center gap-x-2 rounded-lg bg-primary px-4 py-2.5 text-white"
            type="button"
          >
            {!isIcon ? <CheckMark /> : <PiPlus />} {addRoleLabel}
          </Link>
        ))}
    </div>
  );
};

export default RoleHeading;
