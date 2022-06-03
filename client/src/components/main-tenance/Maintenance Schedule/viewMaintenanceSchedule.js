import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { getEquipments } from "../api/scheduleEquipment";
import { showLoading } from "../../helpers/loading";
import { useDispatch, useSelector } from "react-redux";
import {
  getMSchedule,
  getMSchedules,
  deleteSchedule,
} from "../../../redux/actions/maintenanceScheduleAction";

function ViewMaintenanceSchedule() {
  const { schedule } = useSelector((state) => state.schedule);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMSchedules());
  }, [dispatch]);
  return (
    <div className="container my-2">
      <div className="d-flex flex-row-reverse">
        <Link to="/maintenanceSchedule/add">
          <span className="fas fa-plus-circle text-white display-7 bg-success p-3 rounded">
            Add New Schedule
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
                    <th scope="col">Title</th>
                    <th scope="col">Date Reported</th>
                    <th scope="col">Date Started</th>
                    <th scope="col">Date Finished</th>
                    <th scope="col">Maintenance Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule &&
                    schedule.map((schedule) => (
                      <tr key={schedule._id} schedule={schedule}>
                        <td>{schedule.title}</td>
                        <td>{schedule.dateReported}</td>
                        <td>{schedule.dateStarted}</td>
                        <td>{schedule.dateFinished}</td>
                        <td>{schedule.maintenanceType}</td>
                        <td>{schedule.description}</td>
                        <td className="text-primary">{schedule.status}</td>
                        <td>
                          <Link
                            to={`/maintenance/edit/${schedule._id}`}
                            className="btn btn-success btn-lg mb-2 m-1"
                            // data-toggle="modal"
                            // data-target="#EditEquipmentsModal"
                            // data-dismiss="modal"
                            // key={e._id}
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
                            className="btn btn-danger btn-lg mb-2 ml-1"
                            onClick={() =>
                              dispatch(deleteSchedule(schedule._id))
                            }
                          >
                            <i className="fas fa-trash"></i>
                            {/* Delete */}
                          </button>
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

          {/* <label className="text-dark" key={e._id} value={e._id}>
                     {e.name}, {e.quantity}
                    
                  </label>
                  
                  {(_id, name, quantity, description, dateAdded, status)} */}
        </div>
      </form>
    </div>
  );
}

export default ViewMaintenanceSchedule;
