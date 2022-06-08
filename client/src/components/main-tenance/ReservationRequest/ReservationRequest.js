import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useParams } from 'react-router-dom'
import {
  deleteReservation,
  getReservations,
} from "../../../redux/actions/reservationAction";
import { Link } from "react-router-dom";

function ReservationRequest() {
  const { reservation } = useSelector((state) => state.reservation);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  return (
    <div>
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <form>
            {/* Header */}
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">View Reservation Request</h5>
              <button className="close" data-dismiss="modal">
                <Link to={"/maintenance/dashboard"}>
                  {" "}
                  <span>
                    <i className="fa-solid fa-xmark text-white"></i>
                  </span>
                </Link>
              </button>
            </div>

            {/* Body */}
            <div className="modal-body my-2">
              <>
                <table class="table table-hover">
                  <thead class="thead-dark ">
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Activity Type</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Name of Requested Party</th>
                      <th scope="col">Venue</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservation &&
                      reservation.map((reservation) => (
                        <tr key={reservation._id} reservation={reservation}>
                          {/* <th scope="row"></th> */}
                          <td>{reservation.title}</td>
                          <td>{reservation.activityType}</td>
                          <td>{reservation.dateOfEvent}</td>
                          <td>{reservation.timeOfEvent}</td>
                          <td>{reservation.nameOfReqParty}</td>
                          <td>{reservation.venue}</td>
                          <td className="text-primary">{reservation.status}</td>
                          <td>
                            <button
                              className="btn btn-danger btn-lg mb-2 ml-1 "
                              onClick={() =>
                                dispatch(deleteReservation(reservation._id))
                              }
                            >
                              <i className="fas fa-trash"></i>

                              {/* Delete Request */}
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
              {/* <button type='submit' className='btn btn-info'>Submit</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReservationRequest;
