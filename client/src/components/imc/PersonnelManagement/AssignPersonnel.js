import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { getEquipments } from "../api/inventoryEquipment";
import { showLoading } from "../../helpers/loading";
import { useDispatch, useSelector } from "react-redux";
import { getImcDocumentation } from "../../../redux/actions/reservationAction";
// import { assignImcDocumentationPersonnel } from "../../../redux/actions/personnelAction";
import axios from "axios";
import { assignPersonnel } from "../../../redux/actions/assignPersonnelAction";
import { getAssignPersonnel } from "../../../redux/actions/assignPersonnelAction";

function AssignPersonnel({ match }) {
  const { reservation } = useSelector((state) => state.reservation);
  const { personnels } = useSelector((state) => state.personnel);
  // const { assignPersonnel } = useSelector((state) => state.assignPersonnel);
  const dispatch = useDispatch();
  const [assignReservationId, setAssignReservationId] = useState("");
  // const personnelId = match.params.personnelId;

  const [personnelId, setPersonnelId] = useState("");
  // useEffect(() => {
  //   dispatch(getAssignPersonnel(personnelId));
  // }, []);

  // useEffect(() => {
  //   if (assignPersonnel) {
  //     setAssignReservationId({ ...assignPersonnel });
  //   }
  // }, [assignPersonnel]);

  useEffect(() => {
    dispatch(getImcDocumentation());
  }, [dispatch]);

  // useEffect(() => {
  //   if (!reservation) {
  //     dispatch(getImcDocumentation(reservationId));
  //   } else {
  //     setReservationId(reservation._id);
  //   }
  // }, [dispatch, reservationId, reservation]);

  const handleAssigning = (e) => {
    e.preventDefault();
    console.log(assignReservationId);
    console.log(personnelId);
    // const formData = new FormData();
    // formData.append("reservationId", reservation._id);
    // reservation._id;
    dispatch(
      assignPersonnel(
        assignReservationId,
        personnelId
        // formData,
      )
    );

    // dispatch(assignImcDocumentationPersonnel(currentReservationId));
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // await axios
    //   .post(
    //     `/api/personnelServices/personnelServices/Assign/${personnelId}`
    //     // config
    //   )
    //   .then((res) => {
    //     // history.push("/imc/view");
    //     console.log("Update equipment Successfully");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div>
      <Link to="/imc/PersonnelManagement/ViewPersonnel">
        <span className="fas fa-plus-circle text-white display-7 bg-success p-3 rounded">
          Back
        </span>
      </Link>
      {/* <div>{JSON.stringify(assignReservationId)}</div> */}
      {/* <div>Personnel ID: {JSON.stringify(personnelId)}</div> */}

      <label className="text-dark mb-5"> Reservation ID</label>
      <input
        className="form-control mb-5"
        type="text"
        name="assignReservationId"
        value={assignReservationId}
        // onChange={handleInventory}
        onChange={(e) => setAssignReservationId(e.target.value)}
      />
      <label className="text-dark mb-5"> Personnel ID</label>
      <input
        className="form-control mb-5"
        type="text"
        name="personnelId"
        value={personnelId}
        // onChange={handleInventory}
        onChange={(e) => setPersonnelId(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleAssigning}
      >
        Submit
      </button>
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <form>
            {/* Header */}
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title">View Reservation</h5>
              <Link to={"/user/dashboard/"}>
                <button className="close" data-dismiss="modal">
                  <span>
                    <i class="fa-solid fa-xmark"></i>
                  </span>
                </button>
              </Link>
            </div>

            {/* Body */}
            <div className="modal-body my-2">
              <>
                <table class="table table-hover">
                  <thead class="thead-dark ">
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">ID</th>
                      <th scope="col">Activity Type</th>
                      <th scope="col">Time Duration</th>
                      <th scope="col">Name of Requested Party</th>
                      <th scope="col">Photo Documentation</th>
                      <th scope="col">Video Documentation</th>
                      <th scope="col">Venue</th>
                      <th scope="col">Status</th>
                      <th scope="col">Assign</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservation &&
                      reservation.map((reservation) => (
                        <tr key={reservation._id} reservation={reservation}>
                          <td>{reservation.title}</td>
                          <td>{reservation._id}</td>
                          <td>{reservation.activityType}</td>
                          <td>{reservation.timeDuration}</td>

                          <td>{reservation.nameOfReqParty}</td>
                          <td>{reservation.photoDocumentation}</td>
                          <td>{reservation.videoDocumentation}</td>
                          <td>{reservation.venue}</td>

                          <td className="text-primary">{reservation.status}</td>

                          <td>
                            {" "}
                            {/* <Link
                              to={`/imc/PersonnelManagement/${currentPersonnel}/${reservation._id}`}
                              className="btn btn-success btn-lg mb-2"
                            >
                              <i className="fas fa-users-medical"></i>
                              
                            </Link> */}
                            <button
                              onClick={handleAssigning}
                              className="btn btn-success btn-lg mb-2"
                            >
                              <i className="fas fa-users-medical"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {/* //{" "} */}
              </>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AssignPersonnel;
