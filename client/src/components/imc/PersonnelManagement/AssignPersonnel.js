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
  const linkpersonnel = match.params.personnelId;
  const [assignPersonnelData, setAssignPersonnelData] = useState({
    assignReservationId: "",
    personnelId: linkpersonnel,
  });
  const [buttonReservation, setButtonReservation] = useState("");

  const handleClickReservation = (e) => {
    e.preventDefault();
    setButtonReservation(reservation._id);
  };
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

  const { assignReservationId, personnelId } = assignPersonnelData;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setAssignPersonnelData({ ...assignPersonnelData, [name]: value });
  };

  const handleAssigning = (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append("reservationId", reservation._id);
    // reservation._id;
    dispatch(assignPersonnel(assignPersonnelData));
    alert("Success");
  };

  return (
    <div>
      <div className="container border border-info mt-4 rounded">
        <Link to="/imc/PersonnelManagement/ViewPersonnel">
          <span className="fal fa-angle-left ml-2 text-white display-7 bg-success p-3 rounded mt-3">
            Back
          </span>
        </Link>
        {/* <div>{JSON.stringify(assignReservationId)}</div> */}
        {/* <div>Personnel ID: {JSON.stringify(personnelId)}</div> */}
        <br />

        <label className="text-dark mt-3"> Reservation ID</label>
        <input
          className="form-control mb-5"
          type="text"
          name="assignReservationId"
          value={assignReservationId}
          // onChange={handleInventory}
          onChange={handleInputChange}
        />
        <label className="text-dark mb-2"> Personnel ID</label>
        <input
          className="form-control mb-5"
          type="text"
          name="personnelId"
          value={personnelId}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={handleAssigning}
        >
          Submit
        </button>
      </div>

      {/* <div className="modal-dialog modal-dialog-centered modal-xl"> */}
      <div className="mt-4 p-5">
        {/* className="modal-content mt-4 p-5 " */}
        <form>
          {/* Header */}
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">View Reservation</h5>
            {/* <Link to={"/user/dashboard/"}>
              <button className="close" data-dismiss="modal">
                <span>
                  <i class="fa-solid fa-xmark"></i>
                </span>
              </button>
            </Link> */}
          </div>

          {/* Body */}
          <div className="modal-body my-2 table-responsive-md">
            <>
              <table class="table table-hover ">
                <thead class="thead-dark  ">
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
                            onClick={handleClickReservation}
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
          {/* <div className="modal-footer">
            <button className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
          </div> */}
        </form>
      </div>
    </div>
    // </div>
  );
}

export default AssignPersonnel;
