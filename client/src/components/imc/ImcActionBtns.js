import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";

function ImcActionBtns() {
  return (
    <div>
      <div className="container">
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
      </div>
    </div>
  );
}

export default ImcActionBtns;
