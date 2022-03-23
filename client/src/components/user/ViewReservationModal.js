import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getReservation, getReservations } from '../../redux/actions/reservationAction'
import { Link } from 'react-router-dom'
import DisplayIndividualReservation from './DisplayIndividualReservation'
// import axios from 'axios'
function ViewReservationModal() {
    // const [showData, setShowData ] = useState("")
    
    // const reservationId = useParams()
    // console.log(reservationId)
    //Redux global state 
    const {reservation} = useSelector( state => state.reservation)
    // const {activityType,title,timeDuration ,numberParticipants,nameOfReqParty,venue,soundSystem,bluetoothSpeaker,microphone,
    //      projector,projectorScreen,lights,videoDocumentation,photoDocumentation,janitorial,security,electricians,itTechnicians,
    //      soundOperators,generatorOperators,van,phFlag,uncFlag,aircon,fan,generator,plants,displayBoards,monoblocks,pavillionTable,
    //     industrialFan,aeratronFan,coolerfan,others,computers,printers,uncTheaterGuild,collegeBand,hsDxmc,hsMajorettes,
    //     collegeMajorettes,elementaryMajorettes,cat} = reservation
    const dispatch = useDispatch()

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

    useEffect(() =>{   
        dispatch(getReservations())
    }, [dispatch])

  return (
    <div id='viewReservationModal' className='modal'>
          <div className="modal-dialog modal-dialog-centered modal-lg">
             <div className="modal-content">
             <form>
  
                {/* Header */}
                  <div className="modal-header bg-info text-white">
                    <h5 className='modal-title'>View Reservation</h5>
                    <button className='close' data-dismiss='modal'>
                        <span><i class="fa-solid fa-xmark"></i></span>
                    </button>
                  </div>

                {/* Body */}
                  <div className="modal-body my-2">
                          
                              <>
                                <div className="container">
                                      <div className="row">
                                            <div className="card-deck">
                                                {reservation && reservation.map(r =>(
                                                  <div className="card text-dark" key={reservation._id} r={reservation}>{r.title}</div>
                                                  // <label className="text-dark" data-toggle="popover" key={reservation._id} r={reservation}>{r.title}</label>
                                                  
                                                ))}
                                            </div>
                                      </div>
                                </div>
                                

                                {/* <label className='text-secondary'>{reservation.activityType}</label> */}

                                {/* <div className="four wide column" key={reservationId}>
                                      <label className='text-secondary'>{activityType}</label>

                                  <Link to={`/api/reservation/${reservationId}`}></Link>
                                </div> */}
                                   
                                   {/* <div>{JSON.stringify(reservation)}</div> */}
                                   {/* <div>{JSON.stringify(showData)}</div> */}

                                {/* <label className='text-secondary'>{showData}</label> */}
                                {/* <input type="text" className='form-control' name='category' value={category} onChange={handleCategoryChange} /> */}
                                {/* {reservation && reservation.map(r =>(
                                    <h1 key={r._id} value={r._id}>{r.reservation}</h1>
                                ))} */}
                                {/* {reservation && reservation.map((reservations, key) =>{
                                    return <div key ={key}>{reservations.activityType}</div>
                                })} */}
                                {/* {reservation && reservation.map((r) =>{
                                    return (
                                      <div key ={r._id}>{r}</div>
                                )
                                })} */}
                                 {/* {reservation && reservation.map(r =>(
                                    <h1 key={r._id} value={r._id}>{r.reservation}</h1>
                                ))} */}
                              </>
                                
                           
                  </div>

                  {/* Footer */}
                  <div className="modal-footer">
                      <button className='btn btn-secondary' data-dismiss= 'modal'>Close</button>
                      {/* <button type='submit' className='btn btn-info'>Submit</button> */}
                  </div>  
             </form>
             </div> 
            
          </div>
      </div>
  )
}

export default ViewReservationModal