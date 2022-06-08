import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";

function IctActionBtns() {
  return (
    <div>
      <button type="button" className="btn btn-primary m-2 rounded">
        <Link to={"/ict/add"} className="text-white text-decoration-none">
          <p className="fas fa-inventory"> </p>
          <br />
          Add Equipment
        </Link>
      </button>
      <button type="button" className="btn btn-success m-2 rounded">
        <Link to={"/ict/view"} className="text-white text-decoration-none">
          <p className="fas fa-inventory"> </p>
          <br />
          View Equipment
        </Link>
      </button>
      <button type="button" className="btn btn-success m-2 rounded p-2">
        <Link
          to={"/ict/viewReservationEquipment"}
          className="text-white text-decoration-none"
        >
          {/* <p className="fas fa-inventory"> </p>s */}
          {/* <br /> */}
          View Reservation <br /> Equipment
        </Link>
      </button>
      <button type="button" className="btn btn-danger m-2 rounded">
        <p className=" far fa-tools"> </p> <br />
        Request Maintenance
      </button>
      <button type="button" className="btn btn-info m-2 rounded">
        <Link
          to={"/ict/PersonnelManagement/view"}
          className="text-white text-decoration-none"
        >
          <p className="fas fa-inventory"> </p>s
          <br />
          Personnel Management <br />
        </Link>
      </button>
      <button type="button" className="btn btn-secondary m-2 rounded">
        <Link
          to={`/ict/account/${isAuthenticated()._id}`}
          className="text-white text-decoration-none"
          data-toggle="modal"
          data-target="#UserAccountModal"
        >
          <p className="fas fa-users"> </p> <br /> ICT Account
        </Link>
      </button>
      {/* <div className="container">
        <div className="row pb-4">
          <div className="col-md-3 my-1">
            <button
              className="display-6 btn btn-success"
              data-toggle="modal"
              data-target="#InventoryModal"
            >
              <Link to={"/ict/add"} className="text-white text-decoration-none">
                <p className="fas fa-inventory"> </p>
                <br />
                Add Equipment
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
                to={"/ict/view"}
                className="text-white text-decoration-none"
              >
                <p className="fas fa-inventory"> </p>
                <br />
                View Equipment
              </Link>
            </button>
          </div>

          <div className="col-md-3 my-1">
            <button
              className="display-6 btn btn-danger"
              data-toggle="modal"
              data-target="#MaintenanceModal"
            >
              <p className=" far fa-tools"> </p> <br />
              Request Maintenance
            </button>
          </div>

          <div className="col-md-3 my-1">
            <button
              className="display-6 btn btn-warning"
              data-toggle="modal"
              data-target="#UserAccountModal"
            >
              <p className="fas fa-users"> </p> <br /> Manage Personnel
            </button>
          </div>

          <div className="col-md-3 my-1">
            <Link
              to={`/ict/account/${isAuthenticated()._id}`}
              className="display-6 btn btn-secondary"
              data-toggle="modal"
              data-target="#UserAccountModal"
            >
              <p className="fas fa-users"> </p> <br /> ICT Account
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default IctActionBtns;
