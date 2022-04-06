import React from 'react'

function MaintenanceRequest() {
    return (
        <div id='MaintenanceModal' className='modal'>
              <div className="modal-dialog modal-dialog-centered modal-lg">
                 <div className="modal-content">
                 <form>
      
                    {/* Header */}
                      <div className="modal-header bg-danger text-white">
                        <h5 className='modal-title'>Maintenance Request</h5>
                        <button className='close' data-dismiss='modal'>
                            <span><i class="fa-solid fa-xmark"></i></span>
                        </button>
                      </div>
    
                    {/* Body */}
                      <div className="modal-body my-2">
                              
                                  <>
                                    <div className="container">
                                          <div className="row">
                                                {/* <div className="card-deck">
                                                    {reservation && reservation.map(r =>(
                                                      <div className="card text-dark" key={reservation._id} r={reservation}>{r.title}, {r.status}</div>
                                                      // <label className="text-dark" data-toggle="popover" key={reservation._id} r={reservation}>{r.title}</label>
                                                      
                                                    ))}
                                                </div> */}
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

export default MaintenanceRequest