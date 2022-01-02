import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL, SEED, USERS_PER_PAGE, FIELD_TYPES } from "../constants/index";

const UsersContext = createContext({
  users: [],
  page: 1,
  handlePreviousPage: (event) => {},
  handleNextPage: (event) => {},
  findUserByUsername: (username) => {},
});

export const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  // ? useEffect <-> useLayoutEffect ?
  useEffect(() => {
    const getUsers = async () => {
      try {
        const {
          data: { results: users },
        } = await axios.get(API_URL, {
          params: {
            page,
            results: USERS_PER_PAGE,
            seed: SEED,
            inc: `${FIELD_TYPES.PICTURE},${FIELD_TYPES.NAME},${FIELD_TYPES.EMAIL},${FIELD_TYPES.GENDER},${FIELD_TYPES.DOB},${FIELD_TYPES.LOCATION},${FIELD_TYPES.LOGIN}`,
          },
        });
        setUsers(users);
        localStorage.setItem("users", JSON.stringify(users));
      } catch (error) {
        console.log("Error fetching from API!");
      }
    };
    getUsers();
  }, [page]);

  const handlePreviousPage = (event) => {
    event.preventDefault();
    setPage((previousPage) => previousPage - 1);
  };

  const handleNextPage = (event) => {
    event.preventDefault();
    setPage((previousPage) => previousPage + 1);
  };

  const findUserByUsername = (username) => {
    let getUsers = users;
    if (users.length === 0) {
      getUsers = JSON.parse(localStorage.getItem("users"));
    }
    const user = getUsers.find((user) => user.login.username === username);
    if (!user) {
      console.log("Error, invalid username!");
    }

    return user;
  };

  // return value
  const contextValue = {
    users,
    page,
    handlePreviousPage,
    handleNextPage,
    findUserByUsername,
  };

  return (
    <UsersContext.Provider value={contextValue}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
