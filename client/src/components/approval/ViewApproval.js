import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getReservations,
  getReservation,
} from "../../redux/actions/reservationAction";
import { deleteReservation } from "../../redux/actions/reservationAction";
import ViewRequest from "./ViewRequest";
function ViewApproval() {
  const { reservation } = useSelector((state) => state.reservation);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getReservations());
  // }, [dispatch]);

  return (
    <div id="approvalReservationModal" className="modal">
      <div className=".modal-fullscreen">
        <div className="modal-content">
          <form>
            {/* Header */}
            <div className="modal-header text-white">
              <h5 className="modal-title">View Reservation</h5>
              <button className="close" data-dismiss="modal">
                {/* <span>
                  <i className="fa-solid fa-xmark"></i>
                </span> */}
              </button>
            </div>

            {/* Body */}
            <div className="modal-body my-2">
              <>
                {reservation &&
                  reservation.map((reservation) => (
                    // <div className='card'>{product.productName}</div>
                    <ViewRequest
                      key={reservation._id}
                      reservation={reservation}
                    />
                  ))}
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

export default ViewApproval;
