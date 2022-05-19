import React from "react";
import { Link } from "react-router-dom";

function IctActionBtns() {
  return (
    <div>
      <div className="container">
        <div className="row pb-3">
          <div className="col-md-4 my-1">
            <button
              className=" p-0 display-6 btn btn-danger"
              // data-toggle="modal"
              // data-target="#addIctModal"
            >
              <Link to={"/ict/add"} className="text-white text-decoration-none">
                <p className="fas fa-inventory"> </p>
                <br />
                Add Equipment
              </Link>
            </button>
          </div>

          <div className="col-md-6 my-1">
            <button
              className=" p-0 display-6 btn btn-success"
              data-toggle="modal"
              data-target="#viewIctModal"
            >
              <p className="p-0 m-0 fas fa-eye"> </p> <br /> View ICT Equipments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IctActionBtns;
