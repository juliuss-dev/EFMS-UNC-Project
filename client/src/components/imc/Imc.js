import React from "react";
// import AddImcModal from "./AddImcModal";
import ImcActionBtns from "./ImcActionBtns";
// import ViewImcModal from "./ViewImcModal";

function Imc() {
  return (
    <div className="home">
      <img className="homeImg" src="/img/HOME1.jpg" alt="" />
      <div className="home-title">
        <h1>Welcome to University of Nueva Caceres</h1>
        <h3>Event Facility Management System</h3>
      </div>
      <div className="button-home">
        <ImcActionBtns />
        {/* <ViewImcModal /> */}
        {/* <AddImcModal /> */}
      </div>
    </div>
  );
}

export default Imc;
