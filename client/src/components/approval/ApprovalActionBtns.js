import React from 'react'

function ApprovalActionBtns() {
  return (
    <div>
        <div className="container">
            <div className="row pb-3">
                
                <div className="col-md-6 my-1">
                    <button className=" p-0 display-6 btn btn-success" data-toggle='modal' data-target='#approvalReservationModal'>             
                    <p className="p-auto m-0 fas fa-eye"> </p> <br /> Approval Reservation                  
                    </button>    
                </div>
            </div>
        </div>    
    </div>
  )
}

export default ApprovalActionBtns