import React from 'react'
function UserActionBtns() {
  return (
    <div>
    <div className="container">
        <div className="row pb-3">
            <div className="col-md-4 my-1">
                <button className=" p-0 display-6 btn btn-danger" data-toggle='modal' data-target='#addReservationModal'>
                <i className="fa-solid fa-circle-plus"></i> <br /> Add Reservation
                </button>    
            </div>

            <div className="col-md-6 my-1">
                <button className=" p-0 display-6 btn btn-success" data-toggle='modal' data-target='#viewReservationModal'>             
                <p className="p-0 m-0 fas fa-eye"> </p> <br /> View Reservation                  
                </button>    
            </div>
        </div>
    </div>    
</div>
  )
}

export default UserActionBtns