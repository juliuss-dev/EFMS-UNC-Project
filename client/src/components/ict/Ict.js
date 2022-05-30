import React from "react";
import AddIctModal from "./AddIctModal";
import IctActionBtns from "./IctActionBtns";
import ViewIctModal from "./ViewIctModal";
import { isAuthenticated } from "../helpers/auth";
function Ict() {
  return (
    <div className="home">
      <img className="homeImg" src="/img/HOME1.jpg" alt="" />
      <div className="home-title">
        <h1>Hello {isAuthenticated().username}</h1>
        <p>ICT</p>
      </div>
      <div className="button-home">
        <IctActionBtns />
        {/* <AddIctModal />
        <ViewIctModal /> */}
      </div>
    </div>
  );
}

export default Ict;
