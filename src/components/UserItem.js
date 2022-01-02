import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Link, TableRow, TableCell } from "@mui/material";

const UserItem = ({ user, index }) => {
  const navigate = useNavigate();

  const handleUserDetails = (event) => {
    event.preventDefault();
    navigate(`/${user.login.username}`);
  };

  const handleEmailClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    window.location = `mailto:${user.email}`;
  };

  return (
    <TableRow hover="true" onClick={handleUserDetails}>
      <TableCell>
        <Avatar alt="" src={`${user.picture.medium}`} />
      </TableCell>
      <TableCell align="left">{`${user.name.first.charAt(0)}. ${
        user.name.last
      }`}</TableCell>
      <TableCell align="left">
        <Link component="button" variant="body2" onClick={handleEmailClick}>
          {user.email}
        </Link>
      </TableCell>
      <TableCell align="left">{user.gender}</TableCell>
      <TableCell align="left">{user.dob.age}</TableCell>
    </TableRow>
  );
};

export default UserItem;
