import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function UserActionBtns() {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <div className="container">
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
              className="display-6 btn btn-warning"
              // data-toggle="modal"
              // data-target="#InventoryModal"
            >
              <Link
                to={`/user/account/${user._id}`}
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
      </div>
    </div>
  );
}

export default UserActionBtns;
