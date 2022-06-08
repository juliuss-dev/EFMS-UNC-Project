import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
      <h1 className="d-flex justify-content-center ">Maintenance Requests</h1>
      <div className="d-flex flex-row-reverse">
        <Link to="/imc/MaintenanceRequest/AddMaintenanceRequest">
          <span className="fas fa-plus-circle text-white display-7 bg-success p-3 rounded">
            Add New Schedule
          </span>
        </Link>
      </div>

      <form>
        <div className="modal-body my-2">
          {
            <>
              <table class="table table-hover">
                <thead class="thead-dark">
                  <tr>
                    {/* <th scope="col">ID</th> */}
                    <th scope="col">Title</th>
                    <th scope="col">Date Reported</th>

                    <th scope="col">Description</th>
                    <th scope="col">Department</th>
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
                        <td>{schedule.description}</td>
                        <td>{schedule.department}</td>
                        <td className="text-primary">{schedule.status}</td>
                        <td>
                          <Link
                            to={`/maintenance/edit/${schedule._id}`}
                            className="btn btn-success btn-lg mb-2 m-1"
                          >
                            <i className="fas fa-edit"></i>
                          </Link>

                          <button
                            className="btn btn-danger btn-lg mb-2 ml-1"
                            onClick={() =>
                              dispatch(deleteSchedule(schedule._id))
                            }
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                          <Link
                            to={`/imc/MaintenanceRequest/assignEquipment/${schedule._id}`}
                          >
                            <button className="btn btn-primary btn-lg mb-2 ml-1">
                              <i className="fas fa-dolly-flatbed-alt"></i>
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </>
          }
        </div>
      </form>
    </div>
  );
}

export default ViewMaintenanceSchedule;
