import React from "react";
import MaintenancesActionBtns from "./MaintenancesActionBtns";
import { isAuthenticated } from "../helpers/auth";

function Maintenances() {
  return (
    <div className="home">
      <img className="homeImg" src="/img/HOME1.jpg" alt="" />
      <div className="home-title">
        {/* <h1>Welcome to University of Nueva Caceres</h1>
        <h3>Event Facility Management System</h3> */}
        <h1>Hello {isAuthenticated().username}</h1>
        <p>Maintenance Department</p>
      </div>
      <div className="button-home">
        <MaintenancesActionBtns />
      </div>
    </div>
  );
}

export default Maintenances;
