import React, { useContext } from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import AuthContext from "../store/auth-context";

const MainHeader = (props) => {
  const { setIsLoggedIn } = useContext(AuthContext);

  const logoutHandler = () => {
    localStorage.removeItem("userLogin");
    setIsLoggedIn(false);
    localStorage.clear();
  };

  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={logoutHandler} />
    </header>
  );
};

export default MainHeader;
