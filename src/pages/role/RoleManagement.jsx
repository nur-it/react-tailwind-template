import React from "react";
import { Helmet } from "react-helmet";
import Heading from "../../components/screens/Role/Heading";
import RoleListsTable from "../../components/screens/Role/RoleListsTable";

const RoleManagement = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Role Management | NurAdmin</title>
      </Helmet>
      <section className="container-fluid p-4 lg:p-10">
        <Heading />
        <RoleListsTable />
      </section>
    </>
  );
};

export default RoleManagement;
