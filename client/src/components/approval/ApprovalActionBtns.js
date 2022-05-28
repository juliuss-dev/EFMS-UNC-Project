import React from "react";
import { Link } from "react-router-dom";
function ApprovalActionBtns() {
  return (
    <div>
      <div className="container">
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
                View Via Calendar
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApprovalActionBtns;
