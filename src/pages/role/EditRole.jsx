import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BiLoader } from "react-icons/bi";
import { PiPlus } from "react-icons/pi";
import { useParams } from "react-router-dom";
import RoleCreate from "../../components/screens/Role/RoleCreate";
import RoleHeading from "../../components/screens/Role/RoleHeading";
import Button from "../../components/ui/Button";
import useRoles from "../../hooks/useRoles";

const EditRole = () => {
  const { id } = useParams(); // Destructure id from params

  const { roles, isLoading, error, handleUpdateRole } = useRoles(); // Use the custom hook

  // Find the role by ID
  const roleToEdit = roles.find((role) => role._id === id); // Adjust property name based on your role object structure

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  useEffect(() => {
    if (roleToEdit) {
      setName(roleToEdit.name || "");
      setDescription(roleToEdit.description || "");
      setSelectedPermissions(roleToEdit.permissions || []);
    }
  }, [roleToEdit]); // Run this effect when roleToEdit changes

  // Handle loading and error states
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
  if (error) return <div>Error: {error}</div>;

  // If the role is not found, handle that case
  if (!roleToEdit) return <div>Role not found</div>;

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRole = {
      description,
    };

    handleUpdateRole(updatedRole, id);
  };

  return (
    <>
      <Helmet>
        <title>Edit Role | NurAdmin</title>
      </Helmet>
      <form onSubmit={handleSubmit} className="container-fluid p-4 lg:p-10">
        <div className="flex items-center justify-between gap-2">
          <RoleHeading
            backLink="/admin/settings/role-management"
            title="Edit a role"
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

export default EditRole;
