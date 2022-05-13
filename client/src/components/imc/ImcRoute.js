import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";
function ImcRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        //if its authenticated to maintenance account type
        isAuthenticated() && isAuthenticated().role === 3 ? (
          <Component {...props} />
        ) : (
          // <Component to ='/maintenance/dashboard'/>
          <Redirect to="/signin" />
        )
      }
    />
  );
}

export default ImcRoute;
