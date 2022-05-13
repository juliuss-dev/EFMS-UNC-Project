import React from "react";
import AddIctModal from "./AddIctModal";
import IctActionBtns from "./IctActionBtns";
import ViewIctModal from "./ViewIctModal";

function Ict() {
  return (
    <div className="home">
      <img className="homeImg" src="/img/HOME1.jpg" alt="" />
      <div className="home-title">
        <h1>Welcome to University of Nueva Caceres</h1>
        <h3>Event Facility Management System</h3>
      </div>
      <div className="button-home">
        <IctActionBtns />
        <AddIctModal />
        <ViewIctModal />
      </div>
    </div>
  );
}

export default Ict;
