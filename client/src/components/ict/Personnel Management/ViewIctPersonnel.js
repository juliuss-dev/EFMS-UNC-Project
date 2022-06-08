import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { getEquipments } from "../api/inventoryEquipment";
import { showLoading } from "../../helpers/loading";
import { useDispatch, useSelector } from "react-redux";
import {
  createPersonnelServices,
  getPersonnel,
  getPersonnels,
  deletePersonnel,
  GetIctPersonnel,
} from "../../../redux/actions/personnelAction";
function ViewIctPersonnel() {
  const { personnel } = useSelector((state) => state.personnel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetIctPersonnel());
  }, [dispatch]);
  return (
    <div className="container my-2">
      <h1 className="d-flex justify-content-center ">View Personnel</h1>
      <div className="d-flex flex-row-reverse">
        <Link to="/ict/PersonnelManagement/add">
          <span className="fas fa-plus-circle text-white display-7 bg-success p-3 rounded">
            Add Personnel
          </span>
        </Link>
      </div>

      <form>
        {/* Header */}

        {/* Body */}
        <div className="modal-body my-2">
          {/* {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
              {clientSideSuccessMsg && showSuccessMsg(clientSideSuccessMsg)} */}
          {/* {errorMsg && showErrorMsg(errorMsg)}
              {successMsg && showSuccessMsg(successMsg)} */}

          {
            // if all input field has been inputted, show loading animation but remove the input fields
            // loading ? (
            //   <div className="text-center">{showLoading()}</div>
            // ) : (
            //else show input fields with error
            <>
              <table class="table table-hover">
                <thead class="thead-dark">
                  <tr>
                    {/* <th scope="col">ID</th> */}
                    <th scope="col">Service Name</th>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Description</th>
                    <th scope="col">Department</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {personnel &&
                    personnel.map((personnel) => (
                      <tr key={personnel._id} personnel={personnel}>
                        {/* <th scope="row"></th> */}
                        {/* <td>{personnel._id}</td> */}
                        <td>{personnel.serviceName}</td>
                        <td>{personnel.name}</td>
                        <td>{personnel.position}</td>
                        <td>{personnel.description}</td>
                        <td>{personnel.department}</td>
                        <td className="text-primary">{personnel.status}</td>
                        <td>
                          <Link
                            to={`/imc/PersonnelManagement/edit/${personnel._id}`}
                            className="btn btn-success btn-lg mb-2"
                          >
                            <i className="fas fa-edit"></i>
                            {/* Edit */}
                          </Link>

                          {/* <EditEquipments
                                  key={e._id}
                                  e={e}
                                  className="btn btn-warning btn-lg mb-2"
                                >
                                  Edit
                                </EditEquipments> */}
                          <button
                            className="btn btn-danger btn-lg mb-2 m-1"
                            onClick={() =>
                              dispatch(deletePersonnel(personnel._id))
                            }
                          >
                            <i className="fas fa-trash mb-2"></i>
                            {/* Delete */}
                          </button>
                          <Link
                            to={`/imc/PersonnelManagement/AssignPersonnel/${personnel._id}`}
                            className="btn btn-primary btn-lg mb-2"
                          >
                            <i className="fas fa-person-sign"></i>
                            {/* Edit */}
                          </Link>
                          <Link
                            to={`/assignPersonnel/personnelSchedule/${personnel._id}`}
                            className="btn btn-info btn-lg mb-2 ml-2"
                          >
                            <i className="fas fa-calendar-check"></i>
                            {/* Edit */}
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {/* //{" "} */}
            </>
            // )

            /* <label className='text-dark'>Equipment name</label>
                      <input className='form-control' name='name' value={name} type="text" onChange={handleInventory}/> */
          }
        </div>
      </form>
    </div>
  );
}

export default ViewIctPersonnel;
