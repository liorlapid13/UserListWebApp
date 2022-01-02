import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Stack, Paper, Button } from "@mui/material";
import UserDetailsItem from "../components/UserDetailsItem";
import UserLocationItem from "../components/UserLocationItem";
import UsersContext from "../store/users-context";

const UserDetailsPage = () => {
  const { username } = useParams();
  const usersContext = useContext(UsersContext);
  const [user] = useState(usersContext.findUserByUsername(username));

  return (
    <div>
      <h1>User Details</h1>
      <UserDetailsItem user={user} />
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        justifyContent="flex-start"
        maxWidth="50%"
      >
        <Paper>
          <UserLocationItem location={user.location} />
        </Paper>
        <Paper>
          <Button variant="outlined">
            <Link to="/">Return to All Users</Link>
          </Button>
        </Paper>
      </Stack>
    </div>
  );
};

export default UserDetailsPage;
