import React from "react";
import { TiEdit } from "react-icons/ti";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
} from "../../ui/Table";

const RoleListsTable = () => {
  return (
    <section className="pt-12">
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow className="text-center">
              <TableCell className="font-bold">Name</TableCell>
              <TableCell className="font-bold">Description</TableCell>
              <TableCell className="font-bold">Users</TableCell>
              <TableCell className="text-center font-bold">Action</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="text-center">
              <TableCell>role name</TableCell>
              <TableCell>role description</TableCell>
              <TableCell>role hold users</TableCell>
              <TableCell>
                <TiEdit className="mx-auto text-xl" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default RoleListsTable;
