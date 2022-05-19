import React from "react";
import { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg } from "../helpers/message";

import { showLoading } from "../helpers/loading";
import { showSuccessMsg } from "../helpers/message";

import { Link } from "react-router-dom";
//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { createIctEquipment } from "../../redux/actions/ictInventoryAction";
import { clearMessages } from "../../redux/actions/messageAction";

function AddIctModal() {
  // * ----------REDUX GLOBAL STATE PROPERTIES----------
  // get the properties from the state
  const { loading } = useSelector((state) => state.loading);
  const { successMsg, errorMsg } = useSelector((state) => state.messages);

  const dispatch = useDispatch();

  // * ----------COMPONENT STATE PROPERTIES----------
  const [clientSideError, setClientSideError] = useState("");

  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [units, setUnits] = useState("");
  const [description, setDescription] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  // const [department, setDepartment] = useState("");

  // * ----------EVENT HANDLERS----------

  const handleMessages = (e) => {
    dispatch(clearMessages());
    setClientSideError("");
  };

  //Handle Change
  // const handleInventory = (e) => {
  //   setEquipmentData({
  //     ...equipmentData,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(equipmentData);
  // };

  //Handle Submit
  const handleInventoryEquipmentSubmit = (e) => {
    e.preventDefault();

    if (
      isEmpty(name) ||
      isEmpty(model) ||
      isEmpty(units) ||
      isEmpty(description) ||
      isEmpty(dateAdded)
      // isEmpty(department)
    ) {
      setClientSideError("All fields are required");
    } else {
      dispatch(
        createIctEquipment({
          name,
          model,
          units,
          description,
          dateAdded,
          // department,
        })
      );
    }
  };
  return (
    <div onClick={handleMessages}>
      <div className="d-flex flex-row-reverse py-3 pr-5">
        <Link to="/ict/dashboard">
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
              <h5 className="modal-title w-100">Add Equipments</h5>
            </div>

            {/* Body */}
            <div className="modal-body my-2">
              {/* {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
                        {clientSideSuccessMsg && showSuccessMsg(clientSideSuccessMsg)} */}
              {clientSideError && showErrorMsg(clientSideError)}
              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}

              {
                // if all input field has been inputted, show loading animation but remove the input fields
                loading ? (
                  <div className="text-center">{showLoading()}</div>
                ) : (
                  //else show input fields with error
                  <>
                    <label className="text-dark">Equipment name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={name}
                      // onChange={handleInventory}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <label className="text-dark">Model</label>
                    <input
                      className="form-control"
                      type="text"
                      name="model"
                      value={model}
                      // onChange={handleInventory}
                      onChange={(e) => setModel(e.target.value)}
                    />

                    <label className="text-dark">Quantity</label>
                    <input
                      className="form-control"
                      type="number"
                      name="units"
                      value={units}
                      // onChange={handleInventory}
                      onChange={(e) => setUnits(e.target.value)}
                    />

                    <div className="form-group">
                      <label className="text-dark">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        rows="5"
                        placeholder="Details of the equipment..."
                        value={description}
                        // onChange={handleInventory}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>

                    <label className="text-dark">Date Added</label>
                    <input
                      className="form-control"
                      type="date"
                      name="dateAdded"
                      value={dateAdded}
                      // onChange={handleInventory}
                      onChange={(e) => setDateAdded(e.target.value)}
                    />
                  </>
                )
              }
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

export default AddIctModal;
