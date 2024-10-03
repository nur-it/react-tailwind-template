import React from "react";
import { Helmet } from "react-helmet";
import RoleCreate from "../../components/screens/Role/RoleCreate";
import RoleHeading from "../../components/screens/Role/RoleHeading";

const AddNewRole = () => {
  return (
    <>
      <Helmet>
        <title>Add New Role | NurAdmin</title>
      </Helmet>
      <section className="container-fluid p-4 lg:p-10">
        <RoleHeading
          backLink="/admin/settings/role-management"
          title="Create a role"
          subtitle="Define the rights given to the role"
          showAddRoleButton={true}
          addRoleLabel="Save"
          isIcon={false}
        />
        <RoleCreate />
      </section>
    </>
  );
};

export default AddNewRole;
