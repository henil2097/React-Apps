import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

// react context Consumer has a way to write to consume the context
// it should have a child which receive the context prop and should return the function which consumes that context
// for eg: <AuthContext.Consumer> {(ctx) => {"consume context and return your component here"}}} </AuthContext.Consumer>
// easy way is to use useContext() hook which takes React context and returns the value of context

const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
    // <AuthContext.Consumer>
    //   {(ctx) => {
    //     return (
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={ctx.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
    //     );
    //   }}
    // </AuthContext.Consumer>
  );
};

export default Navigation;
