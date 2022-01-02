import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { UsersContextProvider } from "./store/users-context";

ReactDOM.render(
  <UsersContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UsersContextProvider>,
  document.getElementById("root")
);
