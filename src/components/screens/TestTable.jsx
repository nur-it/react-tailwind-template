import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from "../ui/Table";

const TestTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell className="font-bold">Client</TableCell>
            <TableCell className="font-bold">Amount</TableCell>
            <TableCell className="font-bold">Status</TableCell>
            <TableCell className="font-bold">Client</TableCell>
            <TableCell className="font-bold">Amount</TableCell>
            <TableCell className="font-bold">Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex items-center text-sm">
                <img
                  src="/image-upload.svg"
                  alt="Judith"
                  className="h-10 w-10 rounded-full"
                />
                <span className="ml-2 font-semibold">Judith Ipsum</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>{" "}
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>{" "}
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>{" "}
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>
            <TableCell>
              <span className="inline-flex items-center rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-700">
                Success
              </span>
            </TableCell>
          </TableRow>{" "}
          <TableRow>
            <TableCell>
              <div className="flex items-center text-sm">
                <img
                  src="/image-upload.svg"
                  alt="Judith"
                  className="h-10 w-10 rounded-full"
                />
                <span className="ml-2 font-semibold">Judith Ipsum</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>{" "}
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>{" "}
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>{" "}
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>
            <TableCell>
              <span className="inline-flex items-center rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-700">
                Success
              </span>
            </TableCell>
          </TableRow>{" "}
          <TableRow>
            <TableCell>
              <div className="flex items-center text-sm">
                <img
                  src="/image-upload.svg"
                  alt="Judith"
                  className="h-10 w-10 rounded-full"
                />
                <span className="ml-2 font-semibold">Judith Ipsum</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>{" "}
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>{" "}
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>{" "}
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>
            <TableCell>
              <span className="inline-flex items-center rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-700">
                Success
              </span>
            </TableCell>
          </TableRow>{" "}
          <TableRow>
            <TableCell>
              <div className="flex items-center text-sm">
                <img
                  src="/image-upload.svg"
                  alt="Judith"
                  className="h-10 w-10 rounded-full"
                />
                <span className="ml-2 font-semibold">Judith Ipsum</span>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>{" "}
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>{" "}
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>{" "}
            <TableCell>
              <span className="text-sm">$534.87</span>
            </TableCell>
            <TableCell>
              <span className="inline-flex items-center rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-700">
                Success
              </span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <TableFooter>
        {/* Pagination component or any footer content */}
      </TableFooter>
    </TableContainer>
  );
};

export default TestTable;
