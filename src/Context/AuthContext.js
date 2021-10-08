import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export const AuthContext = createContext();

export const AuthController = (props) => {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) getUserWithToken();
  }, []);

  const getUserWithToken = () => {
    axios
      .get("http://localhost:3002/users/me", {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUser(res.data.user[0]);
        setIsLoggedIn(true);
      })
      .catch((err) => console.log("err", err));
  };

  const login = (loginData) => {
    axios.post("http://localhost:3002/auth/login", loginData).then((res) => {
      localStorage.setItem("token", res.headers["auth-token"]);
      getUserWithToken();
    });
  };

  const register = (registerData) => {
    axios
      .post("http://localhost:3002/auth/register", registerData)
      .then((res) => {
        localStorage.setItem("token", res.headers["auth-token"]);
        getUserWithToken();
      })
      .catch((err) => console.log("err", err, err.response));
  };

  const logout = (logoutdata) => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    logoutdata.preventDefault();

    history.push(`/`);
  };

  const value = {
    login,
    user,
    isLoggedIn,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
