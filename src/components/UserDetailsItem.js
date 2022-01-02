import React from "react";
import { Box, Avatar, Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const UserDetailsItem = ({ user }) => {
  const Item = styled(Paper)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: 26,
    padding: theme.spacing(5),
    textAlign: "center",
    alignSelf: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Box border="solid" sx={{ maxWidth: "50%" }}>
        <Stack
          direction="column"
          spacing={1}
          alignItem="center"
          justifyContent="center"
        >
          <Item>
            <Avatar
              alt=""
              src={`${user.picture.medium}`}
              sx={{ width: 100, height: 100 }}
            />
          </Item>
          <Item>
            Full Name: {`${user.name.first.charAt(0)}. ${user.name.last}`}
          </Item>
          <Item>Email: {user.email}</Item>
          <Item>Gender: {user.gender}</Item>
          <Item>Age: {user.dob.age}</Item>
        </Stack>
      </Box>
    </div>
  );
};

export default UserDetailsItem;
