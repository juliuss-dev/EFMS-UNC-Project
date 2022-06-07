import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { getEquipments } from "../api/inventoryEquipment";
import { showLoading } from "../../helpers/loading";
import { useDispatch, useSelector } from "react-redux";
import { getImcPersonnelSchedule } from "../../../redux/actions/assignPersonnelAction";

function ViewPersonnelSchedule() {
  const { assignPersonnel } = useSelector((state) => state.assignPersonnel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImcPersonnelSchedule());
  }, [dispatch]);
  return (
    <div className="container my-2">
      <div className="d-flex flex-row-reverse">
        <Link to="/imc/PersonnelManagement/ViewPersonnel">
          <span className="fas fa-plus-circle text-white display-7 bg-success p-3 rounded">
            Back
          </span>
        </Link>
      </div>

      <form>
        {/* Header */}

        {/* Body */}
        <div className="modal-body my-2">
          {
            <>
              <table class="table table-hover">
                <thead class="thead-dark">
                  <tr>
                    {/* <th scope="col">ID</th> */}
                    <th scope="col">Activity Name</th>
                    <th scope="col">Name of Requesting Party</th>
                    <th scope="col">Date of Event</th>
                    <th scope="col">Time of Event</th>
                    <th scope="col">Service Name</th>
                    <th scope="col">Personnel Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {assignPersonnel &&
                    assignPersonnel.map((assignPersonnel) => (
                      <tr>
                        <td>{assignPersonnel.title}</td>
                        <td>{assignPersonnel.nameOfRequestingParty}</td>
                        <td>{assignPersonnel.dateOfEvent}</td>
                        <td>{assignPersonnel.timeOfEvent}</td>
                        <td>{assignPersonnel.assignServiceName}</td>
                        <td>{assignPersonnel.personnelName}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {/* //{" "} */}
            </>
          }
        </div>
      </form>
    </div>
  );
}

export default ViewPersonnelSchedule;
