import React from "react";
// import AddImcModal from "./AddImcModal";
import ImcActionBtns from "./ImcActionBtns";
// import ViewImcModal from "./ViewImcModal";
import { isAuthenticated } from "../helpers/auth";

function Imc() {
  return (
    <div className="home">
      <img className="homeImg" src="/img/HOME1.jpg" alt="" />
      <div className="home-title">
        <h1>
          Hello {isAuthenticated().username}
          <p className="fal fa-camera-alt fa-spin fa-fw ml-2"></p>
        </h1>
        <p>IMC Department</p>
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
