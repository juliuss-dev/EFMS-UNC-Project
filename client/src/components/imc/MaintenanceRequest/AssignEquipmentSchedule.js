import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { getEquipments } from "../api/inventoryEquipment";
import { showLoading } from "../../helpers/loading";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteEquipment,
  getImcEquipments,
  getAllImcRepair,
} from "../../../redux/actions/imcInventoryAction";
// import { getImcInventoryByFilter } from "../../redux/actions/filterAction";

function AssignEquipmentSchedule() {
  const { imc } = useSelector((state) => state.imc);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getAllImcRepair());
  }, [dispatch]);

  return (
    <div className="container my-2">
      <h1 className="d-flex justify-content-center ">
        Assign Equipment to be repair
      </h1>
      <div className="container border border-info mt-4 rounded">
        <Link to="/imc/MaintenanceRequest/ViewMaintenanceRequest">
          <span className="fal fa-angle-left ml-2 text-white display-7 bg-success p-3 rounded mt-3">
            {" "}
            Back
          </span>
        </Link>
        {/* <div>{JSON.stringify(assignReservationId)}</div> */}
        {/* <div>Personnel ID: {JSON.stringify(personnelId)}</div> */}
        <br />
        <br />

        <label className="text-dark mb-2"> Equipment ID</label>
        <input
          className="form-control mb-5"
          type="text"
          name="personnelId"
          // value={personnelId}
          // onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary mb-3"
          // onClick={handleAssigning}
        >
          Submit
        </button>
      </div>

      <form>
        <div className="modal-body my-0 py-0 mt-5">
          {
            <>
              <table class="table table-hover">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">ID</th>
                    <th scope="col">Model</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date Added</th>
                    <th scope="col">Department</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {imc &&
                    imc.map((imc) => (
                      <tr key={imc._id} imc={imc}>
                        <td>{imc.name}</td>
                        <td>{imc._id}</td>
                        <td>{imc.model}</td>
                        <td>{imc.units}</td>
                        <td>{imc.description}</td>
                        <td>{imc.dateAdded}</td>
                        <td>{imc.department}</td>
                        <td className="text-primary">{imc.status}</td>
                        <td>
                          <Link
                            // to={`/imc/edit/${imc._id}`}
                            className="btn btn-success btn-lg mb-2"
                          >
                            <i className="fas fa-users-medical"></i>
                            {/* Edit */}
                          </Link>

                          {/* <button
                            className="btn btn-danger btn-lg mb-2 ml-1"
                            onClick={() => dispatch(deleteEquipment(imc._id))}
                          >
                            <i className="fas fa-trash"></i>
                          </button> */}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {/* //{" "} */}
            </>
            // )
          }

          {}
        </div>
      </form>
    </div>
  );
}

export default AssignEquipmentSchedule;
