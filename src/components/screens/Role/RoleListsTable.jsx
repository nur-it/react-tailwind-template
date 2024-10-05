import React from "react";
import { BiLoader } from "react-icons/bi";
import { TiEdit } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import useRoles from "../../../hooks/useRoles";
import Button from "../../ui/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
} from "../../ui/Table";

const RoleListsTable = () => {
  const { roles, isLoading, error } = useRoles();
  const navigate = useNavigate();

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

  return (
    <section className="pt-12">
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow className="text-center">
              <TableCell className="font-bold">Name</TableCell>
              <TableCell className="font-bold">Description</TableCell>
              <TableCell className="font-bold">Permissions</TableCell>
              <TableCell className="text-center font-bold">Action</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles?.map((role) => (
              <TableRow key={role._id} className="text-center">
                <TableCell>{role.name}</TableCell>
                <TableCell>
                  {role.description ? role.description : "N/A"}
                </TableCell>
                <TableCell>{role?.permissions?.length} user</TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      navigate(
                        `/admin/settings/users-permissions/roles/edit/${role._id}`,
                      )
                    }
                    size="small"
                    className="bg-transparent text-black/50"
                  >
                    <TiEdit className="mx-auto text-xl" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default RoleListsTable;
