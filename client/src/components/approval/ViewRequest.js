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

        <div className="card-body text-center">
          {/* <h5>{reservations.title}</h5>
          <hr /> */}
          <h6 className="mb-3">
            <span className="text-secondary mr-2">
              <p className="font-weight-bold">Activity Type</p>
              <p> {reservation.activityType}</p>
              <p className="font-weight-bold">Title</p>
              {reservation.title}
              <p className="font-weight-bold pt-4">Duration</p>
              <p>{reservation.timeDuration}</p>
            </span>
          </h6>
          {/* <Link
            to={`/admin/edit/product/${product._id}`}
            type="button"
            className="btn btn-secondary btn-sm mr-1 my-1"
          >
            <i className="far fa-edit pr-1"></i>
            Edit
          </Link> */}
          <Link
            to={`/view/edit/${reservation._id}`}
            type="button"
            className="btn btn-warning btn-sm mr-1 my-1"
            // onClick={() =>
            //   dispatch(getReservation(reservation._id))
            // }
          >
            Edit Request to Approve
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
    // <div id="">
    //   <div>{JSON.stringify(reservationId)}</div>

    //   <div className="modal-dialog modal-dialog-centered modal-lg">
    //     <div className="modal-content bg-light">
    //       <form onSubmit={handleReservationRequestSubmit}>
    //         {/* Header */}
    //         <div className="modal-header bg-success text-white text-center border-0">
    //           <h5 className="modal-title w-100">View Request</h5>
    //           <button className="close" data-dismiss="modal">
    //             <span>
    //               <i class="fa-solid fa-xmark"></i>
    //             </span>
    //           </button>
    //         </div>

    //         {/* Body */}
    //         <div className="modal-body my-2">
    //           {/* {clientSideErrorMsg && showErrorMsg(clientSideErrorMsg)}
    //                     {clientSideSuccessMsg && showSuccessMsg(clientSideSuccessMsg)} */}
    //           {errorMsg && showErrorMsg(errorMsg)}
    //           {successMsg && showSuccessMsg(successMsg)}

    //           {
    //             <>
    //               {/* <label className="text-dark">Title</label>
    //               <input
    //                 className="form-control"
    //                 name="title"
    //                 value={reservations.title}
    //                 type="text"
    //                 onChange={(e) => {
    //                   // console.log(e.target.value);
    //                   setTitle(e.target.value);
    //                 }}
    //               />

    //               <label className="text-dark">Status</label>
    //               <input
    //                 className="form-control"
    //                 name="activityType"
    //                 value={reservations.status}
    //                 type="text"
    //                 onChange={(e) => {
    //                   // console.log(e.target.value);
    //                   setActivityType(e.target.value);
    //                 }}
    //               /> */}
    //               <thead class="thead-dark">
    //                 <tr>
    //                   <th scope="col">Title</th>
    //                   <th scope="col">Activity Type</th>
    //                   <th scope="col">Time Duration</th>
    //                   <th scope="col">Name of Requested Party</th>
    //                   <th scope="col">Venue</th>
    //                   <th scope="col">Status</th>
    //                   <th scope="col">Action</th>
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                 <tr>
    //                   <td>{reservations.title}</td>
    //                   <td>{reservations.activityType}</td>
    //                 </tr>
    //               </tbody>
    //               <Link
    //                 to={`/view/${reservations._id}`}
    //                 className="btn btn-warning btn-lg mb-2"
    //                 // onClick={() =>
    //                 //   dispatch(getReservation(reservation._id))
    //                 // }
    //               >
    //                 Edit Request
    //               </Link>
    //             </>

    // if all input field has been inputted, show loading animation but remove the input fields
    // loading ? (
    //   <div className="text-center">{showLoading()}</div>
    // ) : (
    //else show input fields with error
    // <>
    //   <label className="text-dark">Equipment name</label>
    //   <input
    //     className="form-control"
    //     name="equipmentName"
    //     value={equipmentName}
    //     type="text"
    //     onChange={(e) => {
    //       setEquipmentName(e.target.value);
    //     }}
    //   />
    //   <label className="text-dark">Quantity</label>
    //   <input
    //     className="form-control"
    //     name="quantity"
    //     value={quantity}
    //     type="number"
    //     onChange={(e) => {
    //       setQuantity(e.target.value);
    //     }}
    //   />
    //   <div className="form-group">
    //     <label className="text-dark">Description</label>
    //     <textarea
    //       className="form-control"
    //       name="description"
    //       rows="5"
    //       placeholder="Details of the equipment..."
    //       value={description}
    //       onChange={(e) => {
    //         setDescription(e.target.value);
    //       }}
    //     ></textarea>
    //   </div>
    //   <label className="text-dark">Date Added</label>
    //   <input
    //     className="form-control"
    //     name="dateAdded"
    //     value={dateAdded}
    //     type="date"
    //     onChange={(e) => {
    //       setDateAdded(e.target.value);
    //     }}
    //   />
    // </>
    // )
    // }
    //             </div>

    //             {/* Footer */}
    //             <div className="modal-footer border-0 ">
    //               <button className="btn btn-danger" data-dismiss="modal">
    //                 Cancel
    //               </button>
    //               <button type="submit" className="btn btn-primary">
    //                 Edit
    //               </button>

    //               {/* <button type='submit' className='btn btn-info'>Submit</button> */}
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
  );
}

export default ViewRequest;
