import { useState, useEffect } from "react";
import "../reservation/Reservation.css";
// import "../approval/Approval.css"
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  getReservation,
  getReservations,
} from "../../redux/actions/reservationAction";
import ViewApproval from "./ViewApproval";
import ApprovalActionBtns from "./ApprovalActionBtns";
// import ViewRequest from "./ViewRequest";
function ApprovalDashboard() {
  //   const reservation = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  // const [change, setChange] = useState("title")

  // const handleChange = (event) =>{
  //     setChange(event.target.value)
  // }
  // const resetRadioState = () => {
  //     setChange("");
  //   }
  return (
    <div className="home">
      {/* <img className="homeImg" src="/img/HOME1.jpg" alt="" /> */}
      {/* <div className="home-title">
        <h1>Approval Dashboard</h1>
        <h3>Event Facility Management System</h3>
      </div> */}
      {/* <div className="button-home"> */}
      {/* <ApprovalActionBtns /> */}
      <ViewApproval />
      {/* <ViewRequest /> */}
      {/* </div> */}
    </div>
  );
}

export default ApprovalDashboard;
