import React from "react";
import { Helmet } from "react-helmet";
import RoleHeading from "../../components/screens/Role/RoleHeading";
import RoleListsTable from "../../components/screens/Role/RoleListsTable";
import useRoles from "../../hooks/useRoles";

const RoleManagement = () => {

  return (
    <>
      {" "}
      <Helmet>
        <title>Role Management | NurAdmin</title>
      </Helmet>
      <section className="container-fluid p-4 lg:p-10">
        <RoleHeading addRoleLink="/admin/settings/users-permissions/roles/new" />
        <RoleListsTable  />
      </section>
    </>
  );
};

export default RoleManagement;
