import React from "react";
import { isAuthenticated } from "../helpers/auth";
// import {Link} from "react-router-dom"
import AddReservationModal from "./AddReservationModal";
import UserActionBtns from "./UserActionBtns";
import ViewReservationModal from "./ViewReservationModal";

// import {useDispatch} from 'react-redux'
// import { getReservations } from '../../redux/actions/reservationAction'
function User() {
  // const dispatch = useDispatch()

  // useEffect(() =>{
  //     dispatch(getReservations())
  // },[dispatch])
  //if you see an error of Cannot read properties of undefined (reading 'data')
  // go to controller of reservation and under the res.json(reservation) add {} res.json({reservation})
  return (
    <div className="home">
      <img className="homeImg" src="/img/HOME1.jpg" alt="" />
      <div className="home-title">
        <h1>Hello {isAuthenticated().username}</h1>
        <p>Event Organizer</p>

        {/* <h1>Welcome to University of Nueva Caceres</h1>
        <h3>Event Facility Management System</h3> */}
      </div>
      <div className="button-home">
        {/* <Link to="/reservation">
                    <button className="home-sign-in"> Set Reservation</button>
                </Link> */}
        <UserActionBtns />
        {/* <AddReservationModal/> */}
        {/* <ViewReservationModal /> */}
        {/* <Link to="/viewapproval">
                    <button className="home-sign-up">View Approval</button>
                </Link> */}
        {/* <Link to="/">
                    <button className="home-sign-up">Logout</button>
                </Link> */}
      </div>
    </div>
  );
}

export default User;
