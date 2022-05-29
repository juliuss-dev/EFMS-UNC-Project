import React from "react";
import { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg } from "../../helpers/message";

import { showLoading } from "../../helpers/loading";
import { showSuccessMsg } from "../../helpers/message";

import { Link } from "react-router-dom";
//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { clearMessages } from "../../../redux/actions/messageAction";

import { createMaintenanceSchedule } from "../../../redux/actions/maintenanceScheduleAction";

function AddMaintenanceRequest() {
  // * ----------REDUX GLOBAL STATE PROPERTIES----------
  // get the properties from the state
  const { loading } = useSelector((state) => state.loading);
  const { successMsg, errorMsg } = useSelector((state) => state.messages);

  const dispatch = useDispatch();

  // * ----------COMPONENT STATE PROPERTIES----------
  const [clientSideError, setClientSideError] = useState("");

  const [title, setTitle] = useState("");
  const [dateReported, setDateReported] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("IMC");

  // const [department, setDepartment] = useState("");

  // * ----------EVENT HANDLERS----------

  const handleMessages = (e) => {
    dispatch(clearMessages());
    setClientSideError("");
  };

  const handleInventoryEquipmentSubmit = (e) => {
    e.preventDefault();

    if (isEmpty(title) || isEmpty(dateReported) || isEmpty(description)) {
      setClientSideError("All fields are required");
    } else {
      dispatch(
        createMaintenanceSchedule({
          title,
          dateReported,
          description,
          department,
        })
      );
    }
  };
  return (
    <div onClick={handleMessages}>
      <div className="d-flex flex-row-reverse py-3 pr-5">
        <Link to="/imc/MaintenanceRequest/ViewMaintenanceRequest">
          <span className="fas fa-arrow-left text-white display-7 bg-success p-2 rounded">
            . Schedule
          </span>
        </Link>
      </div>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-light">
          <form onSubmit={handleInventoryEquipmentSubmit}>
            {/* Header */}
            <div className="modal-header bg-success text-white text-center border-0">
              <h5 className="modal-title w-100">Request Maintenance</h5>
            </div>

            {/* Body */}
            <div className="modal-body my-2">
              {clientSideError && showErrorMsg(clientSideError)}
              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}

              {// if all input field has been inputted, show loading animation but remove the input fields
              loading ? (
                <div className="text-center">{showLoading()}</div>
              ) : (
                <>
                  <label className="text-dark">Title</label>
                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <label className="text-dark">Date Reported</label>
                  <input
                    className="form-control"
                    type="datetime-local"
                    name="dateReported"
                    value={dateReported}
                    // onChange={handleInventory}
                    onChange={(e) => setDateReported(e.target.value)}
                  />

                  <label className="text-dark">Department</label>
                  <input
                    className="form-control"
                    type="text"
                    disabled="disabled"
                    name="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  />

                  <div className="form-group">
                    <label className="text-dark">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      rows="5"
                      placeholder="Details of the request...."
                      value={description}
                      // onChange={handleInventory}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="modal-footer border-0 ">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMaintenanceRequest;
