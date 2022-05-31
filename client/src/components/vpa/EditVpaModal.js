import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { showSuccessMsg, showErrorMsg } from "../helpers/message";
import { getVpa } from "../../redux/actions/vpaInventoryAction";
function EditVpaModal({ match, history }) {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [units, setUnits] = useState("");
  const [description, setDescription] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const vpaId = match.params.vpaId;

  const dispatch = useDispatch();
  const { vpas } = useSelector((state) => state.vpa);

  useEffect(() => {
    if (!vpas) {
      dispatch(getVpa(vpaId));
      // dispatch()
    } else {
      setName(vpas.name);
      setModel(vpas.model);
      setUnits(vpas.units);
      setDescription(vpas.description);
      setDateAdded(vpas.dateAdded);
      setDepartment(vpas.department);
      setStatus(vpas.status);
    }
  }, [dispatch, vpaId, vpas]);

  const handleInventoryEquipmentSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("model", model);
    formData.append("units", units);
    formData.append("description", description);
    formData.append("dateAdded", dateAdded);
    formData.append("status", status);
    formData.append("department", department);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .put(`/api/imcDepartmentInventory/edit/${vpaId}`, formData, config)
      .then((res) => {
        history.push("/vpa/view");
        console.log("Update equipment Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {/* <div>{JSON.stringify(imcs)}</div> */}
      <div className="d-flex flex-row-reverse py-3 pr-5">
        <Link to="/vpa/view">
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
              <h5 className="modal-title w-100">Edit Equipments</h5>
              {/* <button className="close" data-dismiss="modal">
                <span>
                  <i class="fa-solid fa-xmark"></i>
                </span>
              </button> */}
            </div>

            {/* Body */}
            <div className="modal-body my-2">
              {/* {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
                        {clientSideSuccessMsg && showSuccessMsg(clientSideSuccessMsg)} */}
              {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)}

              {
                // if all input field has been inputted, show loading animation but remove the input fields
                // loading ? (
                //   <div className="text-center">{showLoading()}</div>
                // ) : (
                //else show input fields with error
                <>
                  <label className="text-dark">Equipment name</label>
                  <input
                    className="form-control"
                    name="name"
                    value={name}
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />

                  <label className="text-dark">Model</label>
                  <input
                    className="form-control"
                    name="model"
                    value={model}
                    type="text"
                    onChange={(e) => {
                      setModel(e.target.value);
                    }}
                  />

                  <label className="text-dark">Units</label>
                  <input
                    className="form-control"
                    name="units"
                    value={units}
                    type="number"
                    onChange={(e) => {
                      setUnits(e.target.value);
                    }}
                  />

                  <div className="form-group">
                    <label className="text-dark">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      rows="5"
                      placeholder="Details of the equipment..."
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></textarea>
                  </div>

                  <label className="text-dark">Date Added</label>
                  <input
                    className="form-control"
                    name="dateAdded"
                    value={dateAdded}
                    type="date"
                    onChange={(e) => {
                      setDateAdded(e.target.value);
                    }}
                  />
                  <label className="text-dark">Department</label>
                  <input
                    className="form-control"
                    name="department"
                    value={department}
                    type="text"
                    onChange={(e) => {
                      setDepartment(e.target.value);
                    }}
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

                      {/* <option>Academic</option> */}
                    </select>
                  </div>
                </>
                // )
              }
            </div>

            {/* Footer */}
            <div className="modal-footer border-0 ">
              {/* <button className="btn btn-danger" data-dismiss="modal">
                Cancel
              </button> */}
              <button type="submit" className="btn btn-primary">
                Edit
              </button>

              {/* <button type='submit' className='btn btn-info'>Submit</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditVpaModal;
