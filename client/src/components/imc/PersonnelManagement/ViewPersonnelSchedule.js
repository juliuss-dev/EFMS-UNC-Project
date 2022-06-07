import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { getEquipments } from "../api/inventoryEquipment";
import { showLoading } from "../../helpers/loading";
import { useDispatch, useSelector } from "react-redux";
import { getImcPersonnelSchedule } from "../../../redux/actions/assignPersonnelAction";

function ViewPersonnelSchedule({ match }) {
  const { assignPersonnel } = useSelector((state) => state.assignPersonnel);
  const [personnelId, setPersonnelId] = useState("");

  const personnelIdLink = match.params.personnelId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImcPersonnelSchedule(personnelIdLink));
  }, [dispatch]);
  return (
    <div className="container my-2">
      <h1 className="d-flex justify-content-center ">Personnel Schedule</h1>
      <div className="d-flex flex-row-reverse">
        <Link to="/imc/PersonnelManagement/ViewPersonnel">
          <span className="fas fa-angle-double-left text-white display-7 bg-success p-3 rounded">
            {" "}
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
                  </tr>
                </thead>
                <tbody>
                  {assignPersonnel &&
                    assignPersonnel.map((assignPersonnel) => (
                      <tr
                        key={assignPersonnel._id}
                        assignPersonnel={assignPersonnel}
                      >
                        <td>{assignPersonnel.activityName}</td>

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
