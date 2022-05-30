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
        <h1>Hello {isAuthenticated().username}</h1>
        <p>VPA</p>
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
