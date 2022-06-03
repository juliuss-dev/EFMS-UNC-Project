import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../helpers/auth";
function ApprovalActionBtns() {
  return (
    <div>
      <button type="button" className="btn btn-primary m-2 rounded">
        <Link to={"/approval/view"} className="text-white text-decoration-none">
          <p className="fal fa-eye fa-2x"> </p>
          <br />
          View Request
        </Link>
      </button>
      <button type="button" className="btn btn-success m-2 rounded">
        <Link
          to={"/approval/calendar"}
          className="text-white text-decoration-none"
        >
          <p className="fal fa-calendar-alt fa-2x"> </p>
          <br />
          View Calendar
        </Link>
      </button>
      <button type="button" className="btn btn-secondary m-2 rounded">
        <Link
          to={`/approval/account/${isAuthenticated()._id}`}
          className="text-white text-decoration-none"
        >
          <p className="fal fa-user-tie fa-2x"> </p>
          <br />
          Approver Account
        </Link>
      </button>
      {/* <div className="container">
        <div className="row pb-4">
          <div className="col-md-3 my-1">
            <button
              className="display-6 btn btn-primary"
              data-toggle="modal"
              data-target="#InventoryModal"
            >
              <Link
                to={"/approval/view"}
                className="text-white text-decoration-none"
              >
                <p className="fas fa-inventory"> </p>
                <br />
                View Request
              </Link>
            </button>
          </div>
          <div className="col-md-3 my-1 ml-5">
            <button
              className="display-6 btn btn-success"
              data-toggle="modal"
              data-target="#InventoryModal"
            >
              <Link
                to={"/approval/calendar"}
                className="text-white text-decoration-none"
              >
                <p className="fas fa-inventory"> </p>
                <br />
                View Calendar
              </Link>
            </button>
          </div>
          <div className="col-md-3 my-1 ml-5">
            <button
              className="display-6 btn btn-secondary"
              data-toggle="modal"
              data-target="#InventoryModal"
            >
              <Link
                to={`/approval/account/${isAuthenticated()._id}`}
                className="text-white text-decoration-none"
              >
                <p className="fas fa-inventory"> </p>
                <br />
                Approver Account
              </Link>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ApprovalActionBtns;
