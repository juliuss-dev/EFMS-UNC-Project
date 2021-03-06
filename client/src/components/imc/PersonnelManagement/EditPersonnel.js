import React, { useEffect, useState } from "react";
import { getPersonnel } from "../../../redux/actions/personnelAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { showSuccessMsg, showErrorMsg } from "../../helpers/message";

function EditPersonnel({match, history}) {
  const [serviceName, setServiceName] = useState("")
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
  // const [status, getStatus] = useState("")
  // const [equipmentData, setEquipmentData] = useState({
  //   name: "",
  //   quantity: "",
  //   description: "",
  //   dateAdded: "",
  // });
  // const { name, quantity, description, dateAdded } = equipmentData;
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  //   const inventoryId = useParams();
  const personnelId = match.params.personnelId;
  //   console.log(inventoryId);
  //   console.log(props);
  // const inventoryId = match.params.inventoryId;

  // useEffect(() => {
  //   const getInventoryEquipments = async () => {
  //     const res = await axios.get(`/api/maintenanceInventory/${inventoryId}`);
  //     setName(res.data);
  //     setQuantity(res.data);
  //     setDescription(res.data);
  //     setDateAdded(res.data);
  //   };
  //   getInventoryEquipments();
  // }, [inventoryId]);
  // useEffect(() => {
  //   const getInventoryEquipments = async () => {
  //     const res = await axios.get(`/api/maintenanceInventory/${inventoryId}`);
  //     setName(res.data);
  //     setQuantity(res.data);
  //     setDescription(res.data);
  //     setDateAdded(res.data);
  //     // setEquipmentData(res.data);
  //   };
  //   getInventoryEquipments();
  // }, [inventoryId]);

  const dispatch = useDispatch();
  const { personnels } = useSelector((state) => state.personnel);

  useEffect(() => {
    if (!personnels) {
      dispatch(getPersonnel(personnelId));
      // dispatch()
    } else {
      setServiceName(personnels.serviceName);
      setName(personnels.name);
      setPosition(personnels.position);
      setDescription(personnels.description);
      setDepartment(personnels.department);
      setStatus(personnels.status);
    }
  }, [dispatch, personnelId, personnels]);

  const handleInventoryEquipmentSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("serviceName", serviceName);
    formData.append("name", name);
    formData.append("position", position);
    formData.append("description", description);
    formData.append("status", status);
    formData.append("department", department);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .put(`/api/personnelServices/edit/${personnelId}`, formData, config)
      .then((res) => {
        history.push("/imc/view");
        console.log("Update equipment Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>{JSON.stringify(personnels)}</div>
      <div className="d-flex flex-row-reverse py-3 pr-5">
        <Link to="/imc/view">
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
              <h5 className="modal-title w-100">Edit Personnel</h5>
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
                <label className="text-dark">Service Name</label>
                  <input
                    className="form-control"
                    name="serviceName"
                    value={serviceName}
                    type="text"
                    onChange={(e) => {
                      setServiceName(e.target.value);
                    }}
                  />

                  <label className="text-dark">Name</label>
                  <input
                    className="form-control"
                    name="name"
                    value={name}
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />

                  <label className="text-dark">Position</label>
                  <input
                    className="form-control"
                    name="position"
                    value={position}
                    type="text"
                    onChange={(e) => {
                      setPosition(e.target.value);
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

export default EditPersonnel