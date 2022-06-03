import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";

function MaintenancesActionBtns() {
  return (
    <div className="mr-5">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary m-2 rounded">
          <Link
            to={"/maintenance/reservation"}
            className="text-white text-decoration-none"
          >
            <p className="fas fa-calendar-star fa-2x"> </p>
            <br />
            Reservation Requests
          </Link>
        </button>
        <button type="button" className="btn btn-success m-2 rounded">
          <Link
            to={"/maintenance/inventory"}
            className="text-white text-decoration-none"
          >
            <p className="fas fa-inventory fa-2x"> </p>
            <br />
            Inventory Management
          </Link>
        </button>
        <button type="button" className="btn btn-danger m-2 rounded">
          <Link
            to={"/maintenance/maintenanceSchedule"}
            className="text-white text-decoration-none"
          >
            <p className="far fa-tools fa-2x"></p>
            <br />
            Maintenance Request
          </Link>
        </button>
        <button type="button" className="btn btn-info m-2 rounded">
          <Link
            to={"/maintenance/user/account"}
            className="text-white text-decoration-none"
          >
            <p className="fad fa-users fa-2x"> </p>
            <br />
            Account Management
          </Link>
        </button>
        <button type="button" className="btn btn-secondary m-2 rounded">
          <Link
            to={`/maintenance/account/${isAuthenticated()._id}`}
            className="text-white text-decoration-none"
          >
            <p className="far fa-user-secret fa-2x"></p>
            <br />
            Maintenance Account
          </Link>
        </button>
      </div>
      {/* <div className="container">
        <div className="row pb-4">
          <div className="col-md-3 my-1 ">
            <button
              className="display-6 btn btn-primary pl-5 pr-5"
              data-toggle="modal"
              data-target="#Reservation"
            >
              <Link
                to={"/maintenance/reservation"}
                className="text-white text-decoration-none"
              >
                <p className="fas fa-calendar-star"> </p>
                <br />
                Reservation <br /> Requests
              </Link>
            </button>
          </div>
          <div className="col-md-3 my-1">
            <button
              className="display-6 btn btn-success pl-4 pr-4"
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
              className="display-6 btn btn-danger pl-4 pr-4"
              data-toggle="modal"
              data-target="#MaintenanceModal"
            >
              <Link
                to={"/maintenance/maintenanceSchedule"}
                className="text-white text-decoration-none"
              >
                <p className="far fa-tools"> </p>
                <br />
                Maintenance Request
              </Link>
            </button>
          </div>
          <div className="col-md-3 my-1">
            <button
              className="display-6 btn btn-warning pl-4 pr-4"
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

          <div className="col-md-3 my-1">
            <button
              className="display-6 btn btn-secondary pl-4 pr-4"
              // data-toggle="modal"
              // data-target="#InventoryModal"
            >
              <Link
                to={`/maintenance/account/${isAuthenticated()._id}`}
                className="text-white text-decoration-none"
              >
                <p className="fas fa-inventory"> </p>
                <br />
                Maintenance Account
              </Link>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default MaintenancesActionBtns;
