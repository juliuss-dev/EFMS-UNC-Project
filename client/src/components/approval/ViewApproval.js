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
    <div className="container">
      <div className="row">
        <div className="card-deck">
          {/* map each element of product and display the productName which is the property in DB */}
          {/* product argument is like a single product to be render out of many products that we have */}
          {/* if producst exist map */}
          {reservation &&
            reservation.map((reservation) => (
              // <div className='card'>{product.productName}</div>
              <ViewRequest key={reservation._id} reservation={reservation} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ViewApproval;
