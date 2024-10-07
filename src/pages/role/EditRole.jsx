import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BiLoader } from "react-icons/bi";
import { PiPlus } from "react-icons/pi";
import { useParams } from "react-router-dom";
import EditRolePermissions from "../../components/screens/Role/EditRole";
import RoleHeading from "../../components/screens/Role/RoleHeading";
import Button from "../../components/ui/Button";
import useRoles from "../../hooks/useRoles";

const EditRole = () => {
  const { id } = useParams(); // Destructure id from params
  const { roles, isLoading, error, handleUpdateRole } = useRoles(); // Use the custom hook

  const roleToEdit = roles.find((role) => role._id === id); // Find the role by ID

  // States for storing current form values
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  // States for storing the original (initial) values
  const [initialName, setInitialName] = useState("");
  const [initialDescription, setInitialDescription] = useState("");
  const [initialPermissions, setInitialPermissions] = useState([]);

  // Set form values and store the initial values when roleToEdit is available
  useEffect(() => {
    if (roleToEdit) {
      setName(roleToEdit.name || "");
      setDescription(roleToEdit.description || "");
      setSelectedPermissions(roleToEdit.permissions || []);

      // Store the initial values for comparison later
      setInitialName(roleToEdit.name || "");
      setInitialDescription(roleToEdit.description || "");
      setInitialPermissions(roleToEdit.permissions || []);
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
  if (!roleToEdit) return <div>Role not found</div>;

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRole = {};

    // Compare each field with its initial value and only include it if it has changed
    if (name !== initialName) updatedRole.name = name;
    if (description !== initialDescription)
      updatedRole.description = description;

    // If selectedPermissions has changed, extract just the _id values
    if (
      JSON.stringify(selectedPermissions) !== JSON.stringify(initialPermissions)
    ) {
      updatedRole.permissions = selectedPermissions.map((perm) => perm._id); // Map to an array of _id values
    }

    // Call the update function only with the changed fields
    if (Object.keys(updatedRole).length > 0) {
      handleUpdateRole(updatedRole, id);
    } else {
      console.log("No fields have changed.");
    }
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
        <EditRolePermissions
          setSelectedPermissions={setSelectedPermissions}
          selectedPermissions={selectedPermissions}
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
