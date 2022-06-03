import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteReservation,
  getReservation,
} from "../../redux/actions/reservationAction";
import { showSuccessMsg, showErrorMsg } from "../helpers/message";
import { Link } from "react-router-dom";

import axios from "axios";
function ViewRequest({ reservation }) {
  const dispatch = useDispatch();
  // const { reservation } = useSelector((state) => state.reservation);

  return (
    <div className="col-md-4 my-3">
      <div className="card h-100">
        {/* <a href="#!">
          <img
            className="img-fluid w-100"
            src={`/uploads/${product.fileName}`}
            alt="product"
          />
        </a> */}

        <div className="card-body text-center text-secondary">
          <h5 className="text-secondary font-weight-bold">Title</h5>
          <h5 className="text-success">{reservation.title}</h5>
          <hr />
          <h6 className="text-secondary font-weight-bold">Activity Type</h6>
          <h6 className=" mb-3 text-success">
            {reservation.activityType}
            {/* <span className="text-secondary mr-2">
              {product.productPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "PHP",
              })}
            </span> */}
          </h6>
          <p className="text-secondary font-weight-bold">Status</p>
          <p className="text-success">
            {reservation.status}
            {/* {product.productDesc.length > 60
              ? product.productDesc.substring(0, 60) + "..."
              : product.productDesc.substring(0, 60)} */}
          </p>
          <Link
            to={`/view/edit/${reservation._id}`}
            type="button"
            className="btn btn-secondary btn-sm mr-1 my-1"
          >
            <i className="far fa-edit pr-1"></i>
            Edit
          </Link>

          <button
            type="button"
            className="btn btn-danger btn-sm mr-1 my-1"
            onClick={() => dispatch(deleteReservation(reservation._id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewRequest;
