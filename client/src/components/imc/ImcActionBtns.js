import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";

function ImcActionBtns() {
  return (
    <div>
      <button type="button" className="btn btn-primary m-2 rounded">
        <Link to={"/imc/add"} className="text-white text-decoration-none">
          <p class="fal fa-dolly-flatbed-alt fa-2x"></p>
          <br />
          Add Equipment
        </Link>
      </button>
      <button type="button" className="btn btn-success m-2 rounded">
        <Link to={"/imc/view"} className="text-white text-decoration-none">
          <p className="fal fa-inventory fa-2x"> </p>
          <br />
          View Equipment
        </Link>
      </button>
      <button type="button" className="btn btn-danger m-2 rounded">
        <Link
          to={"/imc/MaintenanceRequest/ViewMaintenanceRequest"}
          className="text-white text-decoration-none"
        >
          <p className="fal fa-tools fa-2x"></p>
          <br />
          Maintenance Request
        </Link>
      </button>
      <button type="button" className="btn btn-info m-2 rounded">
        <Link
          to={"/imc/PersonnelManagement/ViewPersonnel"}
          className="text-white text-decoration-none"
        >
          <p className="fal fa-users fa-2x"> </p>
          <br />
          Manage Personnel
        </Link>
      </button>
      <button type="button" className="btn btn-secondary m-2 rounded">
        <Link
          to={`/imc/account/${isAuthenticated()._id}`}
          className="text-white text-decoration-none"
        >
          <p className="fal fa-user-tie fa-2x"> </p>
          <br />
          IMC Account
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
              <Link to={"/imc/add"} className="text-white text-decoration-none">
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
                to={"/imc/view"}
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
              <Link
                to={"/imc/MaintenanceRequest/ViewMaintenanceRequest"}
                className="text-white text-decoration-none"
              >
                <p className="fas fa-inventory"> </p>
                <br />
                Maintenance Request
              </Link>
            </button>
          </div>

          <div className="col-md-3 my-1">
            <button
              className="display-6 btn btn-primary"
              data-toggle="modal"
              data-target="#UserAccountModal"
            >
              <Link
                to={"/imc/PersonnelManagement/ViewPersonnel"}
                className="text-white text-decoration-none"
              >
                <p className="fas fa-users"> </p>
                <br />
                Manage Personnel
              </Link>
            </button>
          </div>

          <div className="col-md-3 my-1">
            <button
              className="display-6 btn btn-secondary"
              data-toggle="modal"
              data-target="#UserAccountModal"
            >
              <Link
                to={`/imc/account/${isAuthenticated()._id}`}
                className="text-white text-decoration-none"
              >
                <p className="fas fa-users"> </p>
                <br />
                IMC Account
              </Link>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ImcActionBtns;
