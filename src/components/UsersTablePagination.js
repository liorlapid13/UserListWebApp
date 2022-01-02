import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { IconButton, Box } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import UsersContext from "../store/users-context";

const UsersTablePagination = () => {
  const theme = useTheme();
  const usersContext = useContext(UsersContext);
  const { page } = usersContext;

  return (
    <div>
      <IconButton
        onClick={usersContext.handlePreviousPage}
        disabled={page === 1}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <Box component="span">{page}</Box>
      <IconButton onClick={usersContext.handleNextPage} aria-label="next page">
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </div>
  );
};

export default UsersTablePagination;
