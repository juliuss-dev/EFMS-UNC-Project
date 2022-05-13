import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";
function ApprovalRoute({ component: Component, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          //create a condition if the user is authenticated
          //check if it is authenticated and the role is admin
          isAuthenticated() && isAuthenticated().role === 2 ? (
            //then display the custom Component
            //creat a compoent and spread out the props and make it available to the custom Component
            <Component {...props} />
          ) : (
            //other wise redirect in signin page
            <Redirect to="/signin" />
          )
        }
        // after this create a route in App.js
      />
    </div>
  );
}

export default ApprovalRoute;
