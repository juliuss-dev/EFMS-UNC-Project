import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { getEquipments } from "../api/inventoryEquipment";
import { showLoading } from "../../helpers/loading";
import { useDispatch, useSelector } from "react-redux";
import { getImcDocumentation } from "../../../redux/actions/reservationAction";

function AssignPersonnel() {
  const { reservation } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImcDocumentation());
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
                      <th scope="col">Time Duration</th>
                      <th scope="col">Name of Requested Party</th>
                      <th scope="col">Photo Documentation</th>
                      <th scope="col">Video Documentation</th>
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
                          <td>{reservation.timeDuration}</td>

                          <td>{reservation.nameOfReqParty}</td>
                          <td>{reservation.photoDocumentation}</td>
                          <td>{reservation.videoDocumentation}</td>
                          <td>{reservation.venue}</td>

                          <td className="text-primary">{reservation.status}</td>
                          <td></td>
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

export default AssignPersonnel;
