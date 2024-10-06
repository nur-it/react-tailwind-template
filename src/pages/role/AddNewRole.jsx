import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { BiLoader } from "react-icons/bi";
import { PiPlus } from "react-icons/pi";
import RoleCreate from "../../components/screens/Role/RoleCreate";
import RoleHeading from "../../components/screens/Role/RoleHeading";
import Button from "../../components/ui/Button";
import useRoles from "../../hooks/useRoles";

const AddNewRole = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const { isLoading, handleCreateRole, success, error } = useRoles();

  if (isLoading) {
    return (
      <div className="flex min-h-96 items-center justify-center">
        <BiLoader
          calcMode="animation"
          className="animate-spin text-2xl text-primary"
        />
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    handleCreateRole({ name, description, permissions: selectedPermissions });
  };

  return (
    <>
      <Helmet>
        <title>Add New Role | NurAdmin</title>
      </Helmet>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="container-fluid p-4 lg:p-10"
      >
        <div className="flex items-center justify-between gap-2">
          <RoleHeading
            backLink="/admin/settings/role-management"
            title="Create a role"
            subtitle="Define the rights given to the role"
            submitButton={false}
          />
          <Button
            size="small"
            loading={isLoading}
            disabled={isLoading || !name || !description}
            type="submit"
            className={`inline-flex gap-2 rounded-lg ${name && description ? "bg-primary" : "bg-primary/60"} `}
          >
            <PiPlus color="#fff" /> Save
          </Button>
        </div>
        <RoleCreate
          setSelectedPermissions={setSelectedPermissions}
          name={name}
          description={description}
          setName={setName}
          setDescription={setDescription}
        />
      </form>
    </>
  );
};

export default AddNewRole;
