import React from "react";
import MaintenancesActionBtns from "./MaintenancesActionBtns";

function Maintenances() {
  return (
    <div className="home">
      <img className="homeImg" src="/img/HOME1.jpg" alt="UNC" />
      <div className="home-title">
        <h1>Maintenance Dashboard</h1>
        <h3>Event Facility Management System</h3>
      </div>
      <div className="button-home">
        <MaintenancesActionBtns />
      </div>
    </div>
  );
}

export default Maintenances;
