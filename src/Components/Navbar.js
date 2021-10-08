import { NavLink, useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { Button } from "@mui/material";
import {
  AppBar,
  Avatar,
  createTheme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn, logout, user } = useAuthContext();
  let history = useHistory();

  useEffect(() => {}, [localStorage]);

  const logged = (
    <div className="navbar">
      <NavLink className="navlink" to="/">
        HomePage
      </NavLink>
      <NavLink className="navlink" to="/pokemon">
        Pokedex
      </NavLink>
      <div className="username">
        {isLoggedIn && <Avatar id="avatar">{user.name.slice(0, 1)}</Avatar>}
        {isLoggedIn && (
          <div className="username">{isLoggedIn && user.name}</div>
        )}
        {isLoggedIn && (
          <Button id="logout" onClick={logout}>
            logOut
          </Button>
        )}
      </div>
    </div>
  );

  const notLogged = (
    <div className="navbar">
      <NavLink className="navlink" to="/">
        HomePage
      </NavLink>
      <NavLink className="navlink" to="/pokemon">
        Pokedex
      </NavLink>
      <NavLink className="navlink" to="/pokemon/signIn">
        SignIn
      </NavLink>
    </div>
  );

  return <div>{isLoggedIn ? logged : notLogged}</div>;
};

export default NavBar;
