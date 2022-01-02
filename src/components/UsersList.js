import React, { useContext } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import UserItem from "./UserItem";
import UsersContext from "../store/users-context";
import UsersTablePagination from "./UsersTablePagination";

const UsersList = () => {
  const usersContext = useContext(UsersContext);
  const { users } = usersContext;

  return (
    <div>
      <TableContainer component={Paper} sx={{ maxWidth: "75%" }}>
        <Table aria-label="users table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Picture</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Full Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Email
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Gender
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Age
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <UserItem key={user.email} user={user} index={index} />
            ))}
            <TableRow>
              <TableCell align="center" colSpan={6}>
                <UsersTablePagination />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersList;
