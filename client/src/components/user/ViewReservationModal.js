import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useParams } from 'react-router-dom'
import {
  deleteReservation,
  getReservations,
} from "../../redux/actions/reservationAction";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'
// import DisplayIndividualReservation from './DisplayIndividualReservation'
// import { isAuthenticated } from '../helpers/auth'
// import axios from 'axios'
function ViewReservationModal() {
  // const [showData, setShowData ] = useState("")

  // const reservationId = useParams()
  // console.log(reservationId)
  //Redux global state
  const { reservation } = useSelector((state) => state.reservation);
  // const userId = mat
  // const {activityType,title,timeDuration ,numberParticipants,nameOfReqParty,venue,soundSystem,bluetoothSpeaker,microphone,
  //      projector,projectorScreen,lights,videoDocumentation,photoDocumentation,janitorial,security,electricians,itTechnicians,
  //      soundOperators,generatorOperators,van,phFlag,uncFlag,aircon,fan,generator,plants,displayBoards,monoblocks,pavillionTable,
  //     industrialFan,aeratronFan,coolerfan,others,computers,printers,uncTheaterGuild,collegeBand,hsDxmc,hsMajorettes,
  //     collegeMajorettes,elementaryMajorettes,cat} = reservation

  const dispatch = useDispatch();
  // const userId
  // useEffect(() => {
  //     if(reservationId && reservationId !== "") dispatch(getReservation(reservationId))
  //     // return () => {
  //     //   dispatch()
  //     // }
  // },[dispatch,reservationId])
  // const reservations = useSelector((state) => state)
  // const dispatch = useDispatch()

  // const fecthReservations = async () =>{
  //   const response = await axios .get("/api/reservation")
  //   .catch((err) => {
  //     console.log("Err api", err)
  //   })
  //   dispatch(getReservations(response.data))
  // }
  // useEffect(() =>{
  //   fecthReservations()
  // }, [])
  // console.log("Reservations: ", reservations)

  // useEffect(() =>{
  //     if(!reservation){
  //         dispatch(getReservation(reservationId))
  //     }
  //     else{
  //         setShowData(reservation.activityType)
  //     }
  // }, [dispatch,reservation, reservationId])
  // console.log(reservation.activityType)

  // console.log(reservationId)

  // useEffect(() =>{

  //     dispatch(getReservation(reservationId))
  // }, [dispatch, reservationId])

  // useEffect(() =>{
  //     if(email){
  //       dispatch(getReservations())
  //     }

  // }, [dispatch])
  //   useEffect(() =>{
  //     if(isAuthenticated().email){
  //         dispatch(getReservations())
  //     }

  // }, [dispatch])
  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  return (
    <div id="viewReservationModal" className="modal">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <form>
            {/* Header */}
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title">View Reservation</h5>
              <button className="close" data-dismiss="modal">
                <span>
                  <i class="fa-solid fa-xmark"></i>
                </span>
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
                      <th scope="col">Time Duration</th>
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
                          <td>{reservation.timeDuration}</td>
                          <td>{reservation.nameOfReqParty}</td>
                          <td>{reservation.venue}</td>
                          <td>{reservation.status}</td>
                          <td>
                            {/* <Link
                              to={`/maintenance/edit/${reservation._id}`}
                              className="btn btn-warning btn-lg mb-2"
                              data-toggle="modal"
                              data-target="#EditEquipmentsModal"
                              data-dismiss="modal"
                              // key={e._id}
                            >
                              Edit
                            </Link> */}

                            {/* <EditEquipments
                                  key={e._id}
                                  e={e}
                                  className="btn btn-warning btn-lg mb-2"
                                >
                                  Edit
                                </EditEquipments> */}
                            <button
                              className="btn btn-danger btn-lg mb-2"
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
