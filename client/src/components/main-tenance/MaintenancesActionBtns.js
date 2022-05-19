import React from "react";
import { Link } from "react-router-dom";

function MaintenancesActionBtns() {
  return (
    <div>
      <div className="container">
        <div className="row pb-4">
          <div className="col-md-3 my-1 ">
            <button
              className="display-6 btn btn-primary"
              data-toggle="modal"
              data-target="#Reservation"
            >
              <Link
                to={"/maintenance/reservation"}
                className="text-white text-decoration-none"
              >
                <p className="fas fa-calendar-star"> </p>
                <br />
                Reservation Requests
              </Link>
            </button>
          </div>

          <div className="col-md-3 my-1">
            <button
              className="display-6 btn btn-success"
              data-toggle="modal"
              data-target="#InventoryModal"
            >
              <Link
                to={"/maintenance/inventory"}
                className="text-white text-decoration-none"
              >
                <p className="fas fa-inventory"> </p>
                <br />
                Inventory Management
              </Link>
            </button>
          </div>

          <div className="col-md-3 my-1">
            <button
              className="display-6 btn btn-danger"
              data-toggle="modal"
              data-target="#Mainte   nanceModal"
            >
              <p className=" far fa-tools"> </p> <br />
              Maintenance Request
            </button>
          </div>

          <div className="col-md-3 my-1">
            <button
              className="display-6 btn btn-warning"
              // data-toggle="modal"
              // data-target="#InventoryModal"
            >
              <Link
                to={"/maintenance/user/account"}
                className="text-white text-decoration-none"
              >
                <p className="fas fa-inventory"> </p>
                <br />
                Account Management
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaintenancesActionBtns;
