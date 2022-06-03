import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";

function VpaActionBtns() {
  return (
    <div>
      <button type="button" className="btn btn-primary m-2 rounded">
        <Link to={"/vpa/add"} className="text-white text-decoration-none">
          <p class="fal fa-dolly-flatbed-alt fa-2x"></p>
          <br />
          Add Equipment
        </Link>
      </button>
      <button type="button" className="btn btn-success m-2 rounded">
        <Link to={"/vpa/view"} className="text-white text-decoration-none">
          <p className="fas fa-inventory"> </p>
          <br />
          View Equipment
        </Link>
      </button>
      <button type="button" className="btn btn-danger m-2 rounded">
        <p className=" far fa-tools"> </p> <br />
        Request Maintenance
      </button>
      <button type="button" className="btn btn-info m-2 rounded">
        <p className="fas fa-users"> </p> <br /> Manage Personnel
      </button>
      <button type="button" className="btn btn-secondary m-2 rounded">
        <Link
          to={`/vpa/account/${isAuthenticated()._id}`}
          className="text-white text-decoration-none"
        >
          <p className="fas fa-users"> </p> <br /> VPA Account
        </Link>
      </button>
      {/* <div className="d-flex flex-row">
        <div className="row pb-4">
          <div className="col-md-3 my-1 p-0">
            <button
              className="display-6 btn btn-success"
              data-toggle="modal"
              data-target="#InventoryModal"
            >
              <Link to={"/vpa/add"} className="text-white text-decoration-none">
                <p className="fas fa-inventory"> </p>
                <br />
                Add Equipment
              </Link>
            </button>
          </div>

          <div className="col-md-3 my-1 mr-0">
            <button
              className="display-6 btn btn-success"
              data-toggle="modal"
              data-target="#InventoryModal"
            >
              <Link
                to={"/vpa/view"}
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
              to={`/vpa/account/${isAuthenticated()._id}`}
              className="display-6 btn btn-secondary"
              data-toggle="modal"
              data-target="#UserAccountModal"
            >
              <p className="fas fa-users"> </p> <br /> VPA Account
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default VpaActionBtns;
