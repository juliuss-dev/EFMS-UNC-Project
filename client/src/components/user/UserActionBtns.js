import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../helpers/auth";
function UserActionBtns() {
  const { users } = useSelector((state) => state.user);

  return (
    <div>
      <button type="button" className="btn btn-primary m-2 rounded">
        <Link
          to={"/user/add/reservation"}
          className="text-white text-decoration-none"
        >
          <p className="fal fa-calendar-check fa-2x"> </p>
          <br />
          Add Reservation
        </Link>
      </button>
      <button type="button" className="btn btn-success m-2 rounded">
        <Link
          to={"/user/view/reservation/"}
          className="text-white text-decoration-none"
        >
          <p className="fal fa-inventory fa-2x"> </p>
          <br />
          View Reservation
        </Link>
      </button>
      <button type="button" className="btn btn-secondary m-2 rounded">
        <Link
          to={`/user/account/${isAuthenticated()._id}`}
          // to={"/user/account/"}
          className="text-white text-decoration-none"
        >
          <p className="fal fa-user-tie fa-2x"> </p>
          <br />
          Account Information
        </Link>
      </button>
      {/* <div className="container">
        <div className="row pb-4">
          <div className="col-md-3 my-1">
            <button
              className="display-6 btn btn-danger"
              data-toggle="modal"
              data-target="#InventoryModal"
            >
              <Link
                to={"/user/add/reservation"}
                className="text-white text-decoration-none"
              >
                <p className="fas fa-inventory"> </p>
                <br />
                Add Reservation
              </Link>
            </button>
          </div>

          <div className="col-md-3 my-1 ml-5 pd-5">
            <button
              className="display-6 btn btn-success"
              data-toggle="modal"
              data-target="#InventoryModal"
            >
              <Link
                to={"/user/view/reservation/"}
                className="text-white text-decoration-none"
              >
                <p className="fas fa-inventory"> </p>
                <br />
                View Reservation
              </Link>
            </button>
          </div>

          <div className="col-md-3 my-1 ml-5 pd-5">
            <button
              className="display-6 btn btn-secondary"
              // data-toggle="modal"
              // data-target="#InventoryModal"
            >
              <Link
                to={`/user/account/${isAuthenticated()._id}`}
                // to={"/user/account/"}
                className="text-white text-decoration-none"
              >
                <p className="fas fa-inventory"> </p>
                <br />
                Account Information
              </Link>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default UserActionBtns;
