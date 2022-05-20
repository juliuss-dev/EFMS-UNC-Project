import React from "react";
import AddVpaModal from "./AddVpaModal";
import VpaActionBtns from "./VpaActionBtns";
import ViewVpaModal from "./ViewVpaModal";

function Vpa() {
  return (
    <div className="home">
      <img className="homeImg" src="/img/HOME1.jpg" alt="" />
      <div className="home-title">
        <h1>Welcome to University of Nueva Caceres</h1>
        <h3>Event Facility Management System</h3>
      </div>
      <div className="button-home">
        <VpaActionBtns />
      </div>
    </div>
  );
}

export default Vpa;
