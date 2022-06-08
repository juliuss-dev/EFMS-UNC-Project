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
import { createPersonnelServices } from "../../../redux/actions/personnelAction";

function AddPersonnel() {
  // * ----------REDUX GLOBAL STATE PROPERTIES----------
  // get the properties from the state
  const { loading } = useSelector((state) => state.loading);
  const { successMsg, errorMsg } = useSelector((state) => state.messages);

  const dispatch = useDispatch();

  // * ----------COMPONENT STATE PROPERTIES----------
  const [clientSideError, setClientSideError] = useState("");

  const [serviceName, setServiceName] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [department, setDepartment] = useState("IMC");

  // * ----------EVENT HANDLERS----------

  const handleMessages = (e) => {
    dispatch(clearMessages());
    setClientSideError("");
  };

  const handleInventoryEquipmentSubmit = (e) => {
    e.preventDefault();

    if (
      isEmpty(serviceName) ||
      isEmpty(name) ||
      isEmpty(position) ||
      isEmpty(description) ||
      isEmpty(status) ||
      isEmpty(department)
    ) {
      setClientSideError("All fields are required");
    } else {
      dispatch(
        createPersonnelServices({
          serviceName,
          name,
          position,
          description,
          status,
          department,
        })
      );
    }
  };
  return (
    <div onClick={handleMessages}>
      <div className="d-flex flex-row-reverse py-3 pr-5">
        <Link to="/imc/PersonnelManagement/ViewPersonnel">
          <span className="fas fa-arrow-left text-white display-7 bg-success p-2 rounded">
            . Back to Inventory
          </span>
        </Link>
      </div>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-light">
          <form onSubmit={handleInventoryEquipmentSubmit}>
            {/* Header */}
            <div className="modal-header bg-success text-white text-center border-0">
              <h5 className="modal-title w-100">Add Personnel</h5>
            </div>

            {/* Body */}
            <div className="modal-body my-2">
              {/* {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
                        {clientSideSuccessMsg && showSuccessMsg(clientSideSuccessMsg)} */}
              {clientSideError && showErrorMsg(clientSideError)}
              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}

              {// if all input field has been inputted, show loading animation but remove the input fields
              loading ? (
                <div className="text-center">{showLoading()}</div>
              ) : (
                //else show input fields with error
                <>
                  <label className="text-dark"> Service Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="serviceName"
                    value={serviceName}
                    // onChange={handleInventory}
                    onChange={(e) => setServiceName(e.target.value)}
                  />

                  <label className="text-dark">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={name}
                    // onChange={handleInventory}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <label className="text-dark">Position</label>
                  <input
                    className="form-control"
                    type="text"
                    name="postion"
                    value={position}
                    // onChange={handleInventory}
                    onChange={(e) => setPosition(e.target.value)}
                  />

                  <div className="form-group">
                    <label className="text-dark">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      rows="5"
                      placeholder="Details of the Personnel..."
                      value={description}
                      // onChange={handleInventory}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>

                  <label className="text-dark">Department</label>
                  <input
                    className="form-control"
                    type="text"
                    disabled="disabled"
                    name="department"
                    value={department}
                    // onChange={handleInventory}
                    onChange={(e) => setDepartment(e.target.value)}
                  />

                  <div className="form-group">
                    <label className="font-weight-bold">Status</label>
                    <select
                      name="status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="custom-select mr-sm-2 text-white bg-success"
                    >
                      <option>{status}</option>
                      <option>Available</option>
                      <option>Not Available</option>
                      <option>To be repair</option>

                      {/* <option>Academic</option> */}
                    </select>
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="modal-footer border-0 ">
              {/* <button className="btn btn-danger" data-dismiss="modal">
                Cancel
              </button> */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>

              {/* <button type='submit' className='btn btn-info'>Submit</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPersonnel;
