import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useParams } from 'react-router-dom'
import {
  deleteReservation,
  getReservations,
} from "../../redux/actions/reservationAction";
import { Link } from "react-router-dom";
import Moment from "moment";
// import { Link } from 'react-router-dom'
// import DisplayIndividualReservation from './DisplayIndividualReservation'
// import { isAuthenticated } from '../helpers/auth'
// import axios from 'axios'
function ViewReservationModal() {
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
                      <th scope="col">Activity Type</th>
                      <th scope="col">Date Of Event</th>
                      <th scope="col">Time of Event</th>
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
                          <td>{reservation.title}</td>
                          <td>{reservation.activityType}</td>
                          {/* <td>
                            {
                              (reservation.dateOfEvent = Moment().format(
                                "MMM Do YY"
                              ))
                            }
                          </td>
                          <td>
                            {
                              (reservation.timeOfEvent = Moment().format(
                                "hh:mm A"
                              ))
                            }
                          </td> */}
                          <td>{reservation.timeOfEvent}</td>
                          <td>{reservation.dateOfEvent}</td>
                          <td>{reservation.nameOfReqParty}</td>
                          <td>{reservation.venue}</td>

                          <td className="text-primary">{reservation.status}</td>
                          <td>
                            <button
                              className="btn-danger my-0 py-0 rounded"
                              onClick={() =>
                                dispatch(deleteReservation(reservation._id))
                              }
                            >
                              Delete Request
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

export default ViewReservationModal;
